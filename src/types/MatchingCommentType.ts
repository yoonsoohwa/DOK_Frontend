import { UserType, initUserType } from './UserType';

export interface MatchingCommentType {
  _id: string;
  matchingPostId: string;
  user: UserType;
  comment: string;
  parentCommentId: string | null;
  deletedAt: null | Date | string;
  createdAt: string;
  updatedAt: string;
}

export const initMatchingCommentType = {
  _id: '',
  matchingPostId: '',
  user: initUserType,
  comment: '',
  parentCommentId: null,
  deletedAt: null,
  createdAt: '',
  updatedAt: '',
};
