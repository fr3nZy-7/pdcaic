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
    heroImage: "/images/services/endo-motor-rct-hero.jpg",
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
        icon: "/images/icons/pain-free-treatment.svg",
        title: "Pain Free Procedure",
        description: "Advanced anesthesia techniques ensure comfortable treatment"
      },
      {
        icon: "/images/icons/single-visit.svg",
        title: "Single Visit Possible",
        description: "Complete treatment in one appointment when possible"
      },
      {
        icon: "/images/icons/latest-tech.svg",
        title: "Latest Technology",
        description: "State-of-the-art equipment for precise treatment"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
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
      heroContentImage: "/images/services/subhero.jpg",
      additionalSections: [
        {
          title: "What is Root Canal?",
          content: "Root canal treatment is a dental procedure used to treat infected or severely decayed teeth. During the procedure, the infected or damaged pulp inside the tooth is removed, the root canals are cleaned and disinfected, and then sealed to prevent further infection.",
          image: "/images/services/rct.jpg",
          subsections: [
            {
              subtitle: "Common Symptoms",
              text: "Severe toothache when chewing or applying pressure, prolonged sensitivity to hot or cold temperatures, discoloration of the tooth, swelling and tenderness in nearby gums, or a persistent or recurring pimple on the gums.",
              image: "/images/services/rct-patient.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "orthodontics",
    title: "Orthodontic Treatment",
    shortDescription: "Braces and aligners to straighten teeth, improve bite, and enhance your smile.",
    longDescription: "Orthodontic treatments help align teeth, correct bite issues, and improve overall dental health. At our clinic, we offer both traditional braces and modern clear aligners to suit patient needs and lifestyles.",
    heroImage: "/images/services/clear-aligners.jpg",
    infographicImages: [
      "/images/services/orthodontics-info1.png",
      "/images/services/orthodontics-info2.png",
    ],
    seo: {
      title: "Orthodontic Treatment in Pune | Braces & Aligners",
      description: "Achieve a perfect smile with braces or clear aligners in Pune. Customized orthodontic care for children, teens, and adults.",
      keywords: [
        "orthodontics Pune",
        "braces Pune",
        "clear aligners Pune",
        "invisible braces Pune",
      ],
    },

    features: [
      {
        icon: "/images/icons/clear-aligners.svg",
        title: "Clear Aligners",
        description: "Discreet and removable aligners for modern orthodontic care"
      },
      {
        icon: "/images/icons/braces.svg",
        title: "Traditional Braces",
        description: "Reliable and effective treatment for complex cases"
      },
      {
        icon: "/images/icons/smile.svg",
        title: "Smile Enhancement",
        description: "Improves both function and aesthetics of your smile"
      },
      {
        icon: "/images/icons/age-friendly.svg",
        title: "For All Ages",
        description: "Orthodontic solutions for children, teens, and adults"
      }
    ],

    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation and Diagnosis",
        description: "Comprehensive evaluation including X-rays and dental impressions"
      },
      {
        stepNumber: 2,
        title: "Treatment Planning",
        description: "Customized plan for braces or aligners based on your needs"
      },
      {
        stepNumber: 3,
        title: "Active Treatment",
        description: "Regular adjustments and monitoring for optimal results"
      },
      {
        stepNumber: 4,
        title: "Retention Phase",
        description: "Use of retainers to maintain your beautiful new smile"
      }
    ],

    beforeAfterCategory: "orthodontics",
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/ortho-before-1.jpg",
        after: "/images/before-after/ortho-after-1.jpg",
        description: "Crowded teeth aligned with clear aligners"
      },
      {
        before: "/images/before-after/ortho-before-2.jpg",
        after: "/images/before-after/ortho-after-2.jpg",
        description: "Improved bite and smile with braces"
      }
    ],

    detailedContent: {
      mainTitle: "Transform Your Smile with Orthodontics",
      mainDescription: "Orthodontic treatment not only enhances your appearance but also improves oral health and function. Our customized plans ensure the best outcome for each patient.",
      heroContentImage: "/images/services/subhero-ortho.jpg",
      additionalSections: [
        {
          title: "Why Orthodontics?",
          content: "Properly aligned teeth are easier to clean, reduce risk of cavities and gum disease, and contribute to better overall health. A beautiful smile also boosts confidence and self-esteem.",
          image: "/images/services/subhero-ortho1.jpg",
          subsections: [
            {
              subtitle: "Treatment Options",
              text: "We offer traditional braces, ceramic braces, and clear aligners like Invisalign. Each has its own benefits depending on your case.",
              image: "/images/services/ortho-options.jpg"
            }
          ]
        }
      ]
    }
  }

];