"use client";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Divider, Button } from "@nextui-org/react";
import Navbar from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "./modal";
interface FormData {
  [key: string]: string;
}

export default function Login() {
  const { onTokenHandler } = useAuthContext();
  const [showFirstCard, setShowFirstCard] = useState(true);
  const [data, setData] = useState<FormData>({
    appType: "music",
    name: "kknkn",
    email: "",
    password: "",
  });
  const [token, setToken] = useState<number>();
  const router = useRouter();
  
  const submitLogin = () => {
    axios
      .post("https://academics.newtonschool.co/api/v1/user/login", data, {
        headers: {
          projectid: "ue7vjvd5u6er",
        },
      })
      .then((responce) => {
        console.log(responce.data.data);
        onTokenHandler(responce.data.token);
        router.push("/docs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onsubmitHandlerLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin();
  };
  
  const onsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("https://academics.newtonschool.co/api/v1/user/signup", data, {
        headers: {
          projectid: "ue7vjvd5u6er",
        },
      })
      .then((response) => {
        console.log(response);
        //  navigate("/login")
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data.message) {
        } else {
          console.log("error");
        }
      });
    // Add form submission logic here
  };

  const toggleCard = () => {
    setShowFirstCard(!showFirstCard);
  };

  return (
    <>
    {showFirstCard ? (
  <div className="mx-auto mt-10 max-w-lg p-4">
    <div className="text-center">
      <p className="font-bold text-2xl lg:text-3xl">Login</p>
      <p className="mt-2">Continue with OpenRouter</p>
    </div>
    <Divider />
    <div className="p-4">
      <div>
        <Button
          type="button"
          startContent={<FaGoogle color="red" />}
          className="w-full my-2"
        >
          Continue with Google
        </Button>
        <Button
          type="button"
          className="w-full my-2"
          startContent={<IoLogoOctocat color="orange" />}
        >
          Continue with MetaMask
        </Button>
      </div>
      <div className="border-b border-gray-500 my-6 text-center font-bold">
        or
      </div>
      <form onSubmit={onsubmitHandlerLogin}>
        <Input
          type="email"
          value={data.email}
          name="email"
          onChange={onChangeHandler}
          className="w-full my-2"
          label="Email"
        />
        <Button type="submit" color="success" className="w-full my-2">
          Continue
        </Button>
      </form>
      <p className="text-center mt-4">
        No account?{' '}
        <button  onClick={toggleCard} className="text-success-300">
          Sign up
        </button>
      </p>
    </div>
    <Divider />
  </div>
) : (
  <div className="mx-auto mt-10 max-w-lg p-4">
    <div className="text-center">
      <p className="font-bold text-2xl lg:text-3xl">Create your account</p>
      <p className="mt-2">to continue to OpenRouter</p>
    </div>
    <Divider />
    <div className="p-4">
      <div>
        <Button
          type="button"
          startContent={<FaGoogle color="red" />}
          className="w-full my-2"
        >
          Continue with Google
        </Button>
        <Button
          type="button"
          className="w-full my-2"
          startContent={<IoLogoOctocat color="orange" />}
        >
          Continue with MetaMask
        </Button>
      </div>
      <div className="border-b border-gray-500 my-6 text-center font-bold">
        or
      </div>
      <form onSubmit={onsubmitHandler}>
        <Input
          name="email"
          value={data.email}
          type="email"
          onChange={onChangeHandler}
          className="w-full my-2"
          label="Email"
        />
        <Input
          name="password"
          value={data.password}
          type="password"
          onChange={onChangeHandler}
          className="w-full my-2"
          label="Password"
        />
        <Button type="submit" color="success" className="w-full my-2">
          Continue
        </Button>
      </form>
      <p className="text-center mt-4">
        Have an account?{' '}
        <button onClick={toggleCard} className="text-success-300">
          Log in
        </button>
      </p>
    </div>
    <Divider />
  </div>
)}

  </>
  
  );
}
