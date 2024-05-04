
import React from "react";
 import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export default function Login() {
 
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
      
        <div className="flex flex-col">
          <p className="text-md font-bold ">Signup</p>
          
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
		<label >email</label>
        <input type="mail" />
      </CardBody>
      <Divider/>
   
    </Card>
  );
}
