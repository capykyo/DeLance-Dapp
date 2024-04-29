import Link from "next/link";
// import styles from "./Footer.module.css"; // 引入CSS模块

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
      <div className="">
        {/* Social media links can be added here */}
        <a
          href="https://twitter.com/delance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/company/delance"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="">
        © {new Date().getFullYear()} DeLance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
