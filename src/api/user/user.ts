import { api } from "..";
import { Client, CreateClient, UpdateClient } from "../../@types/client";
import { addClientToStorage } from "./asyncUser";

export interface ClientsResponse {
  clients: Client[];
  currentPage: number;
  totalPages: number;
}

export const FetchAllUsers = async (page: number, limit: number) => {
  try {
    const { data } = await api.get(`/users?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const FindUserById = async (id: number) => {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const CreateUser = async (data: CreateClient) => {
  const response = await api.post("/users", {
    name: data.name,
    salary: data.salary,
    companyValuation: data.companyValuation,
  });

  return response.data;
};

export const UpdateUser = async (data: UpdateClient) => {
  const response = await api.patch(`/users/${data.id}`, {
    name: data.name,
    salary: data.salary,
    companyValuation: data.companyValuation,
  });

  return response.data;
};

export const FetchDeleteUser = async (id: number) => {
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const CountUsers = async() => {
  try {
    const { data }: {data: ClientsResponse} = await api.get(`/users?page=1&limit=100000`);
    return data.clients.length;
  } catch (error) {
    console.error(error);
  }
}

export const AddUserAsyncStorage = async(id: number) => {
  try {
    const { data }: {data: Client} = await api.get(`/users/${id}`);
    addClientToStorage(data)
    await api.delete(`users/${id}`)
  } catch (error) {
    console.error(error);
  }
}

