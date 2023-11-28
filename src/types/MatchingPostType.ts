import { DogType } from "./DogType";
import { UserType } from "./UserType";

export interface MatchingPostType {
  _id: string;
  user: UserType;
  userDog: DogType;
  price: Number;
  location: string;
  locationDetail: string;
  walkingDate: Date | string;
  walkingDuration: Number;
  deletedAt: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  matchingStatus: string;
}
