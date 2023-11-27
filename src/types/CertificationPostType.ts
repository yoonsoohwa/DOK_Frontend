import { MatchingPostType, initMatchingPostType } from "./MatchingPostType";
import { UserType, initUserType } from "./UserType";

export interface CertificationPostType {
  _id: string;
  user: UserType;
  matchingPost: MatchingPostType;
  certificationImg: string[];
  sublocation: string;
  postText: string;
  review: {
    rating: number | null;
    reviewText: string;
  };
  deletedAt: null | Date | string;
  createdAt: string;
  updatedAt: string;
}

export const initCertificationPostType = {
  _id: "",
  user: initUserType,
  matchingPost: initMatchingPostType,
  certificationImg: [],
  sublocation: "",
  postText: "",
  review: {
    rating: null,
    reviewText: "",
  },
  deletedAt: null,
  createdAt: "",
  updatedAt: "",
};
