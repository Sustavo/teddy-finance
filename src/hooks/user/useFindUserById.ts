import { useQuery } from "@tanstack/react-query";
import { FindUserById } from "../../api/user/user";
import { Client } from "../../@types/client";

export function useFindUserById(id: number) {
  return useQuery<Client>({
    queryKey: [`getUser/${id}`],
    queryFn: () => FindUserById(id),
  });
}
