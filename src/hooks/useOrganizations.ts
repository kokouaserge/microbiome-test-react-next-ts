import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const fetchOrganizations = () =>
  axios
    .get(`http://test-frontend.microbiomestudio.fr/api/v1/organizations`)
    .then(({ data }: any) => data)
    .catch(function (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });

export const addOrganization = (organization: any) => {
  return axios
    .post(
      `http://test-frontend.microbiomestudio.fr/api/v1/organizations/`,
      organization
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

export const useOrganizations = (setData: any) => {
  return useQuery(["getOrganizations"], () => fetchOrganizations(), {
    onSuccess(data) {
      setData(data);
    },
  });
};

export const useOrganizationsWithoutCallBack = () => {
  return useQuery(["getOrganizations"], () => fetchOrganizations());
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
