import { useMutation } from "@tanstack/react-query";
import { removeClientToStorage } from "../../api/user/asyncUser";

export default function useRemoveClientToStorage() {
  return useMutation({
    mutationFn: (id: number) => removeClientToStorage(id),
  });
}
