
import GUI from 'lil-gui'

export default class Cookies
{
  static setCookie(cname, cvalue, expireDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))) {
    document.cookie = cname + "=" + cvalue + ";" + expireDate.toUTCString() + ";"
  }

  static getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  static removeAllCookies()
  {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      let cname = c.split('=')[0]
      this.removeCookie(cname)
    }
  }

  static removeCookie(cname)
  {
    document.cookie = cname +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}