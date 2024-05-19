"use client"
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios"

interface FormData {
  [key: string]: string;
}

export default function Login() {
  const {onTokenHandeler} = useAuthContext()
  const [showFirstCard, setShowFirstCard] = useState(true);
  const [data, setData] = useState<FormData>({
    appType:'music',
    name:'kknkn',
    email: "",
    password: "",
  });
   const [token,setToken] = useState<number>();

  const submitLogin = ()=>{
    axios.post('https://academics.newtonschool.co/api/v1/user/login',data,{ headers:{
      'projectid': 'ue7vjvd5u6er'
  }
    }).then((responce)=>{
      console.log(responce.data.data)
      onTokenHandeler(responce.data.token)
      
      // navigate("/")
    }).catch((error)=>{
      console.log(error);
    })
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onsubmitHandlerLogin = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    submitLogin();
  }
  const onsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post("https://academics.newtonschool.co/api/v1/user/signup",data,{
      headers:{
        'projectid': 'ue7vjvd5u6er'
    }
    }).then((response)=>{
      console.log(response);
      //  navigate("/login")
    }).catch((error)=>{
      console.log(error);
      if(error.response  && error.response.data.message){
        
      } else{
        console.log("error")
      }
    })
    // Add form submission logic here
  };

  const toggleCard = () => {
    setShowFirstCard(!showFirstCard);
  };

  return (
    <>
      {showFirstCard ? (
        <Card className="max-w-[1600px]">
          <CardHeader>
            <div>
              <p className="font-bold mr-24 text-2xl">Signup</p>
              <p>continue with OpenRouter</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-8">
            <div>
              <Button type="button" className="w-72" startContent={<FaGoogle color="red" />}>
                Continue with Google
              </Button>
              <br />
              <Button type="button" className="w-72 my-3" startContent={<IoLogoOctocat color="orange" />}>
                Continue with MetaMask
              </Button>
            </div>
            <div className="border-b border-gray-500 my-6 text-center font-bold">
              or
            </div>
          <form onSubmit={onsubmitHandlerLogin}>  <Input
              type="email"
              value={data.email}
              name="email"
              onChange={onChangeHandler}
              className="w-72 my-2"
              label="Email"
            />
            <Button type="submit" color="success" className="w-72">Continue</Button></form>
            <p>
              No account{" "}
              <button onClick={toggleCard} className="text-success-300 my-3">
                {" "}
                Sign in
              </button>
            </p>
          </CardBody>
          <Divider />
        </Card>
      ) : (
        <Card className="max-w-[1600px]">
          <CardHeader>
            <div>
              <p className="font-bold text-2xl">Create your account</p>
              <p className="mr-8">to continue to OpenRouter</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <div>
              <Button type="button" className="w-72" startContent={<FaGoogle color="red" />}>
                Continue with Google
              </Button>
              <br />
              <Button type="button" className="w-72 my-1" startContent={<IoLogoOctocat color="orange" />}>
                Continue with MetaMask
              </Button>
            </div>
            <div className="border-b border-gray-500 my-4 text-center font-bold">
              or
            </div>
            <form onSubmit={onsubmitHandler}>
              <Input
                name="email"
                value={data.email}
                type="email"
                onChange={onChangeHandler}
                className="w-72 my-2"
                label="Email"
              />
              <Input
                name="password"
                value={data.password}
                type="password"
                onChange={onChangeHandler}
                className="w-72 mb-1"
                label="Password"
              />
              <Button type="submit" color="success" className="w-72">Continue</Button>
            </form>
            <p>
              No account{" "}
              <button onClick={toggleCard} className="text-success-300 my-3">
                {" "}
                Sign in
              </button>
            </p>
          </CardBody>
          <Divider />
        </Card>
      )}
    </>
  );
}
