"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { getDefaultLoginRedirect } from "@/data/getUserId";
import React from "react";

const FormsPage = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="m-4">
        <Button
          className="h-56 w-44 bg-gray-50 hover:bg-gray-100"
          onClick={async () => {
            const getId = await getDefaultLoginRedirect();
            router.push(`${getId}/forms/new_form`);
          }}
        >
          <PlusCircle className="h-14 w-14 text-gray-700" />
        </Button>
      </div>
    </div>
  );
};

export default FormsPage;
