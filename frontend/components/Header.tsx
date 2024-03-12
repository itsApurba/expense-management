"use client";
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/app/actions";
import Link from "next/link";

const Header = () => {
  return (
    <div className='p-4  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-2 border-gray-200 border-opacity-10'>
      <div className='m-auto flex items-center  max-w-screen-md justify-between'>
        <Link href='/dashboard'>
          <div className='rounded-full bg-green-600 p-2'>
            <h2 className='text-xl font-semibold tracking-tight transition-colors first:mt-0'>EM</h2>
          </div>
        </Link>
        <div>
          <div className="flex gap-4">
            <Button variant={"link"} asChild>
              <Link href='/users'>Users</Link>
            </Button>
            <Button
              onClick={async () => {
                console.log("logging out");
                logout();
              }}
              variant={"destructive"}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
