const setCookie = () => {
  const now = new Date();
  const expiry = now.setTime(now.getTime() + 900000);
  return (document.cookie = `viewed=5; expires=${expiry}+ ${expiry}`);
};
const setCookie2 = () => {
  const now = new Date();
  const expiry = now.setTime(now.getTime() + 900000);
  return (document.cookie = `uid=354774631237; expires=${expiry}+ ${expiry}`);
};
const setCookie3 = () => {
  const now = new Date();
  const expiry = now.setTime(now.getTime() + 900000);
  return (document.cookie = `ssid=Bx55OWbHJ0Vt_IGIF; expires=${expiry}+ ${expiry}`);
};

setCookie();
setCookie2();
setCookie3();

const cookieHandler = {
  getAll() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    return Object.fromEntries(myStr);
  },
  toSessionStorage() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    myStr.forEach((item) => sessionStorage.setItem(item[0], item[1]));
  },
  flush() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    myStr.forEach(
      (item) =>
        (document.cookie = `${item[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`)
    );
  },
};
export { cookieHandler };
