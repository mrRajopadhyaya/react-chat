export interface Message {
  body: string;
  room: string;
  seen: boolean;
  user: any;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
}
