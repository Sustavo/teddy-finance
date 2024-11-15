import { useQuery } from "@tanstack/react-query";
import { ClientsResponse } from "../../api/user/user";
import { getClientsFromStorage } from "../../api/user/asyncUser";
import { Client } from "../../@types/client";
export function useGetClientsFromStorage() {
    return useQuery<Client[]>({
      queryKey: ["getUsersStorage"],
      queryFn: () => getClientsFromStorage(),
    });
  }
