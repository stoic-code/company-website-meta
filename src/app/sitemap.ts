import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://metalogic.com.np";
  const services = [
    "software-development",
    "web-development",
    "mobile-app",
    "cloud-computing",
    "qa",
    "ui-ux",
    "devops",
    "blockchain",
  ];

  const servicePages = () => {
    // Map each service to an object containing relevant information
    const pages = services.map((service) => {
      return {
        title: service.replace(/-/g, " "), // Replace hyphens with spaces in the title
        url: `${base}/services/${service}`, // Construct the URL based on the service
        lastModified: new Date(), // Example last modified date (current date)
        priority: 0.5,
      };
    });

    return pages;
  };

  const staticPages = [
    {
      url: `${base}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/banshwali`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    ...servicePages(),
  ];
  return staticPages;
}
