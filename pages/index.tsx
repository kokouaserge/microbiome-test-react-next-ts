import type { NextPage } from "next";
import Head from "layout/Head/Head";
import Content from "layout/Content/Content";
import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  Card,
  UncontrolledDropdown,
  DropdownItem,
  Modal,
  ModalBody,
} from "reactstrap";
import {
  Block,
  BlockDes,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from "components/Block/Block";
import Icon from "components/Icon/Icon";
import Button from "components/Button/Button";
import { Row, Col } from "components/Grid/Grid";
import LastProjects from "containers/LastProjects/LastProjects";
import { useSomePageData } from "hooks/useSomeAllQuery";
import CardAnalitics from "containers/CardAnalitics/CardAnalitics";
import LastUsers from "containers/LastUsers/LastUsers";

import AddProject from "containers/AddProject/AddProject";
import AddUser from "containers/AddUser/AddUser";
import AddOrganization from "containers/AddOrganization/AddOrganization";

const Home: NextPage = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState({
    toggle: false,
    type: "",
  });
  const { data, isError, isLoading } = useSomePageData();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Une erreur</span>;
  }

  const changeSm = () => {
    updateSm((sm: boolean) => !sm);
  };

  const changeModal = (modal: boolean) => {
    return setModal((item: any) => {
      return {
        type: item.type,
        toggle: modal,
      };
    });
  };

  const renderSwitch = (type: string) => {
    if (type === "user") {
      return <AddUser ToggleModal={changeModal} />;
    }

    if (type === "project") {
      return <AddProject ToggleModal={changeModal} users={data[0]} />;
    }

    if (type === "organization") {
      return <AddOrganization ToggleModal={changeModal} />;
    }
  };

  return (
    <>
      <Head title="Tableau de bord" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Tableau de bord</BlockTitle>
              <BlockDes className="text-soft">
                <p>Bienvenue sur votre Dashboard</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${
                    sm ? "active" : ""
                  }`}
                  onClick={changeSm}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? "block" : "none" }}
                >
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle btn  btn-primary"
                        >
                          <Icon name="plus"></Icon>
                          <span>Ajout rapide</span>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                href="#addproject"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setModal((item: any) => {
                                    return {
                                      type: "project",
                                      toggle: true,
                                    };
                                  });
                                }}
                              >
                                <Icon name="coin-alt-fill"></Icon>
                                <span>Ajouter un project</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#adduser"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setModal((item: any) => {
                                    return {
                                      type: "user",
                                      toggle: true,
                                    };
                                  });
                                }}
                              >
                                <Icon name="user-add-fill"></Icon>
                                <span>Ajouter un utilisateur</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#addorganization"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setModal((item: any) => {
                                    return {
                                      type: "organization",
                                      toggle: true,
                                    };
                                  });
                                }}
                              >
                                <Icon name="note-add-fill-c"></Icon>
                                <span>Ajouter une organisation</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col md="4">
              <CardAnalitics data={data[1]} type="Projects" />
            </Col>

            <Col md="4">
              <CardAnalitics data={data[0]} type="Utilisateurs" />
            </Col>

            <Col md="4">
              <CardAnalitics data={data[2]} type="Organisations" />
            </Col>

            <Col md="6" xxl="4">
              <Card className="card-bordered card-full">
                <LastUsers users={data[0]} />
              </Card>
            </Col>

            <Col md="12" xxl="8">
              <Card className="card-bordered card-full">
                <LastProjects data={data[0]} />
              </Card>
            </Col>
          </Row>
        </Block>

        <Modal
          isOpen={modal.toggle}
          toggle={() => {
            setModal((item: any) => {
              return {
                type: item.type,
                toggle: false,
              };
            });
          }}
          className="modal-dialog-centered"
          size="lg"
        >
          <ModalBody>
            <a
              href="#close"
              onClick={(ev) => {
                ev.preventDefault();
                setModal((item: any) => {
                  return {
                    type: item.type,
                    toggle: false,
                  };
                });
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>

            {renderSwitch(modal.type)}
          </ModalBody>
        </Modal>
      </Content>
    </>
  );
};

export default Home;
