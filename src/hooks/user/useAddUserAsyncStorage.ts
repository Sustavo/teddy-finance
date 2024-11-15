import { useMutation } from "@tanstack/react-query";
import { AddUserAsyncStorage } from "../../api/user/user";

export default function useAddUserAsyncStorage() {
  return useMutation({
    mutationFn: (id: number) => AddUserAsyncStorage(id),
  });
}
