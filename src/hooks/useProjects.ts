import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const fetchProjects = () =>
  axios
    .get(`http://test-frontend.microbiomestudio.fr:4557/api/v1/organizations`)
    .then(({ data }: any) => data)
    .catch(function (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });

export const addProject = (project: any) => {
  const params = { code: project.code, description: project.description };
  return axios
    .post(
      `http://test-frontend.microbiomestudio.fr:4557/api/v1/users/${project.user_id}/projects/`,
      params
    )
    .then(({ data }: any) => {
      toast.success("Enregistrer avec succès !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return data;
    })
    .catch(function (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export const useProjects = () => {
  return useQuery(["getProjects"], () => fetchProjects(), {});
};

export const useAddProject = (project: any) => {
  const queryClient = useQueryClient();
  return useMutation(["addProject"], async (project) => addProject(project), {
    async onSuccess(data) {
      await queryClient.cancelQueries("getUsers");
      return queryClient.invalidateQueries(["getUsers"]);
    },
  });
};
