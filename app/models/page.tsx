'use client'
import {Input,Button} from "@nextui-org/react"
import { SearchIcon } from "./SearchIcon"
import { useState,useEffect } from "react"

interface Model {
    Tittle: string;
    Discr: string;
  }
  const Model = () => {
    // Initialize state with the correct type
    const [modelData, setModelData] = useState<Model[] | undefined>(undefined);
  
    useEffect(() => {
      // Your array of data
      const arr: Model[] = [
        { Tittle: "StarCoder2 15B Instruct", Discr: "StarCoder2 15B Instruct excels in coding-related ." },
        { Tittle: "ChatGpt-4", Discr: "StarCoder2 15B Instruct excels in coding-related tasks, primarily in Python. It is the ." },
        { Tittle: "StarCoder2 15B", Discr: "StarCoder2 15B Instruct " }
      ];
      
      // Set the state with the data array
      setModelData(arr);
    }, []);

  return (
    <div className="mx-32">
       <div className="flex justify-between"> <h1 className="font-bold text-3xl mb-5">Models</h1>
       <Button>Newest</Button>
       </div>
         <Input
         
          classNames={{
            base: "lg:max-w-96 sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Filter Models"
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      <div>
      {modelData?.map((model, index) => (
        <div className="my-20" key={index}>
            <a className="text-black-500 text-xl font-semibold hover:underline " href="#"> {model.Tittle}</a>
         
          <p className="mt-2">{model.Discr}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Model
