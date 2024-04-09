import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@dysrup:last_sync";

export async function setLastSync() {
  const timestamp = new Date().getTime();
  await AsyncStorage.setItem(STORAGE_KEY, timestamp.toString());
  return timestamp;
}

export async function getLastSync() {
  const response = await AsyncStorage.getItem(STORAGE_KEY);
  return Number(response);
}