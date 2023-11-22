export interface userType {
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

export interface dogType {
  _id: string;
  user: userType;
  dogName: string;
  dogImg: string;
  birth: Date | string;
  dogType: string;
  gender: string;
  personality: string;
  note: string;
}

export interface matchingPostType {
  _id: string;
  user: userType;
  user_dog: dogType;
  price: Number;
  location: string;
  location_detail: string;
  walking_date: Date | string;
  walking_duration: Number;
  deletedAt: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface certificationPostType {
  _id: string;
  user: userType;
  matchingPost: matchingPostType;
  certificationImg: string[];
  sublocation: string;
  review: string | null;
  deletedAt: null | Date | string;
  createdAt: string;
  updatedAt: string;
}
