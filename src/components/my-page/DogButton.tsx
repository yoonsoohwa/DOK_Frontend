import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { DogDetail } from './DogDetail';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { DogCard } from './DogCard';
import { Loading } from 'common/state/Loading';
import { useLocation } from 'react-router-dom';

export const DogButton = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const { pathname } = useLocation();
  const { user, dog } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setIsLoding(false);
  }, [dog]);

  return (
    <>
      {isLoding ? (
        <Loading />
      ) : (pathname === "/userinfo/:id" ? (
        <>
        {/* path가 userinfo로 들어왔을 경우에 dogCard 추가하는 버튼 안보이게 */}
          {dog.map((item) => (
            <DogCard
              dogImg={item.dogImg}
              key={item._id}
              dogName={item.dogName}
              birth={item.birth}
              gender={item.gender}
              dogType={item.dogType}
              personality={item.personality}
              note={item.note}
            />
          ))}
        </> ) : (
          <>
          {dog.map((item) => (
            <DogCard
              dogImg={item.dogImg}
              key={item._id}
              dogName={item.dogName}
              birth={item.birth}
              gender={item.gender}
              dogType={item.dogType}
              personality={item.personality}
              note={item.note}
            />
          ))}
          {clicked ? <DogDetail /> : <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>}
        </>
        )
      )}
    </>
  );
};

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: black dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  font-size: 200px;
  color: gray;
  background-color: #ffffff;

  margin: 3% 1%;
`;
