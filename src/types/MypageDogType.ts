import { MypageUserType, initMypageUserType } from "./MypageUserType";

export interface MypageDogType {
  _id: string;
  user: MypageUserType;
  dogName: string;
  dogImg: string;
  birth: Date | string;
  dogType: string;
  gender: string;
  personality: string;
  note: string;
}

export const initMypageDogType = {
  _id: "",
  user: initMypageUserType,
  dogName: "",
  dogImg: "",
  birth: "",
  dogType: "",
  gender: "",
  personality: "",
  note: "",
};
