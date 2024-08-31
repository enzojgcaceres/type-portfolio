"use client";
import { Mail } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button"
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md gap-5">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
       Interested in working together? {" "}
      </h1>
      <Link href={"mailto: enzojgcaceres@gmail.com"} className="z-10">
        <Button className="z-10" size={"lg"}>
            Send me an e-mail <Mail className="size-5 ml-2" />
        </Button>
      </Link>
    </section>
  );
}
