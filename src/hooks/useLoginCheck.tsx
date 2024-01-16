import { useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { initUserType } from '../types';
import { AppDispatch, setDog, setIsLoading, setUser } from 'store/index';

export const useLoginCheck = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { user, dog } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/myInfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.status === 200) {
          const data = await response.json();
          dispatch(setUser(data.user));
          dispatch(setDog(data.userDogs));
          
        } else {
          // console.log('로그인 오류');
          dispatch(setUser(initUserType));
        }
        dispatch(setIsLoading(false));
      } catch (error) {
        // console.error('로그인 조회 오류:', error);
      }
    };

    fetchData();
  }, []);
};
