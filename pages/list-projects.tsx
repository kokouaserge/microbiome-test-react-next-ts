import React, { useEffect, useState } from "react";
import Head from "layout/Head/Head";
import Content from "layout/Content/Content";

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
import { setDeadline, setDeadlineDays } from "utils/Utils";
import { Modal, ModalBody } from "reactstrap";
import CardProject from "containers/CardProject/CardProject";
import AddProject from "containers/AddProject/AddProject";
import { useProjects } from "hooks/useProjects";
import { useUsers, fetchUsers } from "hooks/useUsers";

export const projectData = [
  {
    id: 1,
    avatarClass: "purple",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    lead: "Abu Bin",
    tasks: "3",
    totalTask: "93",
    checked: false,
    deadline: setDeadline(20), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "pink" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
  {
    id: 2,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "230",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      {
        value: "Newman John",
        label: "Newman John",
        image: null,
        theme: "primary",
      },
    ],
  },
  {
    id: 3,
    avatarClass: "info",
    title: "Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement",
    tasks: "2",
    totalTask: "15",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(1), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 4,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "purple",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 5,
    avatarClass: "info",
    title: "Website Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement.",
    tasks: "8",
    totalTask: "100",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(11), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 6,
    avatarClass: "purple",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    tasks: "3",
    totalTask: "25",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(15), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "purple" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        theme: "purple",
      },
      { value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" },
    ],
  },
  {
    id: 7,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "purple",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 8,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "30",
    lead: "Ryu Duke",
    checked: false,
    deadline: setDeadline(25), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
  {
    id: 9,
    avatarClass: "warning",
    title: "Redesign Logo",
    subtitle: "Runnergy",
    desc: "Design the logo for Runnergy main website including their user dashboard logos.",
    tasks: "5",
    totalTask: "15",
    lead: "Aliah Pitts",
    checked: false,
    deadline: setDeadline(2), // Format ** mm/dd/yyyy
    team: [{ value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" }],
  },
  {
    id: 10,
    avatarClass: "danger",
    title: "Convert to React",
    subtitle: "Softnio",
    desc: "Convert existing project to a react application",
    tasks: "500",
    totalTask: "2005",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(45), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      {
        value: "Newman John",
        label: "Newman John",
        theme: "purple",
      },
      {
        value: "Joshua Wilson",
        label: "Joshua Wilson",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 11,
    avatarClass: "blue",
    title: "Redesign Website",
    subtitle: "Techyspeck",
    desc: "Design the websites for Runnergy main website including their user dashboard logos.",
    tasks: "14",
    totalTask: "15",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(10), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 12,
    avatarClass: "pink",
    title: "Create an Vue Application",
    subtitle: "MightyPhillipes",
    desc: "Create a Vue application, with the designs given",
    tasks: "1",
    totalTask: "15",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(46), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "purple",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 13,
    avatarClass: "Secondary",
    title: "Host a website in AWS",
    subtitle: "MightyPhillipes",
    desc: "Host a created website using AWS web services",
    tasks: "50",
    totalTask: "70",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(90), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "purple",
      },
    ],
  },
  {
    id: 14,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Ryu Duke",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 15,
    avatarClass: "info",
    title: "Website Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement.",
    tasks: "8",
    totalTask: "100",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(11), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        image: null,
        theme: "purple",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 16,
    avatarClass: "purple",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    tasks: "3",
    totalTask: "25",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(15), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        theme: "purple",
      },
      {
        value: "Milagros Betts",
        label: "Milagros Betts",
        image: null,
        theme: "purple",
      },
      {
        value: "Joshua Wilson",
        label: "Joshua Wilson",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 17,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
    ],
  },
  {
    id: 18,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "30",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(25), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "purple",
      },
      {
        value: "Newman John",
        label: "Newman John",
        image: null,
        theme: "primary",
      },
    ],
  },
  {
    id: 19,
    avatarClass: "warning",
    title: "Redesign Logo",
    subtitle: "Runnergy",
    desc: "Design the logo for Runnergy main website including their user dashboard logos.",
    tasks: "5",
    totalTask: "15",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(2), // Format ** mm/dd/yyyy
    team: [
      { value: "Milagros Betts", label: "Milagros Betts", theme: "purple" },
    ],
  },
];

export const teamList = [
  { value: "Abu Bin", label: "Abu Bin", theme: "purple" },
  { value: "Newman John", label: "Newman John", theme: "primary" },
  { value: "Milagros Betts", label: "Milagros Betts", theme: "purple" },
  { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
  { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
  { value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" },
];

export const categoryOptions = [
  {
    value: "Gadget",
    label: "Gadget",
  },
  {
    value: "Electronics",
    label: "Electronics",
  },
  {
    label: "Watch",
    value: "Watch",
  },
  {
    label: "Tracker",
    value: "Tracker",
  },
  {
    label: "Fitbit",
    value: "Fitbit",
  },
  {
    label: "Men",
    value: "Men",
  },
  {
    label: "Holder",
    value: "Holder",
  },
  {
    label: "Speaker",
    value: "Speaker",
  },
  {
    label: "Headphones",
    value: "Headphones",
  },
  {
    label: "Bundle",
    value: "Bundle",
  },
];

const ListProjects = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState(false);
  //const [data, setData] = useState(projectData);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  const { isSuccess, data, isLoading, isError, error } = useUsers();

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
  }, [data]);

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
            <AddProject
              ToggleModal={setModal}
              updateProjectList={{}}
              projects={projects}
              users={data}
            />
          </ModalBody>
        </Modal>
      </Content>
    </>
  );
};
export default ListProjects;
