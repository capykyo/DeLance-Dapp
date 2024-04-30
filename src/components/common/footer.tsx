import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DeLance. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/delance"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company/delance"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
