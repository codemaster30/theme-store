/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import usePostMutate from "@/Hooks/shared/usePostMutate";
import { useForm } from "react-hook-form";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useContextData } from "@/providers/ContextProvider";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const router = useRouter();

  const { userData, setUserData } = useContextData();
  useEffect(() => {
    // console.log(userData);
    const isUser = userData?.id;
    if (isUser) {
      router.push("/");
    }
  }, [userData, router]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState(null);

  const onError = (err) => {
    console.log(err);
    setError(err);
  };
  const onSuccess = (data) => {
    console.log(data.data.data.accessToken);
    try {
      const decoded = jwtDecode(data.data.data.accessToken);
      console.log(decoded);
      setUserData(decoded);
      Cookies.set("token", data.data.data.accessToken);
      // return (window.location.href = "/");
      router.push("/");
    } catch (error) {
      console.error("Error decoding token:", error);
      setError("An error occurred while login");
    }

    Cookies.set("token", data.data.data.accessToken);
  };

  const { mutate, isPending } = usePostMutate("users", onSuccess, onError);

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      mutate(data);
      setError(null);
    } catch (error) {
      // console.error("Error:", error);
      // Check if the error object has a response property and handle it accordingly
      // setLoginError(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  return (
    <div className="w-full pt-32 css-selector p-2">
      <div className="max-w-[500px] mx-auto mb-6 p-10 rounded-2xl bg-white">
        <div>
          <img src="/log.png" className="h-16" alt="Logo" />
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-2">Sign up</h3>
          <p className="text-sm text-[#616161] font-medium">
            Continue to Shopify account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-9">
            <h5>Name</h5>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className={`border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}

            <h5>Email</h5>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className={`border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {error && (
              <span className="text-red-500">Email is already exist</span>
            )}
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <h5>Password</h5>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className={`border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}

            <button
              type="submit"
              className="w-full h-11 bg-primaryColor hover:bg-opacity-85 duration-150 font-semibold text-white rounded-lg"
              disabled={isSubmitting || isPending}
            >
              {isSubmitting || isPending ? (
                <Spinner size="md" color="white" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        <div className="flex h-5 items-center space-x-2 text-small mt-12">
          <Divider orientation="horizontal" className="w-[43%]" />
          <div>or</div>
          <Divider orientation="horizontal" className="w-[43%]" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 h-12">
          <div className="bg-[#ebebeb] rounded-lg flex justify-center items-center">
            <img src="/applelogo.svg" className="h-6 hover:h-5" alt="Apple" />
          </div>
          <div className="bg-[#ebebeb] rounded-lg flex justify-center items-center">
            <img
              src="/facebooklogo (1).svg"
              className="h-6 hover:h-5"
              alt="Facebook"
            />
          </div>
          <div className="bg-[#ebebeb] rounded-lg flex justify-center items-center">
            <img src="/googlelogo.svg" className="h-6 hover:h-5" alt="Google" />
          </div>
        </div>

        <div>
          <p className="text-sm text-[#616161] font-medium mt-12 flex items-center transition duration-1000">
            Already have an account?
            <Link
              href={"/login"}
              className="text-blue-500 hover:text-blue-400 hover:mr-3 mr-1 transition duration-1000 ml-2"
            >
              Log In
            </Link>
            <FaArrowRightLong className="text-blue-500 transition duration-1000" />
          </p>
          <div className="flex gap-2">
            <p className="text-sm text-[#616161] mt-12 hover:underline">Help</p>
            <p className="text-sm text-[#616161] mt-12 hover:underline">
              Privacy
            </p>
            <p className="text-sm text-[#616161] mt-12 hover:underline">
              Terms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
