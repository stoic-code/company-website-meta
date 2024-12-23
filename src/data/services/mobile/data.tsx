import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiExpress, SiFlutter, SiKubernetes } from "react-icons/si";
import {
  FaAws,
  FaSass,
  FaJava,
  FaDocker,
  FaSketch,
  FaCloudflare,
} from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { GrMysql, GrSwift } from "react-icons/gr";

export const technologies = [
  {
    name: "MongoDB",
    emoji: <BiLogoMongodb />,
    color: "text-green-500",
  },
  {
    name: "Flutter",
    emoji: <SiFlutter />,
    color: "text-blue-400",
  },
  {
    name: "Express.js",
    emoji: <SiExpress />,
    desc: "A popular Node.js web framework that simplifies server-side development and enables building robust APIs and web applications",
  },
  {
    name: "React Native",
    emoji: <BiLogoReact />,
    color: "text-blue-400",
  },
  {
    name: "Git",
    emoji: <BsGit />,
    color: "text-orange-500",
  },
  {
    name: "JavaScript",
    emoji: <BiLogoJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    emoji: <BiLogoTypescript />,
    color: "text-blue-500",
  },
  {
    name: "MySQL",
    emoji: <GrMysql />,
    color: "text-blue-500",
  },
  {
    name: "AWS",
    emoji: <FaAws />,
    color: "text-orange-500",
  },

  {
    name: "SaaS",
    emoji: <FaSass />,
    color: "text-pink-400",
  },

  {
    name: "Java",
    emoji: <FaJava />,
  },
  {
    name: "Swift",
    emoji: <GrSwift />,
    color: "text-pink-500",
  },
  {
    name: "C++",
    emoji: <TbBrandCpp />,
  },
  {
    name: "Docker",
    emoji: <FaDocker />,
    color: "text-blue-400",
  },
  {
    name: "Kubernetes",
    emoji: <SiKubernetes />,
  },
  {
    name: "Cloudflare",
    emoji: <FaCloudflare />,
    color: "text-orange-500",
  },
  {
    name: "Sketch",
    emoji: <FaSketch />,
  },
  // Add more technologies here as needed
];
