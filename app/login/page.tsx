'use client'
import {useState} from "react";
import {Input} from "@nextui-org/react";
 import {Card, CardHeader, CardBody, Divider, Link, Image,Button} from "@nextui-org/react";
 import { FaGoogle } from "react-icons/fa";
 import { IoLogoOctocat } from "react-icons/io";
export default function Login() {
    const [showFirstCard, setShowFirstCard] = useState(true);

  const toggleCard = () => {
    setShowFirstCard(!showFirstCard);
  };
  return (
	<>{showFirstCard ? (<Card className="max-w-[1600px]">
	<CardHeader>
	
	  <div>
		<p className=" font-bold mr-24 text-2xl ">Signup</p>
		<p>continue with OpenRouter</p>
		
	  </div>
	</CardHeader>
	<Divider/>
	
	<CardBody className="p-8">
	
	<div >
	<Button className="w-72 " startContent={<FaGoogle color="red"/>} >Continue with Google  </Button> <br/>
	<Button className="w-72 my-3" startContent={<IoLogoOctocat color="orange"/>} >
	Continue with MetaMask 
	</Button> </div>
	<div className="border-b border-gray-500 my-6 text-center font-bold" >or</div>
	<Input type="email" className="w-72 my-2" label="Email"/>
	<Button color="success">Continue</Button>
	<p>No account <button onClick={toggleCard} className="text-success-300 my-3  "> sign up</button></p>
	</CardBody>
	<Divider/>
  </Card>):(<Card className="max-w-[1600px]">
      <CardHeader>
      
        <div>
          <p className=" font-bold text-2xl ">Create your account</p>
          <p className="mr-8">to continue to OpenRouter</p>
		  
        </div>
      </CardHeader>
      <Divider/>
	  
      <CardBody className="p-6">
      
	  <div >
	  <Button className="w-72 " startContent={<FaGoogle color="red"/>} >Continue with Google  </Button> <br/>
      <Button className="w-72 my-1" startContent={<IoLogoOctocat color="orange"/>} >
	  Continue with MetaMask 
      </Button> </div>
      <div className="border-b border-gray-500 my-4 text-center font-bold" >or</div>
	  <Input type="email" className="w-72 my-2" label="Email"/>
	  <Input type="password" className="w-72 mb-1" label="Password"/>
	  <Button color="success">Continue</Button>
	  <p>No account <button onClick={toggleCard} className="text-success-300 my-3  "> sign in</button></p>
      </CardBody>
      <Divider/>
    </Card>
	)}
    
	
	</>
  );
}
