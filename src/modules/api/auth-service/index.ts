import {supabase} from '../supabase';
import type {CreateUserDto, LoginUserDto} from '../types';

export const signUp = async (dto: CreateUserDto) => {
  return await supabase.auth.signUp(
    {
      email: dto.email,
      password: dto.password,
    },
    {
      data: {
        username: dto.username,
        nickname: dto.nickname,
        email: dto.email,
        picture: null,
        birth: null,
        phone: null,
      },
    },
  );
};

export const signIn = async (dto: LoginUserDto) => {
  return await supabase.auth.signIn({
    email: dto.email,
    password: dto.password,
  });
};

export const signOut = async () => {
  return supabase.auth.signOut();
};
