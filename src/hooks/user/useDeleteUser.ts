import { useMutation } from "@tanstack/react-query";
import { FetchDeleteUser } from "../../api/user/user";

export default function useDeleteUser() {
  return useMutation({
    mutationFn: (id: number) => FetchDeleteUser(id),
  });
}
