// src/data/services.ts
export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  iconPath: string; 
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
  beforeAfterCategory: string; // will filter gallery images by this category
    
  // Mock data for development (until gallery system is ready)
  mockBeforeAfterImages: {
      before: string;
      after: string;
      description: string;
    }[],

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
    iconPath:"/images/icons/root-canal.svg",
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

    beforeAfterCategory: "root-canal",

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
    iconPath:"/images/icons/orthodontics.svg",
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
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "A durable and natural-looking solution for missing teeth, restoring your smile's aesthetics and functionality.",
    iconPath:"/images/icons/dental-implants.svg",
    longDescription: "Dental implants are a revolutionary way to replace missing teeth, providing a strong foundation for a fixed or removable replacement tooth. Our clinic specializes in using high-quality materials and precise surgical techniques to ensure a seamless fit and long-lasting results. Whether it's a single tooth or a full arch, dental implants offer a permanent solution that looks and feels like your natural teeth.",
    heroImage: "/images/services/dental-implants-hero.jpg",
    infographicImages: [
      "/images/services/dental-implants-info1.png",
      "/images/services/dental-implants-info2.png",
    ],
    seo: {
      title: "Dental Implants in Pune | Permanent Tooth Replacement",
      description: "Explore permanent and natural-looking dental implants in Pune. Restore your smile with our expert implantology services for single or multiple missing teeth.",
      keywords: [
        "dental implants Pune",
        "tooth implant cost Pune",
        "permanent tooth replacement",
        "implant dentist Pune",
      ],
    },
    beforeAfterCategory: "dental-implants",
    features: [
      {
        icon: "/images/icons/natural-look.svg",
        title: "Natural Look & Feel",
        description: "Implants are designed to mimic the appearance and function of natural teeth"
      },
      {
        icon: "/images/icons/long-lasting.svg",
        title: "Durable & Long-lasting",
        description: "With proper care, dental implants can last a lifetime"
      },
      {
        icon: "/images/icons/bone-preservation.svg",
        title: "Prevents Bone Loss",
        description: "Implants stimulate the jawbone, preventing deterioration"
      },
      {
        icon: "/images/icons/improved-function.svg",
        title: "Improved Chewing & Speech",
        description: "Restores full chewing ability and clarity in speech"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation and Planning",
        description: "Thorough examination, including 3D imaging, to create a personalized treatment plan"
      },
      {
        stepNumber: 2,
        title: "Implant Placement",
        description: "Surgical placement of the titanium implant post into the jawbone"
      },
      {
        stepNumber: 3,
        title: "Healing & Restoration",
        description: "Integration of the implant with the bone, followed by placement of the crown, bridge, or denture"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/dental-implant-before-1.jpg",
        after: "/images/before-after/dental-implant-after-1.jpg",
        description: "Single tooth implant restoring smile and function"
      },
      {
        before: "/images/before-after/dental-implant-before-2.jpg",
        after: "/images/before-after/dental-implant-after-2.jpg",
        description: "Multiple implants replacing missing teeth"
      },
      {
        before: "/images/before-after/dental-implant-before-3.jpg",
        after: "/images/before-after/dental-implant-after-3.jpg",
        description: "Full arch restoration with dental implants"
      }
    ],
    detailedContent: {
      mainTitle: "The Gold Standard in Tooth Replacement",
      mainDescription: "Dental implants are the most advanced and effective solution for replacing missing teeth. They provide a permanent, stable, and aesthetically pleasing alternative to bridges and dentures, allowing you to eat, speak, and smile with confidence.",
      heroContentImage: "/images/services/subhero-implants.jpg",
      additionalSections: [
        {
          title: "What is a Dental Implant?",
          content: "A dental implant is a small, screw-shaped post, typically made of titanium, that's surgically placed into the jawbone where a tooth is missing. This post acts as a new tooth root, providing a sturdy anchor for a replacement tooth, such as a crown, bridge, or denture.",
          image: "/images/services/dental-implant-anatomy.jpg",
          subsections: [
            {
              subtitle: "Benefits of Dental Implants",
              text: "Implants look and feel like natural teeth, don't require altering adjacent teeth like bridges, prevent jawbone loss, and are a long-term solution with a high success rate.",
              image: "/images/services/dental-implant-patient.jpg"
            }
          ]
        }
      ]
    }
}, 

{
  slug: "general-dentistry",
  title: "General Dentistry",
  shortDescription: "Comprehensive dental care for the entire family, focusing on prevention, diagnosis, and treatment of common oral health issues.",
  iconPath:"/images/icons/general-dentistry.svg",
  longDescription: "General Dentistry is the foundation of a healthy smile. Our practice offers a full range of general dental services, from routine check-ups and cleanings to fillings and extractions. We focus on preventive care to help you maintain optimal oral health and catch potential issues early. Our goal is to provide a comfortable and welcoming environment for patients of all ages, ensuring a positive dental experience every time you visit.",
  heroImage: "/images/services/general-dentistry-hero.jpg",
  infographicImages: [
    "/images/services/general-dentistry-info1.png",
    "/images/services/general-dentistry-info2.png",
  ],
  seo: {
    title: "General Dentistry in Pune | Family Dental Care & Checkups",
    description: "Comprehensive general dentistry services for the whole family in Pune. Schedule a routine dental check-up, cleaning, or consultation with our expert general dentists.",
    keywords: [
      "general dentistry Pune",
      "family dental care Pune",
      "dental check-up and cleaning",
      "fillings and extractions Pune",
    ],
  },
  beforeAfterCategory: "general-dentistry",
  features: [
    {
      icon: "/images/icons/preventive-care.svg",
      title: "Preventive Care",
      description: "Focus on preventing issues with regular checkups and cleanings"
    },
    {
      icon: "/images/icons/family-friendly.svg",
      title: "Family Friendly",
      description: "A welcoming environment for patients of all ages, from children to seniors"
    },
    {
      icon: "/images/icons/holistic-approach.svg",
      title: "Holistic Approach",
      description: "Comprehensive care covering all aspects of your oral health"
    },
    {
      icon: "/images/icons/patient-education.svg",
      title: "Patient Education",
      description: "Empowering you with knowledge to maintain a healthy smile at home"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "Initial Consultation & Exam",
      description: "A thorough examination of your teeth, gums, and mouth, including X-rays"
    },
    {
      stepNumber: 2,
      title: "Professional Cleaning",
      description: "Removal of plaque and tartar buildup to prevent cavities and gum disease"
    },
    {
      stepNumber: 3,
      title: "Personalized Treatment Plan",
      description: "Discussion of any findings and creation of a tailored plan for your needs"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/filling-before-1.jpg",
      after: "/images/before-after/filling-after-1.jpg",
      description: "Composite filling restoring a decayed tooth"
    },
    {
      before: "/images/before-after/cleaning-before-1.jpg",
      after: "/images/before-after/cleaning-after-1.jpg",
      description: "Professional cleaning removing stains and buildup"
    },
    {
      before: "/images/before-after/extraction-before-1.jpg",
      after: "/images/before-after/extraction-after-1.jpg",
      description: "Seamless extraction and preparation for future restoration"
    }
  ],
  detailedContent: {
    mainTitle: "Your Partner in Lifelong Oral Health",
    mainDescription: "General dentistry is about more than just fixing problems—it's about preventing them. Our team is dedicated to helping you and your family achieve and maintain beautiful, healthy smiles through a blend of preventive care, restorative treatments, and patient education.",
    heroContentImage: "/images/services/subhero-general-dentistry.jpg",
    additionalSections: [
      {
        title: "Our General Dentistry Services",
        content: "We offer a wide range of services to meet your dental needs, including routine dental check-ups, professional teeth cleaning, tooth-colored fillings, fluoride treatments, and extractions. Our team uses the latest technology to ensure accurate diagnoses and effective, comfortable treatments.",
        image: "/images/services/general-dentistry-services.jpg",
        subsections: [
          {
            subtitle: "The Importance of Regular Checkups",
            text: "Routine dental visits are crucial for early detection of issues like cavities, gum disease, and oral cancer. They allow us to provide timely intervention and maintain your oral health, preventing more complex and costly problems down the road.",
            image: "/images/services/patient-exam.jpg"
          }
        ]
      }
    ]
  }
},

{
  slug: "cosmetic-dentistry",
  title: "Cosmetic Dentistry",
  shortDescription: "Transform your smile with a range of aesthetic treatments, including teeth whitening, veneers, and smile makeovers.",
  iconPath:"/images/icons/cosmetic-dentistry.svg",
  longDescription: "Cosmetic dentistry is all about enhancing the appearance of your teeth and smile. Whether you want to fix a single discolored tooth or completely redesign your smile, our clinic offers a variety of advanced cosmetic procedures. We combine artistry with modern dental techniques to create a beautiful, natural-looking smile that boosts your confidence and reflects your personality.",
  heroImage: "/images/services/cosmetic-dentistry-hero.jpg",
  infographicImages: [
    "/images/services/cosmetic-dentistry-info1.png",
    "/images/services/cosmetic-dentistry-info2.png",
  ],
  seo: {
    title: "Cosmetic Dentistry in Pune | Smile Makeovers & Veneers",
    description: "Enhance your smile with our expert cosmetic dentistry services in Pune. We offer teeth whitening, veneers, smile makeovers, and more for a stunning, confident smile.",
    keywords: [
      "cosmetic dentistry Pune",
      "teeth whitening Pune",
      "dental veneers Pune",
      "smile makeover Pune",
    ],
  },
  beforeAfterCategory: "cosmetic-dentistry",
  features: [
    {
      icon: "/images/icons/smile-transformation.svg",
      title: "Smile Transformation",
      description: "Achieve the smile you've always dreamed of with personalized treatments"
    },
    {
      icon: "/images/icons/natural-aesthetics.svg",
      title: "Natural Aesthetics",
      description: "Procedures are designed to look and feel completely natural"
    },
    {
      icon: "/images/icons/boost-confidence.svg",
      title: "Boosted Confidence",
      description: "A beautiful smile can dramatically improve self-esteem"
    },
    {
      icon: "/images/icons/customized-plan.svg",
      title: "Customized Treatment Plan",
      description: "Every plan is tailored to your unique goals and dental needs"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "Consultation and Smile Design",
      description: "Discussion of your goals and a comprehensive analysis of your smile"
    },
    {
      stepNumber: 2,
      title: "Treatment Planning",
      description: "Creation of a detailed plan, which may include a combination of procedures"
    },
    {
      stepNumber: 3,
      title: "Procedure and Follow-up",
      description: "Implementation of the treatment plan with meticulous attention to detail"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/veneers-before-1.jpg",
      after: "/images/before-after/veneers-after-1.jpg",
      description: "Veneers correcting shape and color for a flawless smile"
    },
    {
      before: "/images/before-after/whitening-before-1.jpg",
      after: "/images/before-after/whitening-after-1.jpg",
      description: "Professional teeth whitening for a brighter, more youthful smile"
    },
    {
      before: "/images/before-after/smile-makeover-before-1.jpg",
      after: "/images/before-after/smile-makeover-after-1.jpg",
      description: "Full smile makeover with a combination of cosmetic treatments"
    }
  ],
  detailedContent: {
    mainTitle: "Crafting Your Perfect Smile",
    mainDescription: "A beautiful smile can change everything. At our clinic, we are passionate about helping you achieve a radiant smile that you are proud to show off. We use state-of-the-art technology and a personalized approach to ensure stunning and lasting results for every patient.",
    heroContentImage: "/images/services/subhero-cosmetic-dentistry.jpg",
    additionalSections: [
      {
        title: "Our Cosmetic Services",
        content: "We provide a full suite of cosmetic services, including professional teeth whitening to remove stains, porcelain and composite veneers to correct imperfections, dental bonding to repair chips and gaps, and full smile makeovers that combine multiple procedures for a complete transformation.",
        image: "/images/services/cosmetic-services.jpg",
        subsections: [
          {
            subtitle: "The Smile Makeover Process",
            text: "A smile makeover is a comprehensive plan that can include a combination of cosmetic and restorative procedures like veneers, whitening, implants, and orthodontics to achieve your ideal smile. We work closely with you to design a plan that fits your vision and lifestyle.",
            image: "/images/services/smile-design-process.jpg"
          }
        ]
      }
    ]
  }
},

{
  slug: "oral-surgery",
  title: "Oral Surgery",
  shortDescription: "Expert surgical procedures for complex dental issues, including wisdom tooth removal and jaw-related treatments.",
  iconPath:"/images/icons/oral-surgery.svg",
  longDescription: "Oral surgery encompasses a range of specialized procedures to treat diseases, injuries, and defects in the head, neck, face, and jaw. Our team is highly experienced in performing various surgical treatments, from routine wisdom tooth extractions to more complex bone grafting. We prioritize patient comfort and safety, using advanced techniques and a gentle approach to ensure a smooth and effective procedure with minimal recovery time.",
  heroImage: "/images/services/oral-surgery-hero.jpg",
  infographicImages: [
    "/images/services/oral-surgery-info1.png",
    "/images/services/oral-surgery-info2.png",
  ],
  seo: {
    title: "Oral Surgery in Pune | Wisdom Tooth Extraction & Jaw Surgery",
    description: "Our clinic provides expert oral surgery services in Pune, including wisdom tooth removal, dental extractions, and jaw surgeries, all performed with a focus on patient comfort and safety.",
    keywords: [
      "oral surgery Pune",
      "wisdom tooth extraction Pune",
      "dental extractions",
      "jaw surgery Pune",
    ],
  },
  beforeAfterCategory: "oral-surgery",
  features: [
    {
      icon: "/images/icons/expert-specialist.svg",
      title: "Experienced Surgeons",
      description: "Our skilled oral surgeons have years of experience in complex procedures"
    },
    {
      icon: "/images/icons/pain-management.svg",
      title: "Advanced Pain Management",
      description: "We use modern anesthesia techniques for a pain-free experience"
    },
    {
      icon: "/images/icons/patient-comfort.svg",
      title: "Patient-Focused Care",
      description: "Our top priority is your comfort and well-being throughout the process"
    },
    {
      icon: "/images/icons/modern-techniques.svg",
      title: "Minimally Invasive Techniques",
      description: "We use the latest methods to ensure quicker recovery and less discomfort"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "Initial Consultation",
      description: "Comprehensive examination and diagnostic imaging to assess the need for surgery"
    },
    {
      stepNumber: 2,
      title: "Surgical Procedure",
      description: "The procedure is performed with a focus on precision and patient comfort"
    },
    {
      stepNumber: 3,
      title: "Post-Operative Care",
      description: "Detailed instructions and follow-up to ensure a smooth and rapid recovery"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/extraction-before-2.jpg",
      after: "/images/before-after/extraction-after-2.jpg",
      description: "Surgical extraction of an impacted wisdom tooth"
    },
    {
      before: "/images/before-after/bone-graft-before-1.jpg",
      after: "/images/before-after/bone-graft-after-1.jpg",
      description: "Bone grafting procedure to prepare for a dental implant"
    },
    {
      before: "/images/before-after/cyst-removal-before-1.jpg",
      after: "/images/before-after/cyst-removal-after-1.jpg",
      description: "Removal of a dental cyst with full tissue healing"
    }
  ],
  detailedContent: {
    mainTitle: "Specialized Care for Complex Needs",
    mainDescription: "Oral surgery is a highly specialized field requiring expert skill and knowledge. We handle a variety of surgical needs, from common tooth extractions to advanced procedures, all while ensuring your safety and comfort are our primary concern.",
    heroContentImage: "/images/services/subhero-oral-surgery.jpg",
    additionalSections: [
      {
        title: "Common Oral Surgery Procedures",
        content: "Our services include surgical extractions for impacted or problematic teeth, including wisdom teeth, pre-prosthetic surgery to prepare the mouth for dentures, and bone grafting to restore jawbone density for future implant placement. We also perform procedures for jaw joint disorders and facial trauma.",
        image: "/images/services/oral-surgery-procedures.jpg",
        subsections: [
          {
            subtitle: "Wisdom Tooth Extraction",
            text: "Wisdom teeth often require extraction due to impaction, crowding, or pain. Our surgeons use a precise and gentle approach to remove them, minimizing discomfort and promoting a quick recovery.",
            image: "/images/services/wisdom-tooth-diagram.jpg"
          }
        ]
      }
    ]
  }
},

{
  slug: "periodontal-treatment",
  title: "Periodontal Treatment",
  shortDescription: "Specialized care for gum disease, from non-surgical deep cleaning to surgical interventions to restore gum health.",
  iconPath:"/images/icons/periodontal-treatment.svg",
  longDescription: "Periodontal treatment focuses on the health of your gums and the supporting structures of your teeth. Gum disease, or periodontitis, can lead to tooth loss if left untreated. Our clinic provides a full spectrum of periodontal services, including non-surgical deep cleaning (scaling and root planing) and advanced surgical procedures. We aim to halt the progression of gum disease, restore the health of your gums, and help you maintain a strong foundation for a healthy smile.",
  heroImage: "/images/services/periodontal-treatment-hero.jpg",
  infographicImages: [
    "/images/services/periodontal-treatment-info1.png",
    "/images/services/periodontal-treatment-info2.png",
  ],
  seo: {
    title: "Periodontal Treatment in Pune | Gum Disease Treatment",
    description: "Get specialized periodontal treatment for gum disease in Pune. Our services include deep cleaning (scaling and root planing), gum surgery, and expert care to restore your gum health.",
    keywords: [
      "periodontal treatment Pune",
      "gum disease treatment Pune",
      "scaling and root planing",
      "periodontist Pune",
    ],
  },
  beforeAfterCategory: "periodontal-treatment",
  features: [
    {
      icon: "/images/icons/gum-health.svg",
      title: "Restores Gum Health",
      description: "Effective treatments to reverse and manage gum disease"
    },
    {
      icon: "/images/icons/prevents-tooth-loss.svg",
      title: "Prevents Tooth Loss",
      description: "Treating gum disease protects the foundation of your teeth"
    },
    {
      icon: "/images/icons/advanced-techniques.svg",
      title: "Advanced Techniques",
      description: "Use of modern, minimally invasive methods for better outcomes"
    },
    {
      icon: "/images/icons/patient-education-gums.svg",
      title: "Personalized Care",
      description: "Tailored treatment plans and home care instructions for lasting results"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "Comprehensive Periodontal Exam",
      description: "Evaluation of your gums and bone levels to determine the stage of gum disease"
    },
    {
      stepNumber: 2,
      title: "Initial Therapy",
      description: "Deep cleaning to remove plaque and tartar below the gumline"
    },
    {
      stepNumber: 3,
      title: "Follow-up and Maintenance",
      description: "Regular check-ups and cleanings to prevent recurrence of the disease"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/gum-disease-before-1.jpg",
      after: "/images/before-after/gum-disease-after-1.jpg",
      description: "Gum health restored after scaling and root planing"
    },
    {
      before: "/images/before-after/gum-recession-before-1.jpg",
      after: "/images/before-after/gum-recession-after-1.jpg",
      description: "Gum graft procedure to correct gum recession"
    },
    {
      before: "/images/before-after/periodontitis-before-1.jpg",
      after: "/images/before-after/periodontitis-after-1.jpg",
      description: "Advanced periodontal treatment improving the health of supporting tissues"
    }
  ],
  detailedContent: {
    mainTitle: "Protecting the Foundation of Your Smile",
    mainDescription: "Healthy gums are essential for healthy teeth. Periodontal disease is a serious condition that can lead to tooth loss, but with timely and effective treatment, its progression can be stopped. We provide expert care to manage and reverse gum disease, ensuring your smile's foundation remains strong.",
    heroContentImage: "/images/services/subhero-periodontal.jpg",
    additionalSections: [
      {
        title: "Understanding Gum Disease",
        content: "Gum disease begins as gingivitis, characterized by inflamed and bleeding gums. If untreated, it progresses to periodontitis, which can destroy the bone and tissue that support your teeth. Symptoms include swollen or tender gums, bad breath, and loose teeth.",
        image: "/images/services/gum-disease-stages.jpg",
        subsections: [
          {
            subtitle: "Our Treatment Approach",
            text: "Our treatment plans are customized to the severity of your condition. For early stages, a deep cleaning is often sufficient. For advanced cases, we may recommend surgical treatments such as pocket reduction surgery or bone grafting to regenerate lost tissue and bone.",
            image: "/images/services/scaling-root-planing.jpg"
          }
        ]
      }
    ]
  }
},

{
  slug: "pediatric-dentistry",
  title: "Pediatric Dentistry",
  shortDescription: "Specialized dental care for infants, children, and adolescents, creating a positive and comfortable experience for young patients.",
  iconPath :"/images/icons/pediatric-dentistry.svg",
  longDescription: "Pediatric dentistry focuses on the unique oral health needs of children from infancy through their teenage years. Our clinic provides a child-friendly environment where we use gentle techniques to ensure a positive and anxiety-free visit. We offer a full range of services, including preventive care, cavity treatment, and education for both children and parents on proper oral hygiene. Our goal is to set the foundation for a lifetime of healthy smiles.",
  heroImage: "/images/services/pediatric-dentistry-hero.jpg",
  infographicImages: [
    "/images/services/pediatric-dentistry-info1.png",
    "/images/services/pediatric-dentistry-info2.png",
  ],
  seo: {
    title: "Pediatric Dentistry in Pune | Child-Friendly Dental Clinic",
    description: "Our clinic offers expert pediatric dentistry in Pune. We provide a positive and gentle dental experience for kids, focusing on preventive care, fluoride treatments, and more.",
    keywords: [
      "pediatric dentistry Pune",
      "kids dentist Pune",
      "child dental care",
      "first dental visit for kids",
    ],
  },
  beforeAfterCategory: "pediatric-dentistry",
  features: [
    {
      icon: "/images/icons/child-friendly.svg",
      title: "Child-Friendly Environment",
      description: "A fun and welcoming space to help kids feel at ease"
    },
    {
      icon: "/images/icons/gentle-care.svg",
      title: "Gentle & Patient Approach",
      description: "Our team is trained to work with children and alleviate their fears"
    },
    {
      icon: "/images/icons/preventive-focus.svg",
      title: "Strong Preventive Focus",
      description: "Emphasis on sealants, fluoride, and education to prevent cavities"
    },
    {
      icon: "/images/icons/parental-guidance.svg",
      title: "Parental Guidance",
      description: "We educate parents on how to best care for their child's teeth at home"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "First Visit & Introduction",
      description: "A gentle introduction to the dental chair and instruments to build trust"
    },
    {
      stepNumber: 2,
      title: "Comprehensive Exam & Cleaning",
      description: "A quick, thorough check of teeth and gums, followed by a fun cleaning"
    },
    {
      stepNumber: 3,
      title: "Education & Treatment Plan",
      description: "We provide tips for home care and discuss any necessary treatments in a simple way"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/pediatric-filling-before-1.jpg",
      after: "/images/before-after/pediatric-filling-after-1.jpg",
      description: "Filling of a small cavity in a child's tooth"
    },
    {
      before: "/images/before-after/sealant-before-1.jpg",
      after: "/images/before-after/sealant-after-1.jpg",
      description: "Dental sealant placed to protect a molar from cavities"
    },
    {
      before: "/images/before-after/extraction-kid-before-1.jpg",
      after: "/images/before-after/extraction-kid-after-1.jpg",
      description: "Gentle extraction of a primary (milk) tooth"
    }
  ],
  detailedContent: {
    mainTitle: "Building a Foundation for a Lifetime of Smiles",
    mainDescription: "Pediatric dentistry is more than just treating teeth; it's about creating a positive relationship with dental care from a young age. Our practice is designed to make dental visits enjoyable and stress-free for your child, ensuring they grow up with healthy habits and a confident smile.",
    heroContentImage: "/images/services/subhero-pediatric-dentistry.jpg",
    additionalSections: [
      {
        title: "Why Pediatric Dental Care is Crucial",
        content: "A child's first dental visit should be around their first birthday or when their first tooth appears. Early visits help us monitor development, prevent common issues like baby bottle tooth decay, and teach good habits.  We focus on preventive services like fluoride treatments and dental sealants, which are highly effective at preventing cavities in children.",
        image: "/images/services/pediatric-care-importance.jpg",
        subsections: [
          {
            subtitle: "Common Pediatric Services",
            text: "We offer comprehensive services including dental exams, cleanings, fluoride applications, dental sealants, tooth-colored fillings for cavities, and space maintainers to ensure proper alignment for permanent teeth.",
            image: "/images/services/pediatric-services.jpg"
          }
        ]
      }
    ]
  }
},

{
  slug: "emergency-dental-care",
  title: "Emergency Dental Care",
  shortDescription: "Immediate and responsive care for unexpected dental problems, including severe pain, trauma, or broken teeth.",
  iconPath:"/images/icons/emergency-dental-care.svg",
  longDescription: "Dental emergencies can happen at any time, causing severe pain and stress. Our clinic provides prompt and compassionate emergency dental care to address your urgent needs. Whether it's a knocked-out tooth, a fractured tooth, or an abscess causing unbearable pain, we're equipped to provide immediate diagnosis and treatment. We understand the urgency of these situations and aim to see you as quickly as possible to relieve your pain and prevent further complications.",
  heroImage: "/images/services/emergency-dental-care-hero.jpg",
  infographicImages: [
    "/images/services/emergency-dental-care-info1.png",
    "/images/services/emergency-dental-care-info2.png",
  ],
  seo: {
    title: "Emergency Dentist in Pune | 24/7 Urgent Dental Care",
    description: "Need an emergency dentist in Pune? We provide immediate care for dental pain, knocked-out teeth, and other urgent dental problems. Call us for a same-day appointment.",
    keywords: [
      "emergency dental care Pune",
      "urgent dentist Pune",
      "24/7 dentist Pune",
      "dental trauma treatment",
    ],
  },
  beforeAfterCategory: "emergency-dental-care",
  features: [
    {
      icon: "/images/icons/immediate-care.svg",
      title: "Immediate & Prompt Service",
      description: "We prioritize dental emergencies and aim to see you as soon as possible"
    },
    {
      icon: "/images/icons/pain-relief.svg",
      title: "Fast Pain Relief",
      description: "Our first priority is to alleviate your pain and discomfort"
    },
    {
      icon: "/images/icons/trauma-experts.svg",
      title: "Expertise in Trauma",
      description: "Experienced in handling a wide range of dental injuries and accidents"
    },
    {
      icon: "/images/icons/after-hours.svg",
      title: "After-Hours Support",
      description: "We provide guidance and treatment options even after regular hours"
    }
  ],
  processSteps: [
    {
      stepNumber: 1,
      title: "Initial Contact",
      description: "Call our emergency line to describe your situation and receive first-aid advice"
    },
    {
      stepNumber: 2,
      title: "Emergency Assessment",
      description: "Immediate examination to diagnose the problem and determine the best course of action"
    },
    {
      stepNumber: 3,
      title: "Treatment & Follow-up",
      description: "Effective treatment to resolve the issue, followed by a plan for long-term care"
    }
  ],
  mockBeforeAfterImages: [
    {
      before: "/images/before-after/emergency-broken-tooth-before.jpg",
      after: "/images/before-after/emergency-broken-tooth-after.jpg",
      description: "Repair of a fractured front tooth with composite bonding"
    },
    {
      before: "/images/before-after/emergency-abscess-before.jpg",
      after: "/images/before-after/emergency-abscess-after.jpg",
      description: "Treatment of a dental abscess with a root canal and pain relief"
    },
    {
      before: "/images/before-after/emergency-knocked-out-before.jpg",
      after: "/images/before-after/emergency-knocked-out-after.jpg",
      description: "Reimplantation of a knocked-out tooth after trauma"
    }
  ],
  detailedContent: {
    mainTitle: "Your First Call for Dental Emergencies",
    mainDescription: "A dental emergency can be a frightening experience. We provide a calm and efficient response to help you through it. Our team is trained to handle a variety of urgent situations, ensuring you receive the care you need, when you need it most, to save your tooth and alleviate your pain.",
    heroContentImage: "/images/services/subhero-emergency.jpg",
    additionalSections: [
      {
        title: "What is a Dental Emergency?",
        content: "A dental emergency is any condition that requires immediate attention to stop bleeding, alleviate severe pain, or save a tooth. Common examples include a knocked-out or loose tooth, a severe toothache, a dental abscess, a broken or chipped tooth, or lost filling or crown.",
        image: "/images/services/dental-emergency-info.jpg",
        subsections: [
          {
            subtitle: "First Aid for Common Emergencies",
            text: "For a knocked-out tooth, rinse the tooth gently and try to place it back in the socket. If that's not possible, keep it in milk and see a dentist immediately. For a toothache, rinse with warm water and use a cold compress. Avoid placing aspirin on the tooth or gums.",
            image: "/images/services/first-aid-dental-emergency.jpg"
          }
        ]
      }
    ]
  }
}

];