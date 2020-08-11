export const showNotification = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};
