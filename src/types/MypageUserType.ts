export interface MypageUserType {
  _id: string;
  userId: string;
  password: string;
  name: string;
  nickname: string;
  address: { text: string; code: string };
  phoneNumber: string;
  introduce: string;
  userImg: string;
  isCertificated: boolean;
  deletedAt: null | Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export const initMypageUserType: MypageUserType = {
  _id: '',
  userId: '',
  password: '',
  name: '',
  nickname: '',
  address: { text: '', code: '' },
  phoneNumber: '',
  userImg: '',
  introduce: '',
  isCertificated: false,
  deletedAt: null,
  createdAt: '',
  updatedAt: '',
};
