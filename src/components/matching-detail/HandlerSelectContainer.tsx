import { styled } from 'styled-components';
import { Children, useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { HandlerListItem } from './HandlerLIstItem';
import { ButtonMain } from 'common/button/ButtonMain';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setRequestHandlers } from 'store/index';
import { useParams } from 'react-router-dom';

export function HandlerSelectContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { requestHandlers, selectedHandler } = useSelector((state: RootState) => state.matching);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const onSubmitHandler = () => {
    if (!selectedHandler) {
      console.log('please select handler!');
      return;
    }

    const sendSelectedHandler = async () => {
      const { matchingPostId, user } = selectedHandler;
      try {
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/handler/${matchingPostId}/${user._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        console.log(data);
        console.log(matchingPostId, user._id);
      } catch (err) {
        // console.log(err);
      }
    };

    sendSelectedHandler();
  };

  useEffect(() => {
    const RequestHandlerList = async () => {
      try {
        // const res = await fetch('/src/api/mock/matching-post-requests.json');
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/handler/${id}`);
        const data = await res.json();
        dispatch(setRequestHandlers(data));
      } catch (error) {
        console.log(error);
      }
    };
    RequestHandlerList();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [selectedHandler]);

  return (
    <HandlerSelectLayout>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SelectorLayout>
          {selectedHandler ? (
            <div onClick={handleClick}>
              <HandlerListItem handler={selectedHandler} />
            </div>
          ) : (
            <SelectButtonContainer onClick={handleClick}>핸들러를 선택해주세요.</SelectButtonContainer>
          )}
          {open ? (
            <HandlerListContainer className={`custom-scrollbar ${requestHandlers.length > 3 ? "scroll" : null}`}>
              {Children.toArray(
                requestHandlers.map((handler) => {
                  return <HandlerListItem handler={handler} />;
                }),
              )}
            </HandlerListContainer>
          ) : null}
        </SelectorLayout>
      </ClickAwayListener>
      <ButtonContainer>
        <ButtonMain text="매칭하기" onClick={onSubmitHandler} />
      </ButtonContainer>
    </HandlerSelectLayout>
  );
}

const HandlerSelectLayout = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  flex-shrink: 0;
`;

const SelectorLayout = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  > div {
    border: solid 1.5px ${({ theme }) => theme.sub3};
  }
`;

const SelectButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #fff;
  border: 1px dashed ${({ theme }) => theme.sub2};
`;

const HandlerListContainer = styled.div`
  max-height: 170px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  border: 1.5px solid ${({ theme }) => theme.sub3};

  &.scroll {
    overflow: scroll;
  overflow-x: hidden;
  }
  
`;
