import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, FormLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setLocation, setLocationDetail } from 'store/index';
import styled from 'styled-components';
import { LocationOn, Search } from '@mui/icons-material';
import { SearchButton } from 'common/button/SearchButton';

const geocoder = new kakao.maps.services.Geocoder();
// 키워드 검색
// const ps = new kakao.maps.services.Places();

export function LocationSelect() {
  const { locationSelect, locationDetailSelect } = useSelector((state: RootState) => state.matchingForm);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [locationText, setLocationText] = useState('');
  const [locationCode, setLocationCode] = useState('');
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [mapOpen, setMapOpen] = useState(false);

  const handleOpen = () => {
    setMapOpen(true);
  };

  const handleSubmit = () => {
    const newLocation = { text: locationText, code: locationCode };
    dispatch(setLocation(newLocation));
    setMapOpen(false);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setMapOpen(false);
    }
  };

  const handleChangeLocation = (lng: number, lat: number) => {
    geocoder.coord2Address(lng, lat, (res, status) => {
      if (status === kakao.maps.services.Status.OK && res[0]) {
        var addr = res[0].road_address?.address_name || res[0].address.address_name;
        setLocationText(addr);
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

    geocoder.coord2RegionCode(lng, lat, (res, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setLocationCode(res[0].code);
      }
    });
  };

  useEffect(() => {
    if (position.lng && position.lat) {
      handleChangeLocation(position.lng, position.lat);
    }
  }, [position]);

  useEffect(() => {
    //사용자 위치 정보로 초기화
    console.log(user.address);
    let userLocation = user.address.text || '서울특별시 서초구 강남대로 399';

    geocoder.addressSearch(userLocation, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      let lat = 0;
      let lng = 0;
      if (status === kakao.maps.services.Status.OK && result[0]) {
        lat = Number(result[0].y);
        lng = Number(result[0].x);

        setPosition({ lat, lng });
        console.log(lng, lat);
        handleChangeLocation(lng, lat);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        console.log('검색 결과가 존재하지 않습니다.');
      } else if (status === kakao.maps.services.Status.ERROR) {
        console.log('검색 결과 중 오류가 발생했습니다.');
      }

      geocoder.coord2RegionCode(lng, lat, (res, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setLocationCode(res[0].code);
          console.log(res[0].code);
          console.log({ text: userLocation, code: res[0].code });
          dispatch(setLocation({ text: userLocation, code: res[0].code }));
        }
      });
    });
  }, []);

  return (
    <LocationLayout>
      <FormLabel component="legend">
        <LocationOn className="icon" />
        만남 위치
      </FormLabel>
      <div className="flex">
        <TextField id="" size="small" InputProps={{ readOnly: true }} value={locationSelect?.text || ''} fullWidth />
        <SearchButton onClick={handleOpen} />
      </div>
      <TextField
        id=""
        size="small"
        helperText="*상세 위치는 선택 사항 입니다."
        value={locationDetailSelect}
        onChange={(e) => dispatch(setLocationDetail(e.target.value))}
        placeholder="상세 위치"
        fullWidth
      />

      <Dialog disableEscapeKeyDown open={mapOpen} onClose={handleClose} maxWidth={false}>
        <DialogTitleBox>만남 장소를 선택해주세요</DialogTitleBox>
        <DialogContentBox dividers>
          <div className="location-text">
            <LocationOn className="icon" color="primary" />
            <span>{locationText}</span>
          </div>
          <Map // 지도를 표시할 Container
            id="map"
            center={{ lat: position.lat, lng: position.lng }}
            isPanto={true}
            style={{
              // 지도의 크기
              width: '80vw',
              maxWidth: '1024px',
              height: '60vh',
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
