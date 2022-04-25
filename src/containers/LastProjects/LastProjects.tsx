import React, { useEffect, useState } from "react";
import UserAvatar from "../../components/User/UserAvatar";
import Icon from "../../components/Icon/Icon";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Badge,
  UncontrolledDropdown,
} from "reactstrap";
import {
  DataTableHead,
  DataTableItem,
  DataTableRow,
} from "../../components/Table/DataTable";
import { findUpper, randomTheme } from "../../utils/Utils";
import Link from "next/link";

const LastProjects = ({ data }: any) => {
  const [projects, setProjects] = useState([]);

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

    const projectsLastData = projectsFormat.slice(-3);
    setProjects(projectsLastData);
  }, [data]);
  return (
    <>
      {" "}
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <div className="card-title">
            <h6 className="title">Projects récents</h6>
          </div>
          <div className="card-tools">
            <Link href="list-projects">
              <a className="link">Voir tout</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="nk-tb-list">
        <DataTableHead>
          <DataTableRow size="md">
            <span className="sub-text">Code de projet</span>
          </DataTableRow>
          <DataTableRow size="lg">
            <span className="sub-text">Description du projet</span>
          </DataTableRow>
          <DataTableRow>
            <span className="sub-text">Utilisateur</span>
          </DataTableRow>
          <DataTableRow size="mb">
            <span className="sub-text">Organisation</span>
          </DataTableRow>
          <DataTableRow size="mb">&nbsp;</DataTableRow>
        </DataTableHead>
        {projects.map((project: any) => {
          const name = project.owner.first_name + " " + project.owner.last_name;
          return (
            <DataTableItem key={project.id}>
              <DataTableRow size="lg">
                <Badge pill color="danger">
                  {project.code}
                </Badge>
              </DataTableRow>

              <DataTableRow size="lg">
                <span className="tb-sub">{project.description}</span>
              </DataTableRow>
              <DataTableRow size="sm">
                <div className="user-card">
                  <UserAvatar
                    size="sm"
                    theme={randomTheme()}
                    text={findUpper(name)}
                  />
                  <div className="user-name">
                    <span className="tb-lead">{name}</span>
                  </div>
                </div>
              </DataTableRow>

              <DataTableRow size="lg">
                <span className="tb-sub">{project.organization}</span>
              </DataTableRow>

              <DataTableRow className="nk-tb-col-action">
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    className="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger"
                  >
                    <Icon name="chevron-right"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xs">
                    <ul className="link-list-plain">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          Modifier
                        </DropdownItem>
                      </li>

                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          Imprimer
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DataTableRow>
            </DataTableItem>
          );
        })}
      </div>
    </>
  );
};

export default LastProjects;
