import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchDeleteUser } from "../../api/user/user";
import { api } from "../../api";

export default function useDeleteUser() {
  return useMutation({
    mutationFn: (id: number) => FetchDeleteUser(id),
  });
}