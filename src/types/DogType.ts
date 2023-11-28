import { UserType, initUserType } from "./UserType";

export interface DogType {
  _id: string;
  user: UserType;
  dogName: string;
  dogImg: string;
  birth: Date | string;
  dogType: string;
  gender: string;
  personality: string;
  note: string;
}

export const initDogType = {
  _id: "",
  user: initUserType,
  dogName: "",
  dogImg: "",
  birth: "",
  dogType: "",
  gender: "",
  personality: "",
  note: "",
};
