import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Storage from '../modules/common/storage';
import type {User} from '../modules/api/types';
import {signOut} from '../modules/api/auth-service';
import {getUser} from '../modules/api/user-service';

type AuthContextValues = {
  login?: any;
  signup?: any;
  signout?: any;
  user: User | null;
  setUser?: any;
};

const AuthContext = createContext<AuthContextValues>({
  user: null,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const signout = useCallback(async () => {
    try {
      const {error} = await signOut();
      if (!error) {
        setUser(null);
      }
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const hideSplashScreen = () => {
    SplashScreen.hide();
  };

  const getToken = useCallback(async () => {
    const userId = await Storage.getUserId();
    if (userId) {
      try {
        const userReaponse = await getUser(userId);
        const [data] = userReaponse.data as User[];

        if (data) {
          setUser(data);
        }

        hideSplashScreen();
      } catch (error) {
        console.warn(error);
      }
    } else {
      hideSplashScreen();
    }
  }, []);

  useEffect(() => {
    getToken();
  }, [getToken]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      signout,
    }),
    [user, setUser, signout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
