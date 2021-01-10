export const useNotification = (title, option) => {
  if (!('Notification' in window)) {
    return;
  }
};
