import { useQuery } from "@tanstack/react-query";
import { ClientsResponse, FetchAllUsers } from "../../api/user/user";
export function useFetchAllUsers(page: number, limit: number) {
  return useQuery<ClientsResponse>({
    queryKey: ["getUsers", page, limit],
    queryFn: () => FetchAllUsers(page, limit),
    refetchInterval: 2000,
  });
}
