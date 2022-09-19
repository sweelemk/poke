import React from 'react';
import {
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from 'react-native-toast-message';

const style = {
  text1: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
  },
  text2: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
  },
};

export const getToastConfig = () => {
  return {
    error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={style.text1}
        text2Style={style.text2}
      />
    ),
    info: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <InfoToast {...props} text1Style={style.text1} text2Style={style.text2} />
    ),
    success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <SuccessToast
        {...props}
        text1Style={style.text1}
        text2Style={style.text2}
      />
    ),
  };
};
