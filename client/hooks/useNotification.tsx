import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const useNotification = () => {
  const notify = (message: string) => {
    toast(message);
  };

  return { ToastContainer, notify };
};

export default useNotification;
