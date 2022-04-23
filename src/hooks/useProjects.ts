import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const fetchProjects = () =>
  axios
    .get(`http://localhost:8080/api/v1/organizations`)
    .then(({ data }: any) => data);

export const addProject = (project: any) => {
  const params = { code: project.code, description: project.description };
  return axios
    .post(
      `http://localhost:8080/api/v1/users/${project.user_id}/projects/`,
      params
    )
    .then(({ data }: any) => data);
};

export const useProjects = () => {
  return useQuery(["getProjects"], () => fetchProjects());
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
