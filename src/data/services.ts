// src/data/services.ts
export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  infographicImages: string[]; // array of image paths
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const services: Service[] = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    shortDescription:
      "Advanced endodontic therapy to save infected or damaged teeth while eliminating pain and preserving natural teeth.",
    longDescription:
      "Root Canal Treatment (RCT) is a highly effective way to save a natural tooth that has been infected or damaged. At our clinic, we use modern techniques and advanced technology to make the procedure as pain-free and efficient as possible. Whether it’s a single-visit RCT or a retreatment, our focus is always on patient comfort and preserving natural teeth.",
    heroImage: "/images/services/root-canal-hero.jpg",
    infographicImages: [
      "/images/services/root-canal-info1.png",
      "/images/services/root-canal-info2.png",
    ],
    seo: {
      title: "Root Canal Treatment in Pune | Pain-Free RCT by Expert Dentist",
      description:
        "Get advanced, pain-free Root Canal Treatment (RCT) in Pune. Save your natural tooth with single-visit and modern endodontic care.",
      keywords: [
        "root canal treatment Pune",
        "pain free RCT",
        "single visit RCT",
        "endodontist Pune",
      ],
    },
  },
];
