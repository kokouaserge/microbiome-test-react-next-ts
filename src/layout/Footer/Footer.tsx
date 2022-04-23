import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="nk-footer bg-white">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            {" "}
            &copy; 2022 Test Microbiome React Next
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li className="nav-item">
                <Link href={`/`}>
                  <a
                    className="nav-link
                    "
                  >
                    {" "}
                    Terms
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`/`}>
                  <a
                    className="nav-link
                    "
                  >
                    {" "}
                    Privacy
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`/`}>
                  <a
                    className="nav-link
                    "
                  >
                    {" "}
                    Help
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
