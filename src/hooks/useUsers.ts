import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const fetchUsers = () =>
  axios
    .get(`http://test-frontend.microbiomestudio.fr:4557/api/v1/users/`)
    .then(({ data }: any) => data);

export const addUser = (user: any) =>
  axios
    .post(`http://test-frontend.microbiomestudio.fr:4557/api/v1/users`, user)
    .then(({ data }: any) => {
      toast.success("Enregistrer avec succès !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return data;
    })
    .catch(function (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });

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
