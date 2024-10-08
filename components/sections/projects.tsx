"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  return ( 
    <section id="projects" className="bg-black flex flex-col justify-center items-center gap-10 p-10" >
        <div className="flex items-center gap-5"> 
          <h2 className="text-white text-4xl font-bold">Projects</h2>
          <a href="https://github.com/enzojgcaceres" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:text-gray-400" />
        </a>
        </div>
        <ParallaxScroll projects={images} />
    </section> 
    );
}

const images = [
{ image: "/Captura de pantalla (5).png", link: "https://portfolio-three-rouge-20.vercel.app/"},  
{ image: "/travel.png", link: "https://www.youtube.com/watch?v=rREa9L_dQ_M"},
{ image: "/4vientos-tiendanube.png", link: "https://sites.google.com/view/somos4vientos/inicio?authuser=0"},
{ image: "/portfolioapp.png", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "/rick.png", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "/smartJuana.png", link: "https://juana-smart.vercel.app/"},
{ image: "/portfolioapp.png", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "/teleraiders.png", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "/mama-app.png", link: "https://mama-app-enzos-projects-a85fc39b.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
{ image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80", link: "https://portfolio-three-rouge-20.vercel.app/"},
];

