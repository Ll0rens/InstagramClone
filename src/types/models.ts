export interface IPost {
    id: string;
    createdAt: string | number; //It can be a string or a number value (For timestamps)
    image?: string; //The ? that this type is optional
    images?: string[];
    video?: string;
    description: string;
    user: IUser;
    nofComments: number;
    nofLikes: number;
    comments: IComment[];
   };
   
   export interface IUser {
    id: string;
    username: string;
    image?: string;
    name: string;
    bio?: string;
    posts?: IPost[];
    website?: string;
   };
   
   export interface IComment {
    id: string;
    comment: string;
    user: IUser;
   };