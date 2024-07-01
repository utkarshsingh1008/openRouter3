'use client'
import { Button } from "@nextui-org/button"
import React from "react";
import {Pagination} from "@nextui-org/react";

function Keys() {
  return (
    <div>
       <h1 className="text-3xl font-semibold">Api Keys</h1>
       <p className="my-5">Manage your keys or create new ones </p>
       <Button className="w-full bg-blue-500 ">Create Key</Button>
       <Pagination className="my-5 text-center ml-16 bg" isCompact showControls total={1} initialPage={1} />
    </div>
  )
}

export default Keys



