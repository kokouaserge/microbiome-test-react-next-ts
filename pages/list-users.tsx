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
import Button from "components/Button/Button";
import TableListUsers from "containers/TableListUsers/TableListUsers";
import AddUser from "containers/AddUser/AddUser";
import { useUsers, fetchUsers } from "hooks/useUsers";
import { QueryClient, dehydrate } from "react-query";

const ListUsers = () => {
  const { isSuccess, data, isLoading, isError, error } = useUsers();
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState(false);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Une erreur</span>;
  }

  return (
    <>
      <Head title="Liste des utilisateurs"></Head>

      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Liste des utilisateurs
              </BlockTitle>
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
                      <Button
                        color="primary"
                        className="btn-primary"
                        onClick={() => setModal((item: boolean) => !item)}
                      >
                        <Icon name="plus"></Icon>
                        <span>Ajouter un utilisateur</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <TableListUsers users={data} />
        </Block>

        <Modal
          isOpen={modal}
          toggle={() => setModal((item: boolean) => !item)}
          className="modal-dialog-centered"
          size="lg"
        >
          <ModalBody>
            <a
              href="#close"
              onClick={(ev) => {
                ev.preventDefault();
                setModal((item: boolean) => !item);
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <AddUser ToggleModal={setModal} />
          </ModalBody>
        </Modal>
      </Content>
    </>
  );
};
export default ListUsers;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getUsers"], () => fetchUsers());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
