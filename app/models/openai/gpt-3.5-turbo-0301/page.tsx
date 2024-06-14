"use client";

import ClipboardJS from "clipboard";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import {ScrollShadow} from "@nextui-org/react";
import { TbCopy } from "react-icons/tb";
import { IoChatbox } from "react-icons/io5";
function Gpt() {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    var clipboard = new ClipboardJS(".btn");

    return () => {
      clipboard.destroy();
    };
  }, []);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset the style after 2 seconds
  };

  return (
    <div className="lg:mx-44 mt-10">
      <div className="flex flex-col lg:flex-row justify-between ">
        {" "}
        <h1 className="font-semibold text-2xl">
          OpenAI: GPT-3.5 Turbo (older v0301){" "}
        </h1>
        <Button className="w-32 h-10  bg-blue-600 text-white">Chat<IoChatbox className="text-lg"/></Button>
      </div>
      <div className="flex gap-2">
        <p>openai/gpt-3.5-turbo-0301</p>{" "}
        <button  onClick={handleClick}
          className="btn ${isClicked ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black' cursor-pointer border-1 border-gray-300 p-1 rounded-md flex items-center"
          data-clipboard-text="openai/gpt-3.5-turbo-0301

"
        >
          <TbCopy />
        </button>
      </div>
      <p className="text-xs">
        Updated May 28 4,095 context | $1/M input tkns | $2/M output tkns
      </p>
      <p className="text-xl mt-10">
        GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate
        natural language or code, and is optimized for chat and traditional
        completion tasks. Updated by OpenAI to point to the latest version of
        GPT-3.5. Training data up to Sep 2021.
      </p>
      <div className="mt-20 mb-10 border-b-1 border-gray-400">
  
  <div className="overflow-x-auto sm:hidden">
  <ScrollShadow orientation="horizontal" className="max-w-[400px]">
  <div className="w-[1600px] mt-20 mb-10 flex gap-10 border-b-1 border-gray-400 overflow-x-auto">
    <button className="hover:bg-gray-200 text-xl  border-b-2 border-black">API</button>
    <button className="hover:bg-gray-200 text-xl  rounded">Providers</button>
    <button className="hover:bg-gray-200 text-xl  rounded">Apps</button>
    <button className="hover:bg-gray-200 text-xl  rounded">Activity</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Parameters</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Uptime</button>
  </div>
</ScrollShadow>
  </div>

  
  <div className="hidden sm:flex gap-10">
    <button className="hover:bg-gray-200 text-xl py-1 px-6 border-b-2 border-black">API</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Providers</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Apps</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Activity</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Parameters</button>
    <button className="hover:bg-gray-200 text-xl py-1 px-4 rounded">Uptime</button>
  </div>
</div>


    </div>
  );
}

export default Gpt;
