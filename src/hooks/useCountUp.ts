import { useEffect, useState } from 'react';

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const useCountUp = (num: number, duration: number) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = 0;
    const counter = setInterval(() => {
      const progressRate = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(num * progressRate));

      // 진행 완료시 interval 해제
      if (progressRate === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, []);
  return count;
};
