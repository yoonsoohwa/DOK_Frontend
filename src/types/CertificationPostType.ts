import { MatchingPostType } from "./MatchingPostType";
import { UserType } from "./UserType";

export interface CertificationPostType {
  _id: string;
  user: UserType | string;
  matchingPost: MatchingPostType | string;
  certificationImg: string[];
  sublocation: string;
  review: string | null;
  deletedAt: null | Date | string;
  createdAt: string;
  updatedAt: string;
}
