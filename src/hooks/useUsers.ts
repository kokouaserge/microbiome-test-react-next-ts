import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const fetchUsers = () =>
  axios
    .get(`http://localhost:8080/api/v1/users/`)
    .then(({ data }: any) => data);

export const addUser = (user: any) =>
  axios
    .post(`http://localhost:8080/api/v1/users`, user)
    .then(({ data }: any) => data);

export const useUsers = () => {
  return useQuery(["getUsers"], () => fetchUsers());
};

export const useAddUser = (user: any) => {
  const queryClient = useQueryClient();
  return useMutation(["addUser"], async (user) => addUser(user), {
    async onSuccess(data) {
      await queryClient.cancelQueries("getUsers");
      return queryClient.invalidateQueries(["getUsers"]);
    },
  });
};
