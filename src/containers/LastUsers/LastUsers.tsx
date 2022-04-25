import React, { useState } from "react";
import UserAvatar from "../../components/User/UserAvatar";
import { findUpper, randomTheme } from "../../utils/Utils";
import { CardTitle } from "reactstrap";
import Link from "next/link";

export default function LastUsers({ users }: any) {
  return (
    <React.Fragment>
      <div className="card-inner border-bottom">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">Utilisateurs récents</h6>
          </CardTitle>
          <div className="card-tools">
            <ul className="card-tools-nav">
              <li className="active">
                <a
                  href="#all"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <span>Récents</span>
                </a>
              </li>

              <li>
                <Link href="list-users">
                  <a>
                    <span>Voir Tout</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="nk-activity">
        {users.slice(-3).map((user: any, idx: any) => {
          const name = user.first_name + " " + user.last_name;
          return (
            <li className="nk-activity-item" key={user.id}>
              <UserAvatar
                className="nk-activity-media"
                theme={randomTheme()}
                text={findUpper(name)}
              ></UserAvatar>
              <div className="nk-activity-data">
                <div className="label">{name}</div>
                <span className="time">Depuis un moment</span>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
