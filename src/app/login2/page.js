"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import OvalAtas from "../assets/svgs/OvalAtas.svg";
import OvalBawah from "../assets/svgs/OvalBawah.svg";
import BgForm from "../assets/svgs/BgFormStaf.svg";
import TelkomSchool from "../assets/svgs/TeksTelkomSchool.svg";
import BgTransparan from "../assets/images/SmkTelkomTransparan.png";

function page() {
  const { login } = useAuth();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = React.useState("");
  const handleChenge = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="bg-[#282f37]">
        <Image
          src={OvalAtas}
          alt="login staf"
          style={{ marginLeft: "500px" }}
        />

        <Image
          src={OvalBawah}
          alt="login staf"
          style={{ marginTop: "-40px" }}
        />

        <div className="absolute">
          <Image
            src={BgForm}
            alt="BgForm"
            style={{ marginTop: "-730px", width: "707px", marginLeft: "829px" }}
          />

          <Image
            src={TelkomSchool}
            alt="TelkomSchool"
            style={{ marginLeft: "1100px", marginTop: "-590px", width:"18%"}}
          />
          <form onSubmit={handleSubmit}>
            
            <div className="ml-[1070px] mt-16">
            <input
              name="username"
              onChange={handleChenge}
              type="text"
              placeholder="Nama Pengguna :"
              className=" px-8 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '20px' }}
            />
            <p/>
            <input
              type="password"
              name="password"
              onChange={handleChenge}
              placeholder="Kata Sandi :"
              className=" px-8 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '30px' }}
            />
            <p/>
            <button
            className="poppins-medium py-2 px-[157px] text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none"
          >
            LOGIN
          </button>
        
            </div>
          </form>
        </div>
        <Image
        src={BgTransparan}
        alt="Background Transparan"
        className="z-40"
        style={{ width: '900px', marginTop: '-821px' }}
      />
      </div>
    </>
  );
}

export default page;
