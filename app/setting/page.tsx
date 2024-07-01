'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import {Switch} from "@nextui-org/react";

function Setting() {

  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <div className='text-center'>
      <div className='text-2xl my-6 font-semibold'>Setting</div>
      <p className='mb-14'>Manage your accounts and preferences</p>
     
     <div> <div className='text-2xl font-semibold my-3'>Credentials</div>
      <p className='mb-4'>Manage your login credentials and security settings</p>
     <Button className='w-1/2 bg-blue-500 mb-14'>Manage Account</Button>
      <p className='text-2xl font-semibold '>Notifications</p>
 
<div></div>
  
    <div className="flex flex-col gap-2 justify-center text-center items-center">
     <div className='flex gap-3'> <p className='my-3'>Send me emails</p><Switch size="sm" isSelected={isSelected} onValueChange={setIsSelected}>
      </Switch> </div> 
      <p className="text-small text-default-500"> {isSelected ?  <div className='flex h-5 items-center gap-3 my-6'>  <div>When credits are below : </div>  <Input className='w-20 '
          type="number"
          
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        /></div> : ""}</p>
    </div>
   


    </div>
    
    <div className='my-14'>
    <div className='text-2xl font-semibold my-3'>Analytics</div>
      <p className=' ml-3'>Allow logging of inputs & outputs and get a 1% discount on all LLMs</p>
    </div>
    <div className='mx-16' >
    <div className='text-2xl font-semibold my-3'>Default Model</div>
    <Input type='text' placeholder='Auto (best for prompt)'></Input>
    </div>

    <div className='text-sm'>Depending on their size, subject, and complexity, your prompts will be sent to Mistral Large, Claude 3 Sonnet or GPT-4o. To see which model was used, visit Activity.

A major redesign of this router is coming soon. Stay tuned on Discord for updates.</div>
    </div>

  )
}

export default Setting
