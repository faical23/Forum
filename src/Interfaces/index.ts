interface User {
    [name: string]:  number | string | boolean | object | undefined,
    email: string;
    password: string;
    virified: boolean;
}


interface Article {
    [title: string]:  number | string | boolean | object | null,
    id:number;
    Text: string;
    Img: string;
    UserId: number;
    NumberLike:number;
    Comment: number;
    NumberSaved:number
}

export type {User,Article}