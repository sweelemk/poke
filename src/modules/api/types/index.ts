export type User = {
  id: string;
  username: string;
  nickname: string;
  email: string;
  picture: string;
  birth: string;
  phone: string;
};

export type CreateUserDto = {
  username: string;
  nickname?: string;
  email: string;
  password: string;
};

export type LoginUserDto = {
  email: string;
  password: string;
};
