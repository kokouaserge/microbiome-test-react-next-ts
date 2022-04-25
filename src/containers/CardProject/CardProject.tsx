import React from "react";
import { ProjectCard } from "components/ProjectCard/ProjectCard";
import { Col } from "components/Grid/Grid";
import UserAvatar from "components/User/UserAvatar";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import Icon from "components/Icon/Icon";
import { findUpper, randomTheme } from "utils/Utils";

export default function CardProject({ project }: any) {
  return (
    <Col sm="6" lg="4" xxl="3">
      <ProjectCard>
        <div className="project-head">
          <a
            href="#title"
            onClick={(ev) => {
              ev.preventDefault();
            }}
            className="project-title"
          >
            <UserAvatar
              className="sq"
              text={findUpper(project.organization)}
              theme={randomTheme()}
            />
            <div className="project-info">
              <h6 className="title">{project.organization}</h6>
              <span className="sub-text">
                {project.owner.first_name + " " + project.owner.last_name}
              </span>
            </div>
          </a>
          <UncontrolledDropdown>
            <DropdownToggle
              tag="a"
              className="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 mr-n1"
            >
              <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu right>
              <ul className="link-list-opt no-bdr">
                <li onClick={() => null}>
                  <DropdownItem
                    tag="a"
                    href="#edit"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    <Icon name="edit"></Icon>
                    <span>Modifier le project</span>
                  </DropdownItem>
                </li>
              </ul>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className="project-details">
          {project.description.length > 90
            ? project.description.substring(0, 89) + "... "
            : project.description}
        </div>

        <div className="project-meta">
          <ul className="project-users g-1">
            <li>
              <UserAvatar
                className="sm"
                text={findUpper(project.owner.first_name)}
                theme={randomTheme()}
              />
            </li>
          </ul>
          <span className={`badge badge-dim badge-warning`}>
            {project.code}
          </span>
        </div>
      </ProjectCard>
    </Col>
  );
}
