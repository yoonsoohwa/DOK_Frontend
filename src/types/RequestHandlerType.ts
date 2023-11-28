import { UserType } from "./UserType";

export interface RequestHandlerType {
    user: UserType,
    matchingPostId: string
}