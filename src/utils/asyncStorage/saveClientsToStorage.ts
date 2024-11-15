import AsyncStorage from "@react-native-async-storage/async-storage";
import { Client } from "../../@types/client";
import { CLIENTS_KEY } from "../../api/user/asyncUser";

export const saveClientsToStorage = async (clients: Client[]) => {
    const jsonValue = JSON.stringify(clients);
    await AsyncStorage.setItem(CLIENTS_KEY, jsonValue);
  };