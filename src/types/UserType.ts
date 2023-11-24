export interface UserType {
  _id: string;
  userId: string;
  password: string;
  name: string;
  nickname: string;
  address: string;
  phoneNumber: string;
  introduce: string;
  isCertificated: boolean;
  deletedAt: null | Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
