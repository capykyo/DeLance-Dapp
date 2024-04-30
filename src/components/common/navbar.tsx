import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// 动态导入 WalletConnector 组件，并指定其为客户端组件
const WalletConnector = dynamic(() => import("./walletConnector"), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <Link href="/" passHref>
          <Image
            src="/images/icon/Delance.svg"
            alt="DeLance logo"
            width={140}
            height={50}
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <WalletConnector />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            htmlFor="dropdown-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-end"
            id="dropdown-menu"
          >
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <WalletConnector />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
