import React from "react";
import { PreviewAltCard } from "../../components/Preview/Preview";
import TooltipComponent from "../../components/ToolTip/ToolTip";

export default function CardAnalitics({ data, type }: any) {
  const renderSwitch = (type: string) => {
    if (type === "Utilisateurs") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <rect
            width="60"
            height="56"
            x="5"
            y="7"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            rx="7"
            ry="7"
          ></rect>
          <rect
            width="60"
            height="56"
            x="25"
            y="27"
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            rx="7"
            ry="7"
          ></rect>
          <rect
            width="60"
            height="56"
            x="15"
            y="17"
            fill="#fff"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            rx="7"
            ry="7"
          ></rect>
          <path
            fill="none"
            stroke="#6576ff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M15 29L75 29"
          ></path>
          <circle cx="53" cy="23" r="2" fill="#c4cefe"></circle>
          <circle cx="60" cy="23" r="2" fill="#c4cefe"></circle>
          <circle cx="67" cy="23" r="2" fill="#c4cefe"></circle>
          <rect
            width="20"
            height="20"
            x="22"
            y="39"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            rx="2"
            ry="2"
          ></rect>
          <circle
            cx="32"
            cy="45.81"
            r="2"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M29 54.31a3 3 0 016 0"
          ></path>
          <path
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M49 40L69 40"
          ></path>
          <path
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M49 51L69 51"
          ></path>
          <path
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M49 57L59 57"
          ></path>
          <path
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M64 57L66 57"
          ></path>
          <path
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M49 46L59 46"
          ></path>
          <path
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M64 46L66 46"
          ></path>
        </svg>
      );
    }

    if (type === "Projects") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 113.9">
          <path
            fill="#c4cefe"
            d="M83.84 108.24l-48.31-7.86a3.55 3.55 0 01-3.1-4l12.2-69.48a3.66 3.66 0 014.29-2.8l48.32 7.8a3.56 3.56 0 013.09 4l-12.2 69.52a3.66 3.66 0 01-4.29 2.82z"
          ></path>
          <path
            fill="#c4cefe"
            d="M29.73 103.29L74.66 96a3.41 3.41 0 002.84-3.94L65.4 22.95a3.5 3.5 0 00-4-2.82l-44.96 7.28a3.41 3.41 0 00-2.84 3.94l12.1 69.11a3.52 3.52 0 004.03 2.83z"
          ></path>
          <rect
            width="66"
            height="88"
            x="22"
            y="17.9"
            fill="#6576ff"
            rx="3"
            ry="3"
          ></rect>
          <rect
            width="48"
            height="10"
            x="31"
            y="85.9"
            fill="#fff"
            rx="1.5"
            ry="1.5"
          ></rect>
          <rect
            width="48"
            height="5"
            x="31"
            y="27.9"
            fill="#e3e7fe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="23"
            height="3"
            x="31"
            y="37.9"
            fill="#c4cefe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="20"
            height="3"
            x="59"
            y="37.9"
            fill="#c4cefe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="23"
            height="3"
            x="31"
            y="45.9"
            fill="#c4cefe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="20"
            height="3"
            x="59"
            y="45.9"
            fill="#c4cefe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="48"
            height="3"
            x="31"
            y="52.9"
            fill="#e3e7fe"
            rx="1"
            ry="1"
          ></rect>
          <rect
            width="23"
            height="3"
            x="31"
            y="60.9"
            fill="#c4cefe"
            rx="1"
            ry="1"
          ></rect>
          <path
            fill="#9cabff"
            d="M94.5 113.9a.5.5 0 01-.5-.5v-1.5h-1.5a.5.5 0 010-1H94v-1.5a.5.5 0 011 0v1.5h1.5a.5.5 0 010 1H95v1.5a.5.5 0 01-.5.5zM12.5 82.9a.5.5 0 01-.5-.5v-1.5h-1.5a.5.5 0 010-1H12v-1.5a.5.5 0 011 0v1.5h1.5a.5.5 0 010 1H13v1.5a.5.5 0 01-.5.5zM3 10.9a3 3 0 113-3 3 3 0 01-3 3zm0-5a2 2 0 102 2 2 2 0 00-2-2zM109.5 68.9a4.5 4.5 0 114.5-4.5 4.51 4.51 0 01-4.5 4.5zm0-8a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5z"
          ></path>
          <path
            fill="#2ec98a"
            d="M103.66 4.95A5.66 5.66 0 0099.57.9a47.45 47.45 0 00-18.09 0 5.66 5.66 0 00-4.08 4.06 47.51 47.51 0 000 18.1 5.67 5.67 0 004.08 4.07 47.57 47.57 0 009 .87 47.78 47.78 0 009.06-.87 5.66 5.66 0 004.08-4.09 47.45 47.45 0 00.04-18.09z"
          ></path>
          <path
            fill="#fff"
            d="M96.66 10.71l-1.35 1.47c-1.9 2.06-3.88 4.21-5.77 6.3a1.29 1.29 0 01-1 .42 1.27 1.27 0 01-1-.42c-1.09-1.2-2.19-2.39-3.28-3.56a1.29 1.29 0 011.88-1.76c.78.84 1.57 1.68 2.35 2.54 1.6-1.76 3.25-3.55 4.83-5.27l1.35-1.46a1.29 1.29 0 011.9 1.74z"
          ></path>
        </svg>
      );
    }

    if (type === "Organisations") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <circle cx="24.83" cy="6.55" r="3.06" fill="#e3e7fe"></circle>
          <circle
            cx="83.97"
            cy="28.73"
            r="3.03"
            fill="none"
            stroke="#c4cefe"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <circle cx="83.58" cy="67.84" r="1.84" fill="#e3e7fe"></circle>
          <circle cx="12.04" cy="84.67" r="1.84" fill="#e3e7fe"></circle>
          <path fill="#e3e7fe" d="M3 47.84H9.120000000000001V49.59H3z"></path>
          <path
            fill="#e3e7fe"
            d="M3 47.84H9.120000000000001V49.59H3z"
            transform="rotate(90 6.06 48.72)"
          ></path>
          <circle cx="45.76" cy="64.92" r="19.82" fill="#fff"></circle>
          <circle
            cx="45.76"
            cy="64.92"
            r="18.24"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path
            fill="#f3f5ff"
            stroke="#6576ff"
            strokeLinecap="round"
            d="M37.5 22.5v21.39a23.66 23.66 0 0117 .1V22.5z"
          ></path>
          <path
            fill="#e3e7fe"
            stroke="#6576ff"
            strokeLinecap="round"
            d="M20.5 22.5v23l6.5 6.21a23.73 23.73 0 0110.5-7.82V22.5zM54.5 22.5V44a23.68 23.68 0 0110.32 7.86l6.68-6.37v-23z"
          ></path>
          <rect
            width="68"
            height="8"
            x="12"
            y="14"
            fill="none"
            stroke="#6576ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            rx="2"
            ry="2"
          ></rect>
          <path
            fill="#6576ff"
            d="M52 58v9.62a1.56 1.56 0 01-.74 1.38l-4.72 2.73a1.55 1.55 0 01-1.56 0L40.25 69a1.55 1.55 0 01-.77-1.34v-5.47a1.55 1.55 0 01.77-1.35L45 58.11a1.56 1.56 0 011.39-.11v1.62a1.22 1.22 0 00-1.2 0l-3.67 2.12a1.2 1.2 0 00-.6 1V67a1.23 1.23 0 00.6 1l3.67 2.11a1.17 1.17 0 001.2 0L50 68.08a1.21 1.21 0 00.61-1v-9.87z"
          ></path>
          <path
            fill="#6576ff"
            d="M49.22 56.4l-1.42-.82V65.8a.52.52 0 01-.25.45l-1.55.88a.52.52 0 01-.51 0L44 66.25a.52.52 0 01-.26-.45V64a.51.51 0 01.26-.44l1.53-.89a.52.52 0 01.51 0l.38.22v-1.6l-.2-.12a.88.88 0 00-.86 0l-2.6 1.5a.85.85 0 00-.43.75v3a.85.85 0 00.43.75l2.6 1.5a.83.83 0 00.86 0l2.59-1.5a.86.86 0 00.44-.75V58z"
          ></path>
          <path
            fill="#6576ff"
            d="M53.45 58.85v9.41a1.9 1.9 0 01-1 1.65l-5.79 3.34a1.92 1.92 0 01-1.91 0L39 69.91a1.9 1.9 0 01-1-1.65v-6.69a1.9 1.9 0 011-1.65l5.78-3.34a1.92 1.92 0 011.91 0l1.09.63v-1.63l-.91-.53a2.28 2.28 0 00-2.26 0l-6.85 4a2.25 2.25 0 00-1.13 2v7.91a2.27 2.27 0 001.13 2l6.85 4a2.28 2.28 0 002.26 0l6.84-4a2.27 2.27 0 001.13-2v-9.28z"
          ></path>
        </svg>
      );
    }
  };

  return (
    <PreviewAltCard className="card-full">
      <div className="card-title-group align-start mb-0">
        <div className="card-title">
          <h6 className="subtitle">Total {type} </h6>
        </div>
        <div className="card-tools">
          <TooltipComponent
            iconClass="card-hint"
            icon="help-fill"
            direction="left"
            id={`invest-${type}`}
            text={`Total ${type}`}
          ></TooltipComponent>
        </div>
      </div>
      <div className="card-amount">
        <span className="amount">
          {data.length} <span className="currency currency-usd">{type}</span>
        </span>
      </div>
      <div className="invest-data">
        <div className="invest-data-amount g-2">
          <div className="invest-data-history">
            <div className="title">Ce mois</div>
            <div className="amount">
              {data.length}{" "}
              <span className="currency currency-usd">{type}</span>
            </div>
          </div>
          <div className="invest-data-history">
            <div className="title">Ce weekend</div>
            <div className="amount">
              {data.length}{" "}
              <span className="currency currency-usd">{type}</span>
            </div>
          </div>
        </div>
        <div className="invest-data-ck">{renderSwitch(type)}</div>
      </div>
    </PreviewAltCard>
  );
}
