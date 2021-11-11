const setCookie = (str) => {
  const now = new Date();
  const expiry = now.setTime(now.getTime() + 900000);
  return (document.cookie = `token=${str}; expires=${expiry}+ ${expiry}`);
};
export default setCookie;
