import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export function LocationSelect() {
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [mapOpen, setMapOpen] = useState(true);

  const handleClose = () => {
    setMapOpen(false);
  };

  var geocoder = new kakao.maps.services.Geocoder();
  const ps = new kakao.maps.services.Places();

  useEffect(() => {
    geocoder.coord2Address(position.lng, position.lat, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0]);
        var detailAddr = !!result[0] && (result[0].road_address?.address_name || result[0].address.address_name);

        setAddress(detailAddr);

        // 마커를 클릭한 위치에 표시합니다
        // marker.setPosition(mouseEvent.latLng);
        // marker.setMap(map);

        // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
        // infowindow.setContent(content);
        // infowindow.open(map, marker);
      }
    });
  }, [position]);

  useEffect(() => {
    //사용자 위치 정보로 초기화
    geocoder.addressSearch("서울특별시 서초구 강남대로 399", function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        setPosition({ lat: Number(result[0].y), lng: Number(result[0].x) });
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
    <>
      <TextField id="outlined-multiline-flexible" size="small" helperText="*카카오맵에서 마커를 옮겨 주소를 선택해주세요." disabled value={address} fullWidth />
      <TextField id="outlined-multiline-flexible" size="small" placeholder="상세 주소" fullWidth />

      <Dialog disableEscapeKeyDown open={mapOpen} onClose={handleClose} maxWidth={false}>
        <DialogTitle>검색할 지역을 선택해주세요</DialogTitle>
        <DialogContent>
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
            {position && (
              <MapMarker
                position={position}
                draggable={true}
                onDragEnd={(e) =>
                  setPosition({
                    lat: e.getPosition().getLat(),
                    lng: e.getPosition().getLng(),
                  })
                }
              />
            )}
          </Map>
          {position && (
            <p>
              {"클릭한 위치의 위도는 " + position.lat + " 이고, 경도는 " + position.lng + " 입니다"}
              <br /> {address}
            </p>
          )}
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
