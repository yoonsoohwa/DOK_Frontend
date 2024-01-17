import { UserType, initUserType } from "./UserType";

export interface MypageUserType {
  _id: string;
  userNote: string;
  user: UserType;
  dogName: string;
  dogImg: string;
  birth: Date | string;
  dogType: string;
  gender: string;
  personality: string;
  note: string;
}

export const initMypageUserType = {
  _id: "",
  userNote: "",
  user: initUserType,
  dogName: "",
  dogImg: "",
  birth: "",
  dogType: "",
  gender: "",
  personality: "",
  note: "",
};
