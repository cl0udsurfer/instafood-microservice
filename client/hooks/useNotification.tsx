import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const useNotification = () => {
  const notify = (message: string) => {
    toast(message);
  };

  const Notification = () => {
    return (
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
  };

  return { Notification, notify };
};

export default useNotification;
