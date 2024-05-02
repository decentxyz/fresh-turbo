"use client";

import { ReactNode } from "react";
import { useAccount } from "wagmi";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const { address } = useAccount();
  console.log("this does not work", {address});

  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
