import { DogType } from "./DogType";
import { UserType } from "./UserType";

export interface MatchingPostType {
  _id: string;
  user: UserType;
  user_dog: DogType;
  price: Number;
  location: string;
  location_detail: string;
  walking_date: Date | string;
  walking_duration: Number;
  deletedAt: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}
