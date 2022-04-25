import React, { useEffect, useState } from "react";
import Head from "layout/Head/Head";
import Content from "layout/Content/Content";
import { GetStaticProps } from "next";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from "../src/components/Block/Block";
import Icon from "../src/components/Icon/Icon";
import { Row } from "../src/components/Grid/Grid";
import Button from "../src/components/Button/Button";
import PaginationComponent from "../src/components/Pagination/Pagination";
import { Modal, ModalBody } from "reactstrap";
import CardProject from "../src/containers/CardProject/CardProject";
import AddProject from "../src/containers/AddProject/AddProject";
import { useUsers, fetchUsers } from "../src/hooks/useUsers";
import { QueryClient, dehydrate } from "react-query";

const ListProjects = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState(false);
  const [onSearchText, setSearchText] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectsPersist, setProjectsPersist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  const { isSuccess, data, isLoading, isError, error } = useUsers();

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = projects.filter((item: any) => {
        return (
          item.code.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.owner.first_name
            .toLowerCase()
            .includes(onSearchText.toLowerCase()) ||
          item.owner.last_name
            .toLowerCase()
            .includes(onSearchText.toLowerCase()) ||
          item.organization.toLowerCase().includes(onSearchText.toLowerCase())
        );
      });
      setProjects([...filteredObject]);
    } else {
      setProjects([...projectsPersist]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearchText]);

  useEffect(() => {
    let projectsFormat: any = [];
    if (!data) {
      return;
    }
    for (const user of data) {
      for (const project of user.projects) {
        const { code, description, id, owner_id, is_active } = project;
        const projectFormat = {
          code,
          description,
          id,
          owner_id,
          is_active,
          owner: {
            first_name: user.first_name,
            last_name: user.last_name,
          },
          organization: user.organization.name,
        };

        projectsFormat.push(projectFormat);
      }
    }

    setProjects(projectsFormat);
    setProjectsPersist(projectsFormat);
  }, [data]);

  // onChange function for searching name
  const onFilterChange = (e: any) => {
    setSearchText(e.target.value);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Une erreur</span>;
  }

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Head title="Liste des projects"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page> Liste des projects</BlockTitle>

              <BlockDes className="text-soft">
                Nous avons {projects.length} projects
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                    sm ? "active" : ""
                  }`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? "block" : "none" }}
                >
                  <ul className="nk-block-tools g-3">
                    <li>
                      <div className="form-control-wrap">
                        <div className="form-icon form-icon-right">
                          <em className="icon ni ni-search"></em>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Rechercher par code, nom du propriétaire ou organisation "
                          value={onSearchText}
                          onChange={(e) => onFilterChange(e)}
                        />
                      </div>
                    </li>
                    <li
                      className="nk-block-tools-opt"
                      onClick={() => setModal(true)}
                    >
                      <Button color="primary">
                        <Icon name="plus"></Icon>
                        <span>Ajouter un project</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            {currentItems &&
              currentItems.map((item: any, idx: any) => {
                return <CardProject key={item.id} project={item} />;
              })}
          </Row>
          <div className="mt-5">
            <PaginationComponent
              itemPerPage={itemPerPage}
              totalItems={projects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </Block>

        <Modal
          isOpen={modal}
          toggle={() => setModal(false)}
          className="modal-dialog-centered"
          size="lg"
        >
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                setModal(false);
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <AddProject ToggleModal={setModal} users={data} />
          </ModalBody>
        </Modal>
      </Content>
    </>
  );
};
export default ListProjects;
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getUsers"], () => fetchUsers());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
