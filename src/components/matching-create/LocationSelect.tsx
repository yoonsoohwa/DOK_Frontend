import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, FormLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setLocation, setLocationDetail } from "../../store";
import styled from "styled-components";
import { LocationOn, Search } from "@mui/icons-material";
import { SearchButton } from "common/button/SearchButton";

export function LocationSelect() {
  const { location, locationDetail } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [mapOpen, setMapOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent) => {
    setMapOpen(true);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    dispatch(setLocation(address));
    setMapOpen(false);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== "backdropClick") {
      setMapOpen(false);
    }
  };

  var geocoder = new kakao.maps.services.Geocoder();
  // 키워드 검색
  // const ps = new kakao.maps.services.Places();

  useEffect(() => {
    geocoder.coord2Address(position.lng, position.lat, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var addr = !!result[0] && (result[0].road_address?.address_name || result[0].address.address_name);
        setAddress(addr);
        /*
        검색 기능(추가기능) 구현 시 필요한 부분

        dispatch(setLocation(addr));

        마커를 클릭한 위치에 표시
        marker.setPosition(mouseEvent.latLng);
        marker.setMap(map);

        인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보 표시
        infowindow.setContent(content);
        infowindow.open(map, marker);
         */
      }
    });
  }, [position]);

  useEffect(() => {
    //사용자 위치 정보로 초기화
    const userLocation = "서울특별시 서초구 강남대로 399";

    geocoder.addressSearch(userLocation, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        setPosition({ lat: Number(result[0].y), lng: Number(result[0].x) });
        dispatch(setLocation(userLocation));
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    });
  }, []);

  return (
    <LocationLayout>
      <FormLabel component="legend">
        <LocationOn className="icon" />
        만남 위치
      </FormLabel>
      <div className="flex">
        <TextField id="" size="small" InputProps={{ readOnly: true }} value={location} fullWidth />
        <SearchButton onClick={handleOpen} />
      </div>
      <TextField id="" size="small" value={locationDetail} onChange={(e) => dispatch(setLocationDetail(e.target.value))} placeholder="상세 위치" fullWidth />

      <Dialog disableEscapeKeyDown open={mapOpen} onClose={handleClose} maxWidth={false}>
        <DialogTitleBox>만남 장소를 선택해주세요</DialogTitleBox>
        <DialogContentBox dividers>
          <div className="location-text">
            <LocationOn className="icon" color="primary" />
            <span>{address}</span>
          </div>
          <Map // 지도를 표시할 Container
            id="map"
            center={{ lat: position.lat, lng: position.lng }}
            isPanto={true}
            style={{
              // 지도의 크기
              width: "80vw",
              maxWidth: "1024px",
              height: "60vh",
            }}
            level={2} // 지도의 확대 레벨
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          >
            <MapMarker
              position={position}
              draggable={true}
              onDragEnd={(mouseEvent) =>
                setPosition({
                  lat: mouseEvent.getPosition().getLat(),
                  lng: mouseEvent.getPosition().getLng(),
                })
              }
            />
          </Map>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              취소
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              확인
            </Button>
          </DialogActions>
        </DialogContentBox>
      </Dialog>
    </LocationLayout>
  );
}

const LocationLayout = styled.div`
  .flex {
    display: flex;
    margin-bottom: 10px;
  }

  .location-text {
    display: flex;
    align-items: center;
  }
`;

const DialogTitleBox = styled(DialogTitle)`
  /* background-color: ${({ theme }) => theme.sub}; */
  color: #5e5e5e;
`;

const DialogContentBox = styled(DialogContent)`
  .location-text {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 28px;
    font-weight: 500;
    margin: 10px 0 30px;

    .icon {
      width: inherit;
      height: inherit;
    }
  }
`;
