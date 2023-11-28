// 휴대폰 본인인증 로직인데
// 소스 수정해서 그런가 뭔가 문제가 있는건지 잘 안됨..


import crypto from "crypto";
const now = new Date().toISOString();
// 16진수 64자의 랜덤 값 생성
const genRanHex = (size : any) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
const salt = genRanHex(64);
const message = now + salt;
const apiKey = "NCSYBWBDQ20BJAOV";
const apiSecret = "G0NTKLMG2NMMKRTPYQ8JJIZWVQU7EQW6";
const signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

// 생성한 시그니처를 사용하여 API 호출
const uri = `https://api.coolsms.co.kr/messages/v4/list?limit=1`;
fetch(uri, {
    method: "GET",
    headers: {
    Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${now}, salt=${salt} signature=${signature}`
    }
})
.then((res: any) => {
    console.log(res.data);
})
.catch((error: any) => {
    console.log(error.response.data);
});