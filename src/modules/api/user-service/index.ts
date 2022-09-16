import type {PostgrestResponse} from '@supabase/supabase-js';
import {supabase} from '../supabase';
import type {User} from '../types';

export const getUser = async (
  userId: string,
): Promise<PostgrestResponse<User>> => {
  return supabase
    .from('profile')
    .select('id, username, nickname, email, phone, picture, birth')
    .eq('id', userId);
};
