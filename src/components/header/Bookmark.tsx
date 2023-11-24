import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export const Bookmark = () => {
    const bookmarkOn = "/svg/header_bookmark_on.svg";
    const bookmarkOff = "/svg/header_bookmark_off.svg";    

    const [clicked , setClicked] = useState(true);    
    const [bookmarkImg, setBookmarkImg] = useState(bookmarkOff);
    const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);
  
    const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    const handlePopOverClick = (event : React.MouseEvent<HTMLImageElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);        
      };

    const handleBookmarkClick = () => {
        if (clicked) {
        setBookmarkImg(bookmarkOn);
      } else {
        setBookmarkImg(bookmarkOff);
      }
      
    };

    return <>
        <img src={bookmarkImg} onClick={(event) => {
        handleBookmarkClick();        
        setClicked(!clicked);
        handlePopOverClick(event);        
        }} />
        <Popover
        id={"simple-popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 10 , padding: "0",}}>
            <PopoverTitle>
                <div>나의 매칭</div>
                <div>요청자 수</div>
                {/* <div>요청 바로가기</div> */}
            </PopoverTitle>
            <PopoverContent>
                <div>
                    <div>반려견이름열글자까지</div>
                    <div>2023-10-23</div>
                    <div>18:00~20:00</div>
                </div>
                <div>5</div>
            </PopoverContent>
            <PopoverContent>
                <div>
                    <div>다람이</div>
                    <div>2023-10-23</div>
                    <div>18:00~20:00</div>
                </div>
                <div>3</div>
            </PopoverContent>
            <PopoverContent>
                <div>
                    <div>뽀삐</div>
                    <div>2023-10-23</div>
                    <div>18:00~20:00</div>
                </div>
                <div>14</div>
            </PopoverContent>
        </Typography>
      </Popover>
    </>
}

const PopoverTitle = styled.div`
    display: flex;
    
    justify-content: space-between;
    width: 500px;
    height: 100%;
    
    div {
        margin: 0 5%;
    }

    border-bottom: 1px solid gray;
`

const PopoverContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    > div:nth-child(1){
        display: flex;
        flex: 1;
        /* justify-content: space-between; */
        /* background-color: red; */
        /* border: 1px solid black; */
        :nth-child(1), :nth-child(2), :nth-child(3){
            justify-self: center;
            align-self: center;
            padding: 0 2% 0 2%;
            /* border-right: 2px solid gray; */
            /* margin: auto; */
        }
        
    }

    > div:nth-child(2){
        margin-right: 5%;
    }
`