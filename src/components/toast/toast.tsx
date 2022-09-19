import Toast from 'react-native-toast-message';

type ToastProps = {
  type: 'success' | 'error' | 'info';
  text1?: string;
  text2?: string;
};

export const toastNotification = ({type, text1, text2}: ToastProps) => {
  Toast.show({
    type,
    text1,
    text2,
    topOffset: 60,
  });
};
