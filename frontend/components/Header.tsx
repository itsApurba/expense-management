"use client";
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/app/actions";

const Header = () => {
  return (
    <div className='flex items-center max-w-screen-md p-8 justify-between m-auto'>
      <div className='rounded-full bg-green-600 p-2'>
        <h2 className='text-xl font-semibold tracking-tight transition-colors first:mt-0'>EM</h2>
      </div>
      <Button
        onClick={async () => {
          console.log("logging out");
          logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Header;
