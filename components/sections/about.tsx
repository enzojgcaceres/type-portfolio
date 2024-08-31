import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi! I'm Enzo, a Full Stack Developer with a solid foundation in JavaScript, Node.js, TypeScript, Express, PostgreSQL, React, Redux, and Next.js. My journey in tech is driven by a passion for creating efficient and innovative solutions. I also specialize in No-code tools like Notion and have a background in digital marketing, which gives me a broader understanding of tech-driven projects. My diverse experiences, from professional music to technical roles in a chromatographic lab, give me a unique, adaptable perspective that I bring to every challenge. I'm passionate about crafting impactful tech solutions.`;


export default function About() {
  return (
    <section id="about" className="bg-black flex flex-col justify-center items-center gap-10 px-10 md:px-40" > 
        <h2 className="text-white text-4xl font-bold">About me</h2>
        <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words={words} />;
    </div>
    </section>
  )
}
