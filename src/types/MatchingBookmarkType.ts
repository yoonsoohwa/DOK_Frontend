export interface MatchingBookmarkType {
  _id: string,
  userDog: {
    dogName : string,
  };  
  walkingDate: string;
  walkingDuration: number;  
  userCommentNumber : number;
}

export const initMatchingBookmarkType: MatchingBookmarkType[] = [{
    _id: '',
    userDog: {
      dogName : '',
    },
    walkingDate: '',
    walkingDuration: 0,
    userCommentNumber : 0,
}];