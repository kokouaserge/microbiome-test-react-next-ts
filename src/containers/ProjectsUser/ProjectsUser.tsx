import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  DropdownItem,
  Form,
} from "reactstrap";
import React, { useContext, useEffect, useState } from "react";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
} from "components/Table/DataTable";
import Icon from "components/Icon/Icon";

const ProjectsUser = ({ user }: any) => {
  const [currentItems, setCurrentItems] = useState(user.projects);

  return (
    <DataTable className="card-stretch">
      <DataTableBody>
        <DataTableHead>
          <DataTableRow>
            <span className="sub-text">ID</span>
          </DataTableRow>
          <DataTableRow size="md">
            <span className="sub-text">Code</span>
          </DataTableRow>
          <DataTableRow size="lg">
            <span className="sub-text">Description</span>
          </DataTableRow>
          <DataTableRow size="mb">
            <span className="sub-text">Statut</span>
          </DataTableRow>
        </DataTableHead>
        {/*Head*/}
        {currentItems.length > 0 ? (
          currentItems.map((item: any, idx: number) => {
            return (
              <DataTableItem key={item.id}>
                <DataTableRow>{idx + 1}</DataTableRow>

                <DataTableRow size="mb">
                  <span className="tb-amount">{item.code}</span>
                </DataTableRow>

                <DataTableRow size="lg">
                  <span>{item.description}</span>
                </DataTableRow>

                <DataTableRow size="mb">
                  <ul className="list-status">
                    <li>
                      <Icon
                        className={`text-${
                          item.is_active === true ? "success" : "warning"
                        }`}
                        name={`${
                          item.is_active === true
                            ? "check-circle"
                            : "alert-circle"
                        }`}
                      ></Icon>
                    </li>
                  </ul>
                </DataTableRow>
              </DataTableItem>
            );
          })
        ) : (
          <div className="text-center">
            <span className="text-silent">Pas de données trouvées</span>
          </div>
        )}
      </DataTableBody>
    </DataTable>
  );
};

export default ProjectsUser;
