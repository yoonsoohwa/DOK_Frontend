import { useEffect, useState } from 'react';
import { DogDetail } from './DogDetail';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { DogCard } from './DogCard';
import { Loading } from 'common/state/Loading';
import { useLocation } from 'react-router-dom';
import { AddButton } from './DogButton.style';

export const DogButton = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const { pathname } = useLocation();
  const { dog } = useSelector((state: RootState) => state.user);
  const { mypageDog } = useSelector((state: RootState) => state.mypageUser);

  useEffect(() => {
    setIsLoding(false);
  }, [dog]);

  return (
    <>
      {isLoding ? (
        <Loading />
      ) : (pathname === "/userinfo" ? (
        <>
        {/* path가 userinfo로 들어왔을 경우에 dogCard 추가하는 버튼 안보이게 */}
          {mypageDog.map((item) => (
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