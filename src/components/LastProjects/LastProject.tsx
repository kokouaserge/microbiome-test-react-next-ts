import React, { useState } from "react";
import UserAvatar from "components/User/UserAvatar";
import { CardTitle } from "reactstrap";

export const activityData = [
  {
    img: null,
    initial: "KJ",
    theme: "success",
    name: "Kieth Jensen",
    activity: "requested to Withdrawal",
    time: "2 hours ago",
  },
  {
    img: null,
    initial: "HS",
    theme: "warning",
    name: "Harry Simpson",
    activity: "placed a Order",
    time: "2 hours ago",
  },
  {
    img: null,
    initial: "SM",
    theme: "azure",
    name: "Stephenie Marshall",
    activity: "got a huge bonus",
    time: "2 hours ago",
  },
  {
    img: null,
    initial: "NC",
    theme: "purple",
    name: "Nicolas Carr",
    activity: "deposited funds",
    time: "2 hours ago",
  },
  {
    img: null,
    initial: "TM",
    theme: "pink",
    name: "Timothy Moreno",
    activity: "placed a Order",
    time: "2 hours ago",
  },
];

const LastProject = () => {
  const [recentUser, setRecentUser] = useState("");
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Recent Activities</h6>
          </CardTitle>
          <div className="card-tools">
            <ul className="card-tools-nav">
              <li
                className={recentUser === "Cancel" ? "active" : ""}
                onClick={() => setRecentUser("Cancel")}
              >
                <a
                  href="#cancel"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Cancel</span>
                </a>
              </li>
              <li
                className={recentUser === "" ? "active" : ""}
                onClick={() => setRecentUser("")}
              >
                <a
                  href="#all"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>All</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="nk-activity">
        {recentUser === "Cancel"
          ? activityData.slice(0, 3).map((item: any) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">
                      {item.name + " " + item.activity}
                    </div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })
          : activityData.map((item: any) => {
              return (
                <li className="nk-activity-item" key={item.name}>
                  <UserAvatar
                    className="nk-activity-media"
                    theme={item.theme}
                    image={item.img}
                    text={item.initial}
                  ></UserAvatar>
                  <div className="nk-activity-data">
                    <div className="label">
                      {item.name + " " + item.activity}
                    </div>
                    <span className="time">{item.time}</span>
                  </div>
                </li>
              );
            })}
      </ul>
    </React.Fragment>
  );
};
export default LastProject;
