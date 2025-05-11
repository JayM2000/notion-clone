"use client";

import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const Documents = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.createFunc);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    console.log(promise, "checking response data 1123");

    toast.promise(promise, {
      loading: "Creating a new Note",
      success: (data) => {
        return `new note created`;
      },
      error: (err) => {
        return `failed to create a new note.`;
      },
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="dark:hidden w-1/3"
        alt="image"
        src="/empty.png"
        height={300}
        width={300}
      />
      <Image
        className="hidden dark:block w-1/3"
        alt="image"
        src="/empty-dark.png"
        height={300}
        width={300}
      />
      <h2 className="text-lg font-[600]">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default Documents;
