import { SiDotnet, SiKubernetes } from "react-icons/si";
import { FaLinux, FaAws, FaJava, FaDocker, FaCloudflare } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

export const technologies = [
  {
    name: "Git",
    emoji: <BsGit />,
    color: "text-orange-500",
  },
  {
    name: "Linux",
    emoji: <FaLinux />,
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
  // Add more technologies here as needed
];

export const cloudComputingFaqs = [
  {
    id: "item1",
    title: "What is cloud computing, and how does it benefit businesses?",
    content:
      "Cloud computing is a technology that enables access to computing resources (e.g., servers, storage, databases) over the internet. It benefits businesses by providing cost-effective, scalable, and on-demand access to resources, allowing for flexibility and innovation.",
  },
  {
    id: "item2",
    title: "Which cloud computing services do you offer?",
    content:
      "We offer a range of cloud computing services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), and specialized services such as cloud storage, database management, and serverless computing.",
  },
  {
    id: "item3",
    title: "Can you assist with migrating existing applications to the cloud?",
    content:
      "Yes, we specialize in application migration to the cloud. Whether it's moving applications from on-premises servers or transitioning between cloud providers, our team ensures a seamless and efficient migration process.",
  },
  {
    id: "item4",
    title:
      "Which cloud providers do you work with (e.g., AWS, Azure, Google Cloud)?",
    content:
      "We work with major cloud providers, including AWS (Amazon Web Services), Azure (Microsoft), Google Cloud, and others. Our expertise spans multiple platforms, allowing us to choose the best-suited solution for your specific needs.",
  },
  {
    id: "item5",
    title:
      "How do you ensure the security of data and applications in the cloud?",
    content:
      "Security is a top priority. We implement robust security measures, including data encryption, access controls, and compliance with industry standards. Regular audits and monitoring help identify and address potential security threats.",
  },
  {
    id: "item6",
    title:
      "Can you help with setting up and managing cloud infrastructure for businesses?",
    content:
      "Yes, we provide end-to-end services for setting up and managing cloud infrastructure. This includes designing architecture, provisioning resources, configuring networks, and ongoing maintenance to ensure optimal performance.",
  },
  {
    id: "item7",
    title:
      "Do you offer services for optimizing costs and resource usage in the cloud?",
    content:
      "Absolutely. We provide cost optimization services, analyzing your cloud usage and suggesting strategies to optimize costs without compromising performance. This includes rightsizing resources, leveraging reserved instances, and implementing efficient scaling.",
  },
  {
    id: "item8",
    title: "How do you handle data backup and disaster recovery in the cloud?",
    content:
      "We implement robust backup and disaster recovery solutions tailored to your business needs. This includes regular data backups, snapshotting, and designing recovery strategies to minimize downtime in case of unexpected events.",
  },
  {
    id: "item9",
    title:
      "Can you integrate cloud services with on-premises systems or other third-party applications?",
    content:
      "Yes, we specialize in seamless integration of cloud services with on-premises systems and third-party applications. This ensures that your cloud environment works cohesively with existing infrastructure and tools.",
  },
  {
    id: "item10",
    title:
      "What factors influence the cost of cloud computing services with your team?",
    content:
      "The cost is influenced by factors such as the type and amount of resources used, data storage requirements, and additional services. We provide transparent pricing based on a thorough understanding of your specific cloud computing needs.",
  },
];
