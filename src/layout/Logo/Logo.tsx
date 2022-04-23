import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <a className="logo-link">
        <Image
          src={
            "https://www.abolis.fr/user/themes/abolis/images/abolis-logo3.svg"
          }
          alt="logo"
          width={220}
          height={50}
        />
      </a>
    </Link>
  );
};

export default Logo;
