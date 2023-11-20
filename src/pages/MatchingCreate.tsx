import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PostCreateFormLayout } from "../components/common/PostCreateForm";
import { ChatOutlined, LocationOn, MonetizationOn, MonetizationOnOutlined, Money, Pets } from "@mui/icons-material";
import { FormControl, FormControlLabel, FormLabel, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import { CalendarIcon, ClockIcon, DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import dog from "/temp/코기.png";

export function MatchingCreatePage() {
  const [age, setAge] = useState("");
  const [area, setArea] = useState("집");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [error, setError] = useState(false);
  const [values, setValues] = useState(0);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("");

  var geocoder = new kakao.maps.services.Geocoder();
  const ps = new kakao.maps.services.Places();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
    <CertifiCreate>
      <div className="body">
        <PostCreateFormLayout title="매칭 신청하기">
          <Contents>
            <Pets className="icon" />
            <div className="title">강아지</div>
            <FormControl sx={{ minWidth: 120, width: "80%" }}>
              <Select
                startAdornment={
                  <InputAdornment position="start">
                    <img src={dog} style={{ height: "2em" }} />
                  </InputAdornment>
                }
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Contents>

          <Contents>
            <CalendarIcon className="icon" />
            <div className="title">산책 날짜</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} sx={{ width: "500px" }}>
                <DesktopDateTimePicker
                  format="YYYY-MM-DD  h:m A"
                  value={date}
                  minDate={dayjs()}
                  maxDate={dayjs().add(7, "day")}
                  onChange={(newValue) => setDate(newValue)}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Contents>

          <Contents>
            <ClockIcon className="icon" />
            <div className="title">산책 시간</div>
            <FormControl>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" defaultValue="30">
                <FormControlLabel value="30" control={<Radio />} label="30분" />
                <FormControlLabel value="60" control={<Radio />} label="1시간" />
                <FormControlLabel value="90" control={<Radio />} label="1시간 30분" />
                <FormControlLabel value="120" control={<Radio />} label="2시간" />
              </RadioGroup>
            </FormControl>
          </Contents>

          <Contents>
            <MonetizationOnOutlined className="icon" />
            <div className="title">가격</div>
            <TextField
              size="small"
              error={error}
              id="outlined-error-helper-text"
              value={values}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValues(Number(event.target.value));
              }}
              defaultValue="Hello World"
              helperText={error && "Incorrect entry."}
              InputProps={{
                endAdornment: <InputAdornment position="end">원</InputAdornment>,
              }}
            />
          </Contents>

          <Contents>
            <ChatOutlined className="icon" />
            <div className="title">요구사항</div>
            <TextField id="outlined-multiline-flexible" multiline rows={4} sx={{ width: "80%" }} />
          </Contents>

          <Contents>
            <LocationOn className="icon" />
            <div className="title">만남 장소</div>
            <div className="multiline">
              <TextField id="outlined-multiline-flexible" size="small" helperText="*카카오맵에서 마커를 옮겨 주소를 선택해주세요." disabled value={address} fullWidth />
              <TextField id="outlined-multiline-flexible" size="small" placeholder="상세 주소" fullWidth />
            </div>
          </Contents>

          <Map // 지도를 표시할 Container
            id="map"
            center={{ lat: position.lat, lng: position.lng }}
            isPanto={true}
            style={{
              // 지도의 크기
              width: "100%",
              height: "400px",
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
          {position && <p>{"클릭한 위치의 위도는 " + position.lat + " 이고, 경도는 " + position.lng + " 입니다"}</p>}
        </PostCreateFormLayout>
      </div>
    </CertifiCreate>
  );
}

const CertifiCreate = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.main4};

  .body {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  .icon {
    color: #3e3e3e;
    width: 48px;
    height: 48px;
  }

  .title {
    width: 100px;
    font-size: 20px;
    margin: 8px 10px;
  }

  .multiline {
    width: 80%;

    > div {
      margin-bottom: 10px;
    }
  }

  &:nth-child(6) {
    margin-bottom: 4px;
  }
`;
