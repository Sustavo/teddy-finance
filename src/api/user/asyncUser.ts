import AsyncStorage from "@react-native-async-storage/async-storage";
import { Client } from "../../@types/client";
import { CreateUser } from "./user";
import { saveClientsToStorage } from "../../utils/asyncStorage/saveClientsToStorage";

export const CLIENTS_KEY = "@clients";

export const getClientsFromStorage = async (): Promise<Client[]> => {
  const jsonValue = await AsyncStorage.getItem(CLIENTS_KEY);
  return jsonValue != null ? JSON.parse(jsonValue) : [];
};

export const addClientToStorage = async (newClient: Client): Promise<void> => {
  const existingClients = await getClientsFromStorage();
  const updatedClients = [...existingClients, newClient];
  await saveClientsToStorage(updatedClients);
};

export const removeClientToStorage = async(id: number) => {
    const existingClients = await getClientsFromStorage();
    const updatedClients = existingClients.filter(existingClient => existingClient.id !== id)    
    const client = existingClients.find(existingClients => existingClients.id === id)
    if(client !== undefined) {
      await CreateUser(client)
      await saveClientsToStorage(updatedClients)
    }
}
