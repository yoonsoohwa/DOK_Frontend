import { MatchingPostType } from "./MatchingPostType";
import { UserType } from "./UserType";

export interface CertificationPostType {
  _id: string;
  user: UserType;
  matchingPost: MatchingPostType;
  certificationImg: string[];
  sublocation: string;
  review: string | null;
  deletedAt: null | Date | string;
  createdAt: string;
  updatedAt: string;
}
