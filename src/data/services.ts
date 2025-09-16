// src/data/services.ts
export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  infographicImages: string[]; // keeping existing for backward compatibility
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // NEW FIELDS FOR ENHANCED SERVICE PAGES:
  
  // Features section (Pain Free, Single Visit, etc.)
  features: {
    icon: string; // path to custom SVG
    title: string;
    description?: string;
  }[];

  // Process steps section ("What to Expect")
  processSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];

  // Before/After images - reference to gallery system
      beforeAfterCategory: "root-canal", // will filter gallery images by this category
    
    // Mock data for development (until gallery system is ready)
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/rct-before-1.jpg",
        after: "/images/before-after/rct-after-1.jpg",
        description: "Successful root canal treatment with excellent results"
      },
      {
        before: "/images/before-after/rct-before-2.jpg", 
        after: "/images/before-after/rct-after-2.jpg",
        description: "Complete restoration preserving natural tooth"
      },
      {
        before: "/images/before-after/rct-before-3.jpg",
        after: "/images/before-after/rct-after-3.jpg", 
        description: "Pain-free treatment with lasting results"
      }
    ],

  // Detailed content sections (replaces simple longDescription)
  detailedContent: {
    mainTitle: string; // e.g., "Save Your Natural Tooth!"
    mainDescription: string;
    heroContentImage?: string; // image to show alongside main content
    additionalSections?: {
      title: string; // e.g., "What is Root Canal?"
      content: string;
      image?: string;
      subsections?: {
        subtitle: string; // e.g., "Common Symptoms"
        text: string;
        image?: string;
      }[];
    }[];
  };
};

export const services: Service[] = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Advanced endodontic therapy to save infected or damaged teeth while eliminating pain and preserving natural teeth.",
    longDescription: "Root Canal Treatment (RCT) is a highly effective way to save a natural tooth that has been infected or damaged. At our clinic, we use modern techniques and advanced technology to make the procedure as pain-free and efficient as possible. Whether it's a single-visit RCT or a retreatment, our focus is always on patient comfort and preserving natural teeth.",
    heroImage: "/images/services/root-canal-hero.jpg",
    infographicImages: [
      "/images/services/root-canal-info1.png",
      "/images/services/root-canal-info2.png",
    ],
    seo: {
      title: "Root Canal Treatment in Pune | Pain-Free RCT by Expert Dentist",
      description: "Get advanced, pain-free Root Canal Treatment (RCT) in Pune. Save your natural tooth with single-visit and modern endodontic care.",
      keywords: [
        "root canal treatment Pune",
        "pain free RCT",
        "single visit RCT",
        "endodontist Pune",
      ],
    },

    // NEW EXTENDED DATA:
    features: [
      {
        icon: "/images/icons/pain-free.svg",
        title: "Pain Free Procedure",
        description: "Advanced anesthesia techniques ensure comfortable treatment"
      },
      {
        icon: "/images/icons/single-visit.svg",
        title: "Single Visit Possible",
        description: "Complete treatment in one appointment when possible"
      },
      {
        icon: "/images/icons/technology.svg",
        title: "Latest Technology",
        description: "State-of-the-art equipment for precise treatment"
      },
      {
        icon: "/images/icons/specialist.svg",
        title: "Expert Specialist",
        description: "Experienced endodontist with proven track record"
      }
    ],

    processSteps: [
      {
        stepNumber: 1,
        title: "Examination and Diagnosis",
        description: "Complete dental examination with X-rays to assess the damage"
      },
      {
        stepNumber: 2,
        title: "Treatment Procedure",
        description: "Removal of infected pulp and careful cleaning of root canals"
      },
      {
        stepNumber: 3,
        title: "Final restoration and instructions for proper dental care",
        description: "Recovery & Aftercare"
      }
    ],

    beforeAfterImages: [
      {
        before: "/images/before-after/rct-before-1.jpg",
        after: "/images/before-after/rct-after-1.jpg",
        description: "Successful root canal treatment with excellent results"
      },
      {
        before: "/images/before-after/rct-before-2.jpg", 
        after: "/images/before-after/rct-after-2.jpg",
        description: "Complete restoration preserving natural tooth"
      },
      {
        before: "/images/before-after/rct-before-3.jpg",
        after: "/images/before-after/rct-after-3.jpg", 
        description: "Pain-free treatment with lasting results"
      }
    ],

    detailedContent: {
      mainTitle: "Save Your Natural Tooth!",
      mainDescription: "Our state-of-the-art root canal therapy saves your natural tooth and eliminates pain. Using advanced technology and techniques, we ensure a comfortable, efficient procedure with lasting results.",
      heroContentImage: "/images/services/root-canal-detailed.jpg",
      additionalSections: [
        {
          title: "What is Root Canal?",
          content: "Root canal treatment is a dental procedure used to treat infected or severely decayed teeth. During the procedure, the infected or damaged pulp inside the tooth is removed, the root canals are cleaned and disinfected, and then sealed to prevent further infection.",
          image: "/images/services/root-canal-explanation.jpg",
          subsections: [
            {
              subtitle: "Common Symptoms",
              text: "Severe toothache when chewing or applying pressure, prolonged sensitivity to hot or cold temperatures, discoloration of the tooth, swelling and tenderness in nearby gums, or a persistent or recurring pimple on the gums.",
              image: "/images/services/root-canal-symptoms.jpg"
            }
          ]
        }
      ]
    }
  }
];