import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiDotnet, SiExpress, SiFlutter, SiKubernetes } from "react-icons/si";
import {
  FaNode,
  FaLinux,
  FaAws,
  FaJava,
  FaPython,
  FaDocker,
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
    name: "Express.js",
    emoji: <SiExpress />,
    desc: "A popular Node.js web framework that simplifies server-side development and enables building robust APIs and web applications",
  },
  {
    name: "Node.js",
    emoji: <FaNode />,
    color: "text-green-500",
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
    name: "Linux",
    emoji: <FaLinux />,
  },
  {
    name: "MySQL",
    emoji: <GrMysql />,
    color: "text-blue-500",
  },
  {
    name: "Flutter",
    emoji: <SiFlutter />,
    color: "text-blue-400",
  },
  {
    name: "AWS",
    emoji: <FaAws />,
    color: "text-orange-500",
  },

  {
    name: "Java",
    emoji: <FaJava />,
  },
  {
    name: ".Net",
    emoji: <SiDotnet />,
  },
  {
    name: "Python",
    emoji: <FaPython />,
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
];

export const softwareDevFaqs = [
  {
    id: "item1",
    title:
      "What is custom software development, and how does it differ from off-the-shelf solutions?",
    content:
      "Custom software development involves creating tailored solutions designed to meet specific business needs. Unlike off-the-shelf software, custom development ensures that the application aligns precisely with your unique requirements.",
  },
  {
    id: "item2",
    title:
      "Why should I opt for custom software development instead of using pre-built software?",
    content:
      "Custom software allows you to address specific business challenges and streamline processes more efficiently. It provides flexibility, scalability, and the ability to incorporate features that are essential to your business, giving you a competitive edge.",
  },
  {
    id: "item3",
    title:
      "How does the custom software development process work with your team?",
    content:
      "Our custom software development process typically involves consultation, requirements gathering, design, development, testing, deployment, and ongoing support. We work closely with you at every stage to ensure the final product meets your expectations.",
  },
  {
    id: "item4",
    title:
      "What technologies does your team specialize in for custom software development?",
    content:
      "We have expertise in a variety of technologies and programming languages, including but not limited to Java, Python, .NET, JavaScript, and more. The choice of technology depends on the specific requirements of your project.",
  },
  {
    id: "item5",
    title:
      "Can you integrate the custom software with existing systems or third-party APIs?",
    content:
      "Yes, we specialize in seamless integration with existing systems and third-party APIs. This ensures that your custom software can work cohesively with other tools and platforms used in your organization.",
  },
  {
    id: "item6",
    title: "How do you ensure the security of custom software applications?",
    content:
      "Security is a top priority. We implement industry best practices, conduct thorough security assessments, and apply encryption and authentication measures to safeguard your custom software from potential vulnerabilities.",
  },
  {
    id: "item7",
    title:
      "What is the typical timeline for custom software development projects?",
    content:
      "The timeline varies based on the complexity and scope of the project. We provide a detailed project timeline during the initial consultation after understanding your specific requirements.",
  },
  {
    id: "item8",
    title:
      "Do you provide ongoing support and maintenance for custom software applications?",
    content:
      "Yes, we offer ongoing support and maintenance services to address any issues, implement updates, and ensure the continued performance and security of your custom software.",
  },
  {
    id: "item9",
    title:
      "How do you ensure that the custom software is user-friendly and meets the needs of end-users?",
    content:
      "We follow user-centered design principles, conduct user testing, and gather feedback throughout the development process. This ensures that the custom software is intuitive, user-friendly, and aligned with the needs of your end-users.",
  },
  {
    id: "item10",
    title: "What factors influence the cost of custom software development?",
    content:
      "The cost is influenced by factors such as project complexity, features, integrations, and ongoing support. We provide a detailed breakdown of costs after assessing your specific project requirements.",
  },
];
