export interface IPost {
  id?: number;
  title?: string;
  body?: any;
  author?: string;
}

export const defaultValue: Readonly<IPost> = {};
