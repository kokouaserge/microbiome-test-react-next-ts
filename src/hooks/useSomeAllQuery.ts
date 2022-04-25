import { useUsers } from "../hooks/useUsers";
import { useProjects } from "../hooks/useProjects";
import { useOrganizationsWithoutCallBack } from "../hooks/useOrganizations";

export const useSomePageData = () => {
  const {
    data: usersData,
    isError: usersError,
    isLoading: usersIsLoading,
  } = useUsers();
  const {
    data: projectsData,
    isError: projectsError,
    isLoading: projectsIsLoading,
  } = useProjects();
  const {
    data: organizationsData,
    isError: organizationsError,
    isLoading: organizationsIsLoading,
  } = useOrganizationsWithoutCallBack();

  const isLoading =
    usersIsLoading || projectsIsLoading || organizationsIsLoading;
  const isError = usersError || projectsError || organizationsError;
  const data = [usersData, projectsData, organizationsData];

  return {
    isError,
    isLoading,
    data,
  };
};
