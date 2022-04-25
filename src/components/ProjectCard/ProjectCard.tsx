import React from "react";
import UserAvatar from "../../components/User/UserAvatar";
import Icon from "../../components/Icon/Icon";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Progress,
} from "reactstrap";
import { PreviewCard } from "../../components/Preview/Preview";
import { v4 as uuidv4 } from "uuid";

export const ProjectCard = ({ ...props }) => {
  return (
    <>
      <PreviewCard className="card-bordered h-100">
        <div className="project">{props.children}</div>
      </PreviewCard>
    </>
  );
};

export const ProjectHead = ({ color, initial, title, subtitle }: any) => {
  return (
    <div className="project-head">
      <a
        href="#title"
        onClick={(ev) => {
          ev.preventDefault();
        }}
        className="project-title"
      >
        <UserAvatar className="sq" theme={color} text={initial} />
        <div className="project-info">
          <h6 className="title">{title}</h6>
          <span className="sub-text">{subtitle}</span>
        </div>
      </a>
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="btn btn-icon btn-trigger">
          <Icon name="more-h"></Icon>
        </DropdownToggle>
        <DropdownMenu right>
          <ul className="link-list-opt no-bdr">
            <li>
              <a
                href="#view"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="eye"></Icon>
                <span>View Project</span>
              </a>
            </li>
            <li>
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="edit"></Icon>
                <span>Edit Project</span>
              </a>
            </li>
            <li>
              <a
                href="#markasdone"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                <Icon name="check-round-cut"></Icon>
                <span>Mark As Done</span>
              </a>
            </li>
          </ul>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};
