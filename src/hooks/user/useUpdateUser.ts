import { useMutation } from "@tanstack/react-query";
import { UpdateUser } from "../../api/user/user";
import { UpdateClient } from "../../@types/client";

export default function useUpdateUser() {
  return useMutation({
    mutationFn: (data: UpdateClient) => UpdateUser(data),
  });
}
