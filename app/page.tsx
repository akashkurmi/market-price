"use client";
import Link from "@/node_modules/next/link";
import { createContext, useContext } from "react";
import Property from "@/properties.json";
import Context from "./Context/Context";

export default function Home() {
  return (
    <Context>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Link href="/Pages/Homepage">home</Link>
        <Link href="/Pages/About">about</Link>
        {/* <Home /> */}
      </div>
    </Context>
  );
}
