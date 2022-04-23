import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const fetchOrganizations = () =>
  axios
    .get(`http://localhost:8080/api/v1/organizations`)
    .then(({ data }: any) => data);

export const addOrganization = (organization: any) => {
  return axios
    .post(`http://localhost:8080/api/v1/organizations/`, organization)
    .then(({ data }: any) => data);
};

export const useOrganizations = (setData: any) => {
  return useQuery(["getOrganizations"], () => fetchOrganizations(), {
    onSuccess(data) {
      setData(data);
    },
  });
};

export const useAddOrganization = (organization: any) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addOrganization"],
    async (organization) => addOrganization(organization),
    {
      async onSuccess(data) {
        await queryClient.cancelQueries("getOrganizations");
        return queryClient.invalidateQueries(["getOrganizations"]);
      },
    }
  );
};
