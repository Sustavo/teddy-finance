import AsyncStorage from '@react-native-async-storage/async-storage';
import { Client } from '../../@types/client';
import { api } from '..';

const CLIENTS_KEY = '@clients';

export const saveClientsToStorage = async (clients: Client[]): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(clients);
        await AsyncStorage.setItem(CLIENTS_KEY, jsonValue);
    } catch (e) {
        console.error('Erro ao salvar clientes no AsyncStorage:', e);
    }
};

export const getClientsFromStorage = async (): Promise<Client[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(CLIENTS_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Erro ao buscar clientes do AsyncStorage:', e);
        return [];
    }
};

export const addClientToStorage = async (newClient: Client): Promise<void> => {
    try {
        const existingClients = await getClientsFromStorage();
        const updatedClients = [...existingClients, newClient];
        await saveClientsToStorage(updatedClients);
    } catch (e) {
        console.error('Erro ao adicionar cliente no AsyncStorage:', e);
    }
};
