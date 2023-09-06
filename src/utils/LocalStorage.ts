import AsyncStorage from "@react-native-async-storage/async-storage";

export type StorageKey = "auth_token" | "refresh_token";

class LocalStorage {
  public static setBoolean = async (key: StorageKey, value: boolean) => {
    return await LocalStorage.set(key, value ? "true" : "false");
  };

  public static getBoolean = async (key: StorageKey) => {
    try {
      const stringValue = await LocalStorage.get(key);

      return stringValue === "true";
    } catch (err) {
      throw new Error(`Error while getting value by "${key}"`);
    }
  };

  public static get = async (key: StorageKey) => {
    return await AsyncStorage.getItem(key);
  };

  public static set = async (key: StorageKey, value: string) => {
    return await AsyncStorage.setItem(key, value);
  };

  public static remove = async (key: StorageKey) => {
    return await AsyncStorage.removeItem(key);
  };

  public static multiGet = async (keys: StorageKey[]) => {
    return await AsyncStorage.multiGet(keys);
  };

  public static clearStorage = async () => {
    return await AsyncStorage.clear();
  };
}

export default LocalStorage;
