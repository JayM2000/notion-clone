"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Headings from "./_component/headings";
import Heros from "./_component/heros";
import Footer from "./_component/footer";
// import RevealImage from "./_component/RevealImage";

const Marketing = () => {
  return (
    // <RevealImage revealSize={100}>
    <div className="min-h-full flex flex-col gap-y-8">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Headings />
        <Heros />
      </div>

      <Footer />
    </div>
    // </RevealImage>
  );
};

export default Marketing;
