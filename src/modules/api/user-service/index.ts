import {supabase} from '../supabase';

export const getUser = async (userId: string) => {
  return supabase
    .from('profile')
    .select('id, username, nickname, email, phone, picture, birth')
    .eq('id', userId);
};
