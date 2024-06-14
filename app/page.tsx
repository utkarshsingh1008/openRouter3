'use client'
import { Button } from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/react";
import { table } from "console";
import { useEffect, useState } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
export default function Home() {
	const [data, setData] = useState<string[] | undefined>();  // State can be an array of strings or undefined
	const arr: string[] = ["A", "B", "C"];
    const arrName: string[] = ["Ram", "Mohan", "Shyam"];
	const arrLang: string[] = ["c++", "Java", "python"];
	const handleName = ()=>{
		setData(arrName)
	   }
    
	const handleData = ()=>{
     setData(arr)
	}
    
	const handleLang = ()=>{
		setData(arrLang)
	   }
	useEffect(()=>{
		handleLang();
	},[])
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			
			<h4 className="text-3xl font-bold text-gray-800">
        A unified interface for LLMs
    </h4>
		    <p className="text-1xl font-semibold text-gray-500">Find the best models & prices for your prompts</p>
			<div className="flex gap-4"><Button className="w-32 h-12  bg-blue-600 text-white ">
				Chat
			</Button>
			<Button className="w-32 h-12 text-blue-600">
				Explore
			</Button></div>
			<Button className="mt-32 ">TRENDING MODELS..</Button>
			<div className="flex flex-col sm:flex-row gap-6 lg:w-4/6">
				<div>  <Card>
      <CardBody className=" ">
		<a className="text-black-500 font-semibold hover:underline" href="#">Phi-3 Medium Instruct</a>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card></div>
				<div > <Card>
      <CardBody>
	  <a className="text-black-500 font-semibold hover:underline" href="#">Hermes 2 Vision 7B</a>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card></div>
				<div> <Card>
      <CardBody>
	  <a className="text-black-500 font-semibold hover:underline" href="#">Neural Chat 7B v3.1</a>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card></div>
	
			</div>
			<Card className="mt-32 font-light">
				<div className="flex flex-col sm:flex-row gap-1 bg-gray-200 lg:gap-48">
					<Button onClick={handleName}  className="w-64 mx-4 lg:w-32">Today</Button>
			  	<Button onClick={handleData} className="w-64 mx-4 lg:w-32">This Week </Button>
				<Button onClick={handleLang}  className="w-64 mx-4 lg:w-32"> This Month</Button></div>
				<div className="flex  m-8">
					<p className="ml-5 mr-10">1</p>
					<div className=" mr-10 text-2xl"><RiEmotionSadLine  /></div>
					<a className="text-black-500 font-semibold hover:underline" href="#">{data && (
        <ol>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ol>
      )}</a>

				</div>
				<div className="flex m-8">
					<p className="ml-5 mr-10">2</p>
					<div className=" mr-10 text-2xl"><RiEmotionSadLine  /></div>
					<a className="text-black-500 font-semibold hover:underline" href="#">Neural Chat 7B v3.1</a>
				
				</div>
				
			</Card>
		</section>

	);
}
