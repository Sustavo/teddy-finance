import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "../../api/user/user";
import { CreateClient } from "../../@types/client";

export default function useCreateUser() {
  return useMutation({
    mutationFn: (data: CreateClient) => CreateUser(data),
  });
}
