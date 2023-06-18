import { LOCAL_STORAGE_KEYS } from 'config/setting';
import { LoginTypeEnum } from 'types/common';

const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
};
const clearLocalStorageAll = ():void => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};

const getLoginType = () =>
  getLocalStorage(LOCAL_STORAGE_KEYS.LOGIN_TYPE) as LoginTypeEnum | null;


export {
  getLoginType,
  getLocalStorage,
  clearLocalStorageAll
};
