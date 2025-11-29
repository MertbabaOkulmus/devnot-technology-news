"use client";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import ThemeToggler from "@/components/common/ThemeToggler";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {


    return <>
        {children}
        <ScrollToTop />
        <ThemeToggler />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
