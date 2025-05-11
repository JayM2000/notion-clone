"use client";

import React from "react";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
// import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const UserItem = () => {
  const { user } = useUser();
  const getUserLength = user?.fullName ? user?.fullName?.length : 0;

  return (
    <div style={{ background: 0 && "green" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            role="button"
            className="flex items-center text-sm p-3 w-full hover:shadow-lg"
          >
            <div className="gap-x-2 flex items-center flex-shrink w-[90%]">
              <Avatar className="h-7 w-7 flex items-center justify-center">
                <AvatarImage src={user?.imageUrl} className="rounded-md" />
              </Avatar>
              <div className="flex">
                <span className=" flex-shrink text-start font-[600] line-clamp-1">
                  {user?.fullName}&apos;s Jotion
                </span>

                <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 " />
              </div>
            </div>
            {/* <div className="flex justify-start flex-1">
              <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 " />
            </div> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={` ${getUserLength < 40 ? "w-80" : "flex-1"}`}
          align="start"
          alignOffset={11}
          forceMount
        >
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-xs font-[500] leading-none text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>

            <div className="flex items-center gap-x-2 ">
              <div className="rounded-md bg-secondary p-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.imageUrl} />
                </Avatar>
              </div>
              <div className="space-y-1 ">
                <p className="text-sm line-clamp-1">
                  {user?.fullName}&apos;s Jotion
                </p>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            className="w-full cursor-pointer text-muted-foreground"
          >
            <SignOutButton>Log out</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserItem;
