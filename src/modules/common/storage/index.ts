import AsyncStorage from '@react-native-async-storage/async-storage';
import * as constants from '../constants';

const set = async (key: string, value: string) =>
  await AsyncStorage.setItem(key, value);
const get = async (key: string) => await AsyncStorage.getItem(key);
const remove = async (key: string) => await AsyncStorage.removeItem(key);
const clear = async () => await AsyncStorage.clear();

const parseAccessToken = (obj: any) => {
  const parse = JSON.parse(obj);
  return parse.currentSession.access_token;
};

const parseUserId = (obj: any) => {
  const parse = JSON.parse(obj);
  return parse.currentSession.user.id;
}

const getAccessToken = async () => {
  const session = await get(constants.SESSION_TOKENS);
  return session != null ? parseAccessToken(session) : null;
};

const getUserId = async () => {
  const session = await get(constants.SESSION_TOKENS);
  return session != null ? parseUserId(session) : null;

}

export default {
  getAccessToken,
  getUserId,
};
