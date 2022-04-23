import React, { useEffect, useState } from "react";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
} from "components/Table/DataTable";
import Icon from "components/Icon/Icon";
import Link from "next/link";
import Button from "components/Button/Button";
import TooltipComponent from "components/ToolTip/ToolTip";
import { findUpper, randomTheme } from "utils/Utils";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  DropdownItem,
} from "reactstrap";

import PaginationComponent from "components/Pagination/Pagination";
import UserAvatar from "components/User/UserAvatar";
import ProjectsUser from "containers/ProjectsUser/ProjectsUser";

const TableListUsers = ({ users }: any) => {
  const [data, setData] = useState(users);
  const [tablesm, updateTableSm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [onSearchText, setSearchText] = useState("");
  const [onSearch, setonSearch] = useState(true);
  const [sort, setSortState] = useState("");
  const [modal, setModal] = useState(false);
  const [userActive, setUserActive] = useState({
    first_name: "",
    last_name: "",
    projects: [],
  });

  // Changing state value when searching name
  useEffect(() => {
    setData(users);
  }, [users]);

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = data.filter((item: any) => {
        return (
          item.first_name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.last_name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.organization.name
            .toLowerCase()
            .includes(onSearchText.toLowerCase()) ||
          item.email.toLowerCase().includes(onSearchText.toLowerCase())
        );
      });
      setData([...filteredObject]);
    } else {
      setData([...users]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearchText]);

  // onChange function for searching name
  const onFilterChange = (e: any) => {
    setSearchText(e.target.value);
  };

  // Sorting data
  const sortFunc = (params: any) => {
    let defaultData = users;
    if (params === "asc") {
      let sortedData = defaultData.sort((a: any, b: any) =>
        a.first_name.localeCompare(b.first_name)
      );
      setData([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = defaultData.sort((a: any, b: any) =>
        b.first_name.localeCompare(a.first_name)
      );
      setData([...sortedData]);
    }
  };

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const suspendUser = (id: number) => {};

  const seeProjects = (user: any) => {
    setUserActive(user);
    setModal(true);
  };

  return (
    <>
      <DataTable className="card-stretch">
        <div className="card-inner position-relative card-tools-toggle">
          <div className="card-title-group">
            <div className="card-tools">
              <div className="form-inline flex-nowrap gx-3">
                {data.length} utilisateurs
              </div>
            </div>
            <div className="card-tools mr-n1">
              <ul className="btn-toolbar gx-1">
                <li>
                  <a
                    href="#search"
                    onClick={(ev: any) => {
                      ev.preventDefault();
                      toggle();
                    }}
                    className="btn btn-icon search-toggle toggle-search"
                  >
                    <Icon name="search"></Icon>
                  </a>
                </li>
                <li className="btn-toolbar-sep"></li>
                <li>
                  <div className="toggle-wrap">
                    <div
                      className={`toggle-content ${
                        tablesm ? "content-active" : ""
                      }`}
                    >
                      <ul className="btn-toolbar gx-1">
                        <li>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="tranparent"
                              className="btn btn-trigger btn-icon dropdown-toggle"
                            >
                              <Icon name="setting"></Icon>
                            </DropdownToggle>
                            <DropdownMenu right className="dropdown-menu-xs">
                              <ul className="link-check">
                                <li>
                                  <span>Voir</span>
                                </li>
                                <li
                                  className={itemPerPage === 10 ? "active" : ""}
                                >
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdownitem"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setItemPerPage(10);
                                    }}
                                  >
                                    10
                                  </DropdownItem>
                                </li>
                                <li
                                  className={itemPerPage === 15 ? "active" : ""}
                                >
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdownitem"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setItemPerPage(15);
                                    }}
                                  >
                                    15
                                  </DropdownItem>
                                </li>
                              </ul>
                              <ul className="link-check">
                                <li>
                                  <span>Ordre</span>
                                </li>
                                <li className={sort === "dsc" ? "active" : ""}>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdownitem"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setSortState("dsc");
                                      sortFunc("dsc");
                                    }}
                                  >
                                    DESC
                                  </DropdownItem>
                                </li>
                                <li className={sort === "asc" ? "active" : ""}>
                                  <DropdownItem
                                    tag="a"
                                    href="#dropdownitem"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      setSortState("asc");
                                      sortFunc("asc");
                                    }}
                                  >
                                    ASC
                                  </DropdownItem>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`card-search search-wrap ${!onSearch && "active"}`}>
            <div className="card-body">
              <div className="search-content">
                <Button
                  className="search-back btn-icon toggle-search active"
                  onClick={() => {
                    setSearchText("");
                    toggle();
                  }}
                >
                  <Icon name="arrow-left"></Icon>
                </Button>
                <input
                  type="text"
                  className="border-transparent form-focus-none form-control"
                  placeholder="Rechercher un utilisateur par son nom, prénom, email ou organisation"
                  value={onSearchText}
                  onChange={(e) => onFilterChange(e)}
                />
                <Button className="search-submit btn-icon">
                  <Icon name="search"></Icon>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DataTableBody>
          <DataTableHead>
            <DataTableRow>
              <span className="sub-text">Utilisateur</span>
            </DataTableRow>
            <DataTableRow size="md">
              <span className="sub-text">Nombre de projet</span>
            </DataTableRow>
            <DataTableRow size="lg">
              <span className="sub-text">Organisation</span>
            </DataTableRow>
            <DataTableRow size="mb">
              <span className="sub-text">Description Organisation</span>
            </DataTableRow>
            <DataTableRow size="mb"></DataTableRow>
          </DataTableHead>
          {/*Head*/}
          {currentItems.length > 0
            ? currentItems.map((item: any) => {
                const name = item.first_name + " " + item.last_name;
                return (
                  <DataTableItem key={item.id}>
                    <DataTableRow>
                      <Link href={`/user-details-regular/${item.id}`}>
                        <a>
                          <div className="user-card">
                            <UserAvatar
                              text={findUpper(name)}
                              theme={randomTheme()}
                            ></UserAvatar>
                            <div className="user-info">
                              <span className="tb-lead">{name} </span>
                              <span>{item.email}</span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </DataTableRow>

                    <DataTableRow size="mb">
                      <span className="tb-amount">{item.projects.length}</span>
                    </DataTableRow>

                    <DataTableRow size="lg">
                      <span>{item.organization.name}</span>
                    </DataTableRow>

                    <DataTableRow size="mb">
                      <span>{item.organization.description}</span>
                    </DataTableRow>
                    <DataTableRow className="nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li
                          className="nk-tb-action-hidden"
                          onClick={() => suspendUser(item.id)}
                        >
                          <TooltipComponent
                            tag="a"
                            containerClassName="btn btn-trigger btn-icon"
                            id={"edit" + item.id}
                            icon="edit-alt-fill"
                            direction="top"
                            text="Modifier"
                          />
                        </li>

                        <li
                          className="nk-tb-action-hidden"
                          onClick={() => seeProjects(item)}
                        >
                          <TooltipComponent
                            tag="a"
                            containerClassName="btn btn-trigger btn-icon"
                            id={"suspend" + item.id}
                            icon="eye-fill"
                            direction="top"
                            text="Voir les projects"
                          />
                        </li>
                      </ul>
                    </DataTableRow>
                  </DataTableItem>
                );
              })
            : null}
        </DataTableBody>
        <div className="card-inner">
          {currentItems.length > 0 ? (
            <PaginationComponent
              itemPerPage={itemPerPage}
              totalItems={data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          ) : (
            <div className="text-center">
              <span className="text-silent">Pas de données trouvées</span>
            </div>
          )}
        </div>
      </DataTable>

      <Modal
        isOpen={modal}
        toggle={() => setModal((modal: boolean) => !modal)}
        className="modal-dialog-centered"
        size="lg"
      >
        <ModalBody>
          <a
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              setModal((modal: boolean) => !modal);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">
              Liste des projects de{" "}
              {!!userActive &&
                userActive.first_name + " " + userActive.last_name}
            </h5>
            <div className="mt-4">
              <ProjectsUser user={userActive} />
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TableListUsers;
