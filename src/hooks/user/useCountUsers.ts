import { useQuery } from "@tanstack/react-query";
import { CountUsers } from "../../api/user/user";
export function useCountUsers() {
    return useQuery({
        queryKey: ['allUsers'],
        queryFn: () => CountUsers(),
        refetchInterval: 2000
    })
}