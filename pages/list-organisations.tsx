import React, { useEffect, useState } from "react";
import Content from "layout/Content/Content";
import Head from "layout/Head/Head";
import { Modal, ModalBody } from "reactstrap";
import type { GetStaticProps } from "next";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from "components/Block/Block";
import Icon from "components/Icon/Icon";
import { Row } from "components/Grid/Grid";
import Button from "components/Button/Button";
import PaginationComponent from "components/Pagination/Pagination";
import CardOrganization from "containers/CardOrganization/CardOrganization";
import { useOrganizations, fetchOrganizations } from "hooks/useOrganizations";
import { QueryClient, dehydrate } from "react-query";
import AddOrganization from "containers/AddOrganization/AddOrganization";

const ListOrganisations = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [onSearchText, setSearchText] = useState("");
  const [itemPerPage, setItemPerPage] = useState(10);
  const [organizations, setOrganizations] = useState([]);
  const { isSuccess, data, isLoading, isError, error } =
    useOrganizations(setOrganizations);

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = organizations.filter((item: any) => {
        return item.name.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setOrganizations([...filteredObject]);
    } else {
      const oldOrganizations: any = data;
      setOrganizations(oldOrganizations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearchText]);

  // onChange function for searching name
  const onFilterChange = (e: any) => {
    setSearchText(e.target.value);
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = organizations.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Une erreur</span>;
  }

  return (
    <>
      <Head title="Liste des organisations"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Liste des organisations
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Nous avons {organizations.length} résultats</p>
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
                          placeholder="Rechercher par nom "
                          value={onSearchText}
                          onChange={(e) => onFilterChange(e)}
                        />
                      </div>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button
                        color="primary"
                        className="btn-primary"
                        onClick={() => setModal(true)}
                      >
                        <Icon name="plus"></Icon>
                        <span>Ajouter une organisation</span>
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
            {currentItems.map((item: any) => (
              <CardOrganization key={item.id} organization={item} />
            ))}
          </Row>
          <div className="mt-5">
            <PaginationComponent
              itemPerPage={itemPerPage}
              totalItems={organizations.length}
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
              href="#close"
              onClick={(ev) => {
                ev.preventDefault();
                setModal(false);
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <AddOrganization ToggleModal={setModal} />
          </ModalBody>
        </Modal>
      </Content>
    </>
  );
};
export default ListOrganisations;
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getOrganizations"], () =>
    fetchOrganizations()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
