import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between absolute bottom-0 w-full p-1 text-sm text-dark dark:text-light text-opacity-50 dark:text-opacity-50">
      <div>
        Powered by{" "}
        <Link
          className="text-cta text-opacity-70 dark:text-opacity-70 hover:underline"
          href="https://nextjs.org/"
          target="_blank"
        >
          NextJS
        </Link>{" "}
        using TypeScript
      </div>
      <div>Quentin Desbrousses - 2023 ©</div>
    </div>
  );
};

export default Footer;
