import React from "react";
import { Col } from "../../components/Grid/Grid";
import UserAvatar from "../../components/User/UserAvatar";
import { PreviewAltCard } from "../../components/Preview/Preview";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import Icon from "../../components/Icon/Icon";
import { findUpper, randomTheme } from "../../utils/Utils";

export default function CardOrganization({ organization }: any) {
  return (
    <Col sm="6" lg="4" xxl="3">
      <PreviewAltCard>
        <div className="team">
          <div className={`team-status bg-success text-white`}>
            <Icon name={`check-thick`}></Icon>
          </div>
          <div className="team-options">
            <UncontrolledDropdown>
              <DropdownToggle
                tag="a"
                className="dropdown-toggle btn btn-icon btn-trigger"
              >
                <Icon name="more-h"></Icon>
              </DropdownToggle>
              <DropdownMenu right>
                <ul className="link-list-opt no-bdr">
                  <li onClick={() => {}}>
                    <DropdownItem
                      tag="a"
                      href="#edit"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <Icon name="edit"></Icon>
                      <span>Modifier</span>
                    </DropdownItem>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="user-card user-card-s2">
            <UserAvatar
              theme={randomTheme()}
              className="md"
              text={findUpper(organization.name)}
            ></UserAvatar>
            <div className="user-info">
              <h6>{organization.name}</h6>
            </div>
          </div>
          <div className="team-details">
            <p>{organization.description} </p>
          </div>
          <ul className="team-statistics">
            {/* <li>
              <span>{organization.projects.length}</span>
              <span>Projects</span>
            </li> */}
            <li>
              <span>{organization.members.length}</span>
              <span>Membres</span>
            </li>
          </ul>
        </div>
      </PreviewAltCard>
    </Col>
  );
}
