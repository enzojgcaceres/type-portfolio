import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi! I'm Enzo, a Full Stack Developer with a solid foundation in JavaScript, Node.js, TypeScript, Express, PostgreSQL, React, Redux, and Next.js. My journey in tech is driven by a passion for creating efficient and innovative solutions. I also specialize in No-code tools like Notion and have a background in digital marketing, which gives me a broader understanding of tech-driven projects. My diverse experiences, from professional music to technical roles in a chromatographic lab, give me a unique, adaptable perspective that I bring to every challenge. I'm passionate about crafting impactful tech solutions.`;


export default function About() {
  return (
    <section id="projects" className="bg-black flex flex-col justify-center items-center gap-10 p-10" > 
        <h2 className="text-white text-4xl">About me</h2>
        <TextGenerateEffect words={words} />;
    </section>
  )
}
