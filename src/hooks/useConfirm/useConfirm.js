export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function') {
    return;
  }
  if (typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (e) {
        console.log(e);
        return;
      }
    }
  };
  return confirmAction;
};
