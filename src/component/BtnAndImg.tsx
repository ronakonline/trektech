"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const CommonBtn = () => {
  const router = useRouter();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="contactBtn rounded-pill"
        onClick={() => router.push("/contact")}
      >
        Start your Journey
      </button>
    </div>
  );
};

export const Images = ({ img }: any) => {
  return (
    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center order-1 order-md-2">
      <Image src={img} alt="Security" className="img-fluid" />
    </div>
  );
};
