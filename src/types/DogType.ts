import { UserType } from "./UserType";

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
