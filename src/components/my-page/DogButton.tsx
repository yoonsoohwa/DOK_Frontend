import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { DogDetail } from './DogDetail';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { DogCard } from './DogCard';
import { Loading } from 'common/state/Loading';

export const DogButton = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const { user, dog } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // dog 상태가 변경될 때마다 컴포넌트를 리렌더링
    // renderDogCards();
    console.log(`Dog버튼`);
    console.log(dog);
    console.log(`Dog버튼`);
    setIsLoding(false);
  }, [dog]);

  return (
    <>
      {isLoding ? (
        <Loading />
      ) : (
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
