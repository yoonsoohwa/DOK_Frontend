import { DogType, initDogType } from "./DogType";
import { UserType, initUserType } from "./UserType";

export interface MatchingPostType {
  _id: string;
  user: UserType;
  userDog: DogType;
  price: Number;
  location: {
    text: string,
    code: string
  };
  locationDetail: string | null;
  walkingDate: Date | string;
  walkingDuration: Number;
  requestText: string | null;
  deletedAt: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  matchingStatus: string;
}

export const initMatchingPostType = {
  _id: "",
  user: initUserType,
  userDog: initDogType,
  price: 0,
  location: "",
  locationDetail: "",
  walkingDate: "",
  walkingDuration: 0,
  deletedAt: null,
  createdAt: "",
  updatedAt: "",
  matchingStatus: "",
};
