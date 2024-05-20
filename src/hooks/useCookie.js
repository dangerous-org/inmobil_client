/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";

const useCookies = (payload = {}) => {
  const createCookie = () => {
    const cookie = Cookies.set("userData", payload);
    return cookie;
  };

  const deleteCookie = () => {
    const cookie = Cookies.remove("useData");
  };

  return { createCookie, deleteCookie };
};

export default useCookies;
