// "use client";
import React from "react";
import User from "./User";
import { fetchAPI } from "@/api/fetchApi";

const geUsers = async () => {
  const res = await fetchAPI("users");
  return res;
};
const UserContainer = async () => {
  const data = await geUsers();
  return (
    <div className='max-w-screen-md mx-auto'>
      <h1 className="text-3xl font-bold">Users</h1>
      {data?.results.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserContainer;
