import React from "react";
import Link from "next/link";
// import WalletConnector from "./walletConnector";

import dynamic from "next/dynamic";

// 动态导入组件，并指定其为客户端组件
const WalletConnector = dynamic(() => import("./walletConnector"), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          DeLance
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/projects" className="btn">
          Projects
        </Link>
        <Link href="/dashboard" className="btn">
          Dashboard
        </Link>
        <Link href="/about" className="btn">
          About Us
        </Link>
        <WalletConnector />
      </div>
    </div>
  );
};

export default Navbar;
