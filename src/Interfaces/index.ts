interface User {
    [name: string]:  number | string | boolean | object | undefined,
    email: string;
    password: string;
    virified: boolean;
}

interface Articles {
    data: Array<Article>;
  }
interface Article {
    [title: string]:  number | string | boolean | object | null | undefined,
    id?:number;
    Text: string;
    Img: string;
    UserId: number;
    NumberLike:number;
    Comment: number;
    NumberSaved:number,
    tags: string[]
    date:Date,
    TimeRead:number
}

interface Alert {
    color: string;
    message: string;
}

interface Comment {
    [Content: string]:  number | string | boolean | object | undefined,
    id?:number;
    NumberLike:number;
    date:Date;
    IsAnonymous:boolean;
}

export type {User,Articles,Article,Alert,Comment}