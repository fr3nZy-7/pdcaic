// src/data/services.ts

import { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  iconPath: string;
  longDescription: string;
  heroImage: string;
  infographicImages: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  features: {
    icon: string;
    title: string;
    description?: string;
  }[];

  processSteps: {
    stepNumber: number;
    title: string;
    description: string;
  }[];

  beforeAfterCategory: string;

  mockBeforeAfterImages: {
    before: string;
    after: string;
    description: string;
  }[];

  detailedContent: {
    mainTitle: string;
    mainDescription: string;
    heroContentImage?: string;
    additionalSections: {
      title: string;
      content: string;
      image?: string;
      subsections?: {
        subtitle: string;
        text: string;
        image?: string;
      }[];
    }[];
  };
};

const placeholderDetailedContent = {
  mainTitle: "Comprehensive Dental Care",
  mainDescription: "Explore our wide range of services designed to enhance your dental health and smile.",
  additionalSections: []
};

// Dummy data for features and process steps with string icon paths
const dummyFeatures = [
  { icon: "/images/icons/expert-care.svg", title: "Expert Care" },
  { icon: "/images/icons/modern-technology.svg", title: "Modern Technology" },
  { icon: "/images/icons/comfort-first.svg", title: "Comfort First" }
];

const dummyProcessSteps = [
  { stepNumber: 1, title: "Consultation", description: "Initial assessment and treatment plan discussion." },
  { stepNumber: 2, title: "Procedure", description: "Performing the necessary dental treatment." },
  { stepNumber: 3, title: "Aftercare", description: "Providing guidance for a speedy recovery." }
];

export const services: Service[] = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Advanced endodontic therapy to save infected or damaged teeth while eliminating pain and preserving natural teeth.",
    iconPath:"/images/icons/root-canal.svg",
    longDescription: "Root Canal Treatment (RCT) is a highly effective way to save a natural tooth that has been infected or damaged. At our clinic, we use modern techniques and advanced technology to make the procedure as pain-free and efficient as possible. Whether it's a single-visit RCT or a retreatment, our focus is always on patient comfort and preserving natural teeth.",
    heroImage: "/images/services/root-canal-large.jpg",
    infographicImages: "/images/services/root-canal.jpg",
    
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
      heroContentImage: "/images/services/rct-subhero.jpg",
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
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Regain your confidence with permanent tooth replacements. Dental implants are the gold standard for restoring missing teeth and providing a stable, natural-looking smile.",
    iconPath: "/images/icons/implants.svg",
    longDescription: "Dental implants are a long-term solution for missing teeth. An implant is a small post, usually made of titanium, that is surgically placed into the jawbone to act as a replacement for the tooth's root. A crown is then placed on top, providing a durable and aesthetically pleasing restoration that looks and feels like a natural tooth.",
    heroImage: "/images/services/dental-implants-hero-large.jpg",
    infographicImages: "/images/services/dental-implants.jpg",
    
    seo: {
      title: "Dental Implants in Pune | Permanent Tooth Replacement Solutions",
      description: "Explore our state-of-the-art dental implants in Pune. Get a permanent, natural-looking solution for missing teeth and restore your smile's function and aesthetics.",
      keywords: [
        "dental implants Pune",
        "tooth replacement",
        "permanent teeth",
        "implantology",
      ],
    },
    beforeAfterCategory: "implants",
    features: [
      {
        icon: "/images/icons/natural.svg",
        title: "Natural Look & Feel",
        description: "Implants blend seamlessly with your natural teeth"
      },
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Long-Lasting Solution",
        description: "A permanent fix that can last a lifetime with proper care"
      },
      {
        icon: "/images/icons/strong.svg",
        title: "Bone Preservation",
        description: "Prevents jawbone deterioration and maintains facial structure"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Experienced Implantologist",
        description: "Precision surgery by a certified dental implant specialist"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Initial Assessment",
        description: "Comprehensive exam to determine suitability for implants"
      },
      {
        stepNumber: 2,
        title: "Implant Placement",
        description: "Surgical placement of the titanium post into the jawbone"
      },
      {
        stepNumber: 3,
        title: "Restoration",
        description: "Attaching the final custom-made crown to the implant"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/implants-before-1.jpg",
        after: "/images/before-after/implants-after-1.jpg",
        description: "Single tooth replacement with an implant"
      },
      {
        before: "/images/before-after/implants-before-2.jpg",
        after: "/images/before-after/implants-after-2.jpg",
        description: "Restoring a missing molar with a dental implant"
      },
      {
        before: "/images/before-after/implants-before-3.jpg",
        after: "/images/before-after/implants-after-3.jpg",
        description: "Full arch reconstruction using multiple implants"
      }
    ],
    detailedContent: {
      mainTitle: "The Gold Standard in Tooth Replacement",
      mainDescription: "Dental implants are a revolutionary solution for missing teeth, offering unparalleled stability, function, and aesthetics. Unlike bridges or dentures, implants fuse with your jawbone, providing a foundation that can last a lifetime.",
      heroContentImage: "/images/services/subhero-implants.jpg",
      additionalSections: [
        {
          title: "Why Choose Dental Implants?",
          content: "Implants prevent bone loss, maintain the health of adjacent teeth, and feel more comfortable and secure than other tooth replacement options. They allow you to eat, speak, and smile with confidence.",
          image: "/images/services/dental-implants.jpg",
          subsections: [
            {
              subtitle: "Who is a Candidate?",
              text: "Most people with good general and oral health are excellent candidates for dental implants. Factors like jawbone density and overall health are assessed during the initial consultation.",
              image: "/images/services/implants-patient.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "full-mouth-rehab",
    title: "Full Mouth Rehab",
    shortDescription: "Comprehensive treatment to restore the health, function, and appearance of your entire mouth, combining multiple procedures for a complete smile transformation.",
    iconPath: "/images/icons/full-mouth-rehab.svg",
    longDescription: "Full mouth rehabilitation is a customized treatment plan designed to correct extensive dental problems. It is a combination of restorative and cosmetic procedures, such as implants, crowns, bridges, and veneers, to rebuild your smile. We work closely with you to understand your goals and create a plan that fits your needs.",
    heroImage: "/images/services/full-mouth-rehab-hero.jpg",
    infographicImages: "/images/services/full-mouth-rehab.jpg",
      
    
    seo: {
      title: "Full Mouth Rehabilitation in Pune | Complete Smile Makeover",
      description: "Get a complete smile makeover with our full mouth rehabilitation services in Pune. We combine multiple dental procedures to restore your oral health and aesthetics.",
      keywords: [
        "full mouth rehab",
        "full mouth reconstruction",
        "smile makeover",
        "dental reconstruction",
      ],
    },
    beforeAfterCategory: "full-mouth-rehab",
    features: [
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Comprehensive Plan",
        description: "A single, coordinated plan for all your dental needs"
      },
      {
        icon: "/images/icons/face-star.svg",
        title: "Customized Results",
        description: "Tailored treatment to meet your unique goals"
      },
      {
        icon: "/images/icons/smile-plus.svg",
        title: "Functional Aesthetics",
        description: "Restores both function and beauty to your smile"
      },
      {
        icon: "/images/icons/family.svg",
        title: "Multidisciplinary Approach",
        description: "Coordinated care from multiple dental specialists"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Detailed Consultation",
        description: "Thorough examination and digital smile design consultation"
      },
      {
        stepNumber: 2,
        title: "Phased Treatment",
        description: "Execution of the treatment plan in a comfortable, phased manner"
      },
      {
        stepNumber: 3,
        title: "Final Smile Delivery",
        description: "Achieving your new, healthy, and beautiful smile"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/full-mouth-rehab-before-1.jpg",
        after: "/images/before-after/full-mouth-rehab-after-1.jpg",
        description: "Complete restoration of worn and damaged teeth"
      },
      {
        before: "/images/before-after/full-mouth-rehab-before-2.jpg",
        after: "/images/before-after/full-mouth-rehab-after-2.jpg",
        description: "Rebuilding a smile with multiple missing teeth"
      },
      {
        before: "/images/before-after/full-mouth-rehab-before-3.jpg",
        after: "/images/before-after/full-mouth-rehab-after-3.jpg",
        description: "Transforming a smile with complex dental issues"
      }
    ],
    detailedContent: {
      mainTitle: "A New Beginning for Your Smile",
      mainDescription: "Full mouth rehab is a life-changing treatment for patients with multiple missing or damaged teeth. We restore every aspect of your smile, from correcting bite issues to restoring aesthetics, so you can eat, speak, and live with confidence.",
      heroContentImage: "/images/services/subhero-full-mouth-rehab.jpg",
      additionalSections: [
        {
          title: "Who Needs Full Mouth Rehab?",
          content: "Patients who have lost multiple teeth due to decay, trauma, or gum disease, as well as those with severely worn-down teeth, chronic jaw pain, or extensive dental work that has failed over time, are ideal candidates for full mouth rehabilitation.",
          image: "/images/services/full-mouth-rehab-info.jpg",
          subsections: [
            {
              subtitle: "The Rehabilitation Process",
              text: "The process begins with a detailed diagnostic phase, followed by a phased treatment plan that may include a combination of implants, crowns, veneers, and other restorative procedures. We use digital technology to ensure precise and predictable results.",
              image: "/images/services/full-mouth-rehab-patient.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "teeth-restoration",
    title: "Teeth Restoration",
    shortDescription: "Repairing and restoring damaged teeth to their original function and beauty. Our services include fillings, inlays, onlays, and crowns to ensure a healthy, long-lasting smile.",
    iconPath: "/images/icons/teeth-restoration.svg",
    longDescription: "Teeth restoration is a crucial part of general dentistry that aims to repair teeth damaged by decay, trauma, or wear. We use high-quality materials, such as tooth-colored composite resins and durable ceramics, to restore your teeth seamlessly. Our goal is to provide restorations that are not only functional but also aesthetically pleasing, preserving your natural smile.",
    heroImage: "/images/services/teeth-restoration-hero.jpg",
    infographicImages: "/images/services/teeth-restoration-info1.png",
      
    
    seo: {
      title: "Teeth Restoration in Pune | Fillings, Crowns & Inlays",
      description: "Restore your damaged teeth with our advanced teeth restoration services in Pune. We provide fillings, crowns, and other restorative treatments for a healthy smile.",
      keywords: [
        "teeth restoration",
        "dental fillings",
        "inlays and onlays",
        "dental crowns",
      ],
    },
    beforeAfterCategory: "teeth-restoration",
    features: [
      {
        icon: "/images/icons/natural.svg",
        title: "Natural-Looking Materials",
        description: "Tooth-colored fillings and crowns for a seamless smile"
      },
      {
        icon: "/images/icons/strong.svg",
        title: "Durable & Strong",
        description: "Long-lasting restorations that can withstand daily use"
      },
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Preserves Tooth Structure",
        description: "Minimally invasive techniques to save your natural teeth"
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Efficient Procedures",
        description: "Get your teeth restored quickly and comfortably"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Diagnosis and Planning",
        description: "Identifying the extent of damage and planning the restoration"
      },
      {
        stepNumber: 2,
        title: "Preparing the Tooth",
        description: "Gently removing decayed or damaged portions of the tooth"
      },
      {
        stepNumber: 3,
        title: "Placing the Restoration",
        description: "Applying the filling, inlay, onlay, or crown for a perfect fit"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/restoration-before-1.jpg",
        after: "/images/before-after/restoration-after-1.jpg",
        description: "Composite filling on a decayed molar"
      },
      {
        before: "/images/before-after/restoration-before-2.jpg",
        after: "/images/before-after/restoration-after-2.jpg",
        description: "Crown placement on a chipped front tooth"
      },
      {
        before: "/images/before-after/restoration-before-3.jpg",
        after: "/images/before-after/restoration-after-3.jpg",
        description: "Inlay to restore a large cavity"
      }
    ],
    detailedContent: {
      mainTitle: "Restore Your Smile's Health & Beauty",
      mainDescription: "Whether it's a small cavity or a large fracture, our restorative treatments bring your teeth back to life. We use advanced techniques and materials to ensure your restoration is both strong and visually indistinguishable from your natural teeth.",
      heroContentImage: "/images/services/subhero-restoration.jpg",
      additionalSections: [
        {
          title: "Types of Restorative Procedures",
          content: "We offer a full range of restorative options, from simple composite fillings for minor decay to more extensive crowns and bridges for severely damaged or missing teeth. Each procedure is performed with precision and an eye for detail.",
          image: "/images/services/restoration-types.jpg",
          subsections: [
            {
              subtitle: "Benefits of Restoring Damaged Teeth",
              text: "Restoring damaged teeth prevents further decay, alleviates pain, and improves your ability to chew and speak. It also helps maintain your facial structure and boosts your self-confidence.",
              image: "/images/services/restoration-benefits.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "oral-surgery",
    "title": "Oral Surgery",
    "shortDescription": "Our expert oral surgery services cover a range of procedures, from routine extractions to complex surgical treatments, ensuring your oral health and comfort.",
    "iconPath": "/images/icons/oral-surgery.svg",
    "longDescription": "Oral surgery involves a variety of surgical procedures to treat injuries, diseases, and defects in the head, neck, face, jaws, and hard and soft tissues of the oral cavity. Our experienced team performs a wide range of procedures, including wisdom tooth extractions, surgical teeth extractions, sinus lifts, and oral cancer screenings, all with a focus on patient comfort and optimal outcomes.",
    "heroImage": "/images/services/oral-surgery-hero.jpg",
    "infographicImages": "/images/services/oral-surgery-info.jpg",
    "seo": {
        "title": "Oral Surgery in Pune | Wisdom Tooth Extraction & Sinus Lifts",
        "description": "Comprehensive oral surgery services in Pune. We specialize in wisdom tooth extractions, surgical extractions, sinus lifts, and oral cancer screenings for your complete oral health.",
        "keywords": [
            "oral surgery",
            "wisdom tooth extraction",
            "surgical teeth extraction",
            "sinus lift",
            "oral cancer screening",
            "oral surgeon pune"
        ]
    },
    "beforeAfterCategory": "oral-surgery",
    "features": [
        {
            "icon": "/images/icons/expert-specialist.svg",
            "title": "Experienced Surgeons",
            "description": "Procedures performed by highly trained and experienced oral surgeons"
        },
        {
            "icon": "/images/icons/clinic.svg",
            "title": "Advanced Techniques",
            "description": "We use modern surgical methods for precision and minimal discomfort"
        },
        {
            "icon": "/images/icons/gentle-care.svg",
            "title": "Effective Pain Management",
            "description": "A focus on patient comfort through local anesthesia and sedation options"
        },
        {
            "icon": "/images/icons/gentle.svg",
            "title": "Comprehensive Solutions",
            "description": "Covering a wide range of surgical needs, from simple to complex"
        }
    ],
    "processSteps": [
        {
            "stepNumber": 1,
            "title": "Initial Consultation & Diagnosis",
            "description": "We perform a thorough examination and use diagnostic imaging to create a precise treatment plan"
        },
        {
            "stepNumber": 2,
            "title": "The Surgical Procedure",
            "description": "The surgery is performed with a focus on safety, efficiency, and patient comfort"
        },
        {
            "stepNumber": 3,
            "title": "Post-Operative Care",
            "description": "We provide detailed aftercare instructions and support for a smooth recovery"
        }
    ],
    "mockBeforeAfterImages": [
        {
            "before": "/images/dummy-before.jpg",
            "after": "/images/dummy-after.jpg",
            "description": "This is a dummy image for a wisdom tooth extraction"
        },
        {
            "before": "/images/dummy-before.jpg",
            "after": "/images/dummy-after.jpg",
            "description": "This is a dummy image for a surgical extraction"
        },
        {
            "before": "/images/dummy-before.jpg",
            "after": "/images/dummy-after.jpg",
            "description": "This is a dummy image for a sinus lift procedure"
        }
    ],
    "detailedContent": {
        "mainTitle": "Expert Care for Your Surgical Needs",
        "mainDescription": "Oral surgery can be necessary for a variety of conditions, including impacted teeth, jaw problems, and oral diseases. Our clinic offers a comprehensive range of surgical services designed to improve your oral health and restore function and aesthetics with precision and care.",
        "heroContentImage": "/images/services/subhero-oral-surgery.jpg",
        "additionalSections": [
            {
                "title": "Common Oral Surgery Procedures",
                "content": "Our practice is equipped to handle a variety of procedures. This includes the removal of impacted wisdom teeth and other difficult extractions. We also perform advanced procedures like sinus lifts to prepare for dental implants and diagnose and treat oral pathologies, including oral cancer.",
                "image": "/images/services/oral-surgery-procedures.jpg",
                "subsections": [
                    {
                        "subtitle": "Wisdom Tooth & Surgical Extractions",
                        "text": "Wisdom teeth often require surgical removal due to impaction or improper growth. Surgical extractions are performed when a tooth is not easily accessible, ensuring a safe and effective removal.",
                        "image": "/images/services/wisdom-tooth-extraction.jpg"
                    },
                    {
                        "subtitle": "Sinus Lift",
                        "text": "A sinus lift is a surgical procedure that adds bone to your upper jaw in the area of your molars and premolars. This is often necessary when there is not enough bone height to place a dental implant.",
                        "image": "/images/services/sinus-lift.jpg"
                    },
                    {
                        "subtitle": "Oral Cancer Screening",
                        "text": "As a key part of our oral surgery practice, we conduct routine oral cancer screenings. This simple, non-invasive examination is crucial for the early detection of any precancerous or cancerous lesions.",
                        "image": "/images/services/oral-cancer-screening-detail.jpg"
                    }
                ]
            }
        ]
    }
},
  {
    slug: "smile-designing",
    title: "Smile Designing",
    shortDescription: "A custom-tailored cosmetic procedure to redesign your smile. From veneers to teeth whitening, we combine multiple treatments to create your perfect smile.",
    iconPath: "/images/icons/smile-designing.svg",
    longDescription: "Smile designing is a process that takes into account your unique facial features, personality, and desires to create a beautiful, harmonious smile. It can involve a combination of cosmetic procedures, such as veneers, crowns, gum contouring, and teeth whitening. Our team uses digital smile design technology to give you a preview of your new smile before the treatment begins.",
    heroImage: "/images/services/smile-designing-hero.jpg",
    infographicImages: "/images/services/smile-designing-info1.png",
      
    
    seo: {
      title: "Smile Designing in Pune | Custom Smile Makeover",
      description: "Get a custom smile design in Pune. Our cosmetic dentistry services, including veneers and teeth whitening, are tailored to create your perfect smile.",
      keywords: [
        "smile designing Pune",
        "smile makeover",
        "cosmetic dentistry",
        "digital smile design",
      ],
    },
    beforeAfterCategory: "smile-designing",
    features: [
      {
        icon: "/images/icons/face-star.svg",
        title: "Personalized Treatment Plan",
        description: "A unique plan designed just for you"
      },
      {
        icon: "/images/icons/teeth.svg",
        title: "Digital Smile Preview",
        description: "See your new smile before any work begins"
      },
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Aesthetic Excellence",
        description: "Focus on creating a beautiful and harmonious smile"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Cosmetic Dentistry Expert",
        description: "Led by a specialist in cosmetic dental procedures"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation & Analysis",
        description: "Discussing your goals and digitally analyzing your smile"
      },
      {
        stepNumber: 2,
        title: "Treatment Planning",
        description: "Creating a comprehensive plan with a detailed timeline"
      },
      {
        stepNumber: 3,
        title: "Smile Transformation",
        description: "Executing the plan and unveiling your new smile"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/smile-design-before-1.jpg",
        after: "/images/before-after/smile-design-after-1.jpg",
        description: "Smile transformation with veneers and whitening"
      },
      {
        before: "/images/before-after/smile-design-before-2.jpg",
        after: "/images/before-after/smile-design-after-2.jpg",
        description: "Correcting misalignment and discoloration"
      },
      {
        before: "/images/before-after/smile-design-before-3.jpg",
        after: "/images/before-after/smile-design-after-3.jpg",
        description: "Complete smile makeover using multiple cosmetic treatments"
      }
    ],
    detailedContent: {
      mainTitle: "Your Dream Smile, Designed by Experts",
      mainDescription: "A confident smile can change your life. Our smile designing service is more than just a dental procedure; it’s a form of art that combines aesthetics, science, and technology to create a smile that is perfect for you.",
      heroContentImage: "/images/services/subhero-smile-design.jpg",
      additionalSections: [
        {
          title: "What Does Smile Designing Involve?",
          content: "Smile designing is a holistic approach to improving your smile. It can include teeth whitening, veneers, dental bonding, crowns, or orthodontic treatment to address issues like discoloration, chipping, misalignment, or gaps between teeth.",
          image: "/images/services/smile-design-info.jpg",
          subsections: [
            {
              subtitle: "The Digital Advantage",
              text: "Our use of digital smile design software allows you to be an active participant in the process. We can show you exactly what your smile will look like and make adjustments before the treatment even begins, ensuring your complete satisfaction.",
              image: "/images/services/smile-design-digital.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    shortDescription: "Expert and gentle tooth extraction services. We prioritize your comfort and safety, ensuring a smooth and pain-free procedure when a tooth cannot be saved.",
    iconPath: "/images/icons/tooth-extraction.svg",
    longDescription: "Tooth extraction is the removal of a tooth from its socket in the bone. It's often a last resort when a tooth is too damaged from decay, trauma, or gum disease to be saved. We perform extractions with the utmost care, using local anesthesia to ensure a comfortable experience. We also provide clear aftercare instructions to promote quick healing.",
    heroImage: "/images/services/tooth-extraction-hero-large.jpg",
    infographicImages: "/images/services/tooth-extraction.jpg",
      
    
    seo: {
      title: "Tooth Extraction in Pune | Gentle & Safe Procedures",
      description: "Need a tooth extraction in Pune? We provide gentle, professional, and pain-free tooth removal services, including wisdom tooth extractions, with a focus on patient comfort.",
      keywords: [
        "tooth extraction Pune",
        "wisdom tooth removal",
        "dental surgery",
        "painless extraction",
      ],
    },
    beforeAfterCategory: "tooth-extraction",
    features: [
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Gentle & Pain-Free",
        description: "Local anesthesia for a comfortable procedure"
      },
      {
        icon: "/images/icons/face-star.svg",
        title: "Quick Recovery",
        description: "Clear aftercare instructions for a fast healing process"
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Prioritizing Safety",
        description: "Sterile environment and expert handling of instruments"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Expert Oral Surgeon",
        description: "Performed by an experienced dental professional"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Diagnosis",
        description: "Assessing the tooth and determining if extraction is necessary"
      },
      {
        stepNumber: 2,
        title: "The Procedure",
        description: "Administering anesthesia and carefully removing the tooth"
      },
      {
        stepNumber: 3,
        title: "Aftercare",
        description: "Providing post-operative care instructions to prevent complications"
      }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "Tooth extraction results are typically not shown with before-and-after images." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "Tooth extraction results are typically not shown with before-and-after images." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "Tooth extraction results are typically not shown with before-and-after images." }
    ],
    detailedContent: {
      mainTitle: "Safe & Comfortable Tooth Extractions",
      mainDescription: "While our goal is always to save your natural teeth, sometimes extraction is the best option for your oral health. We ensure the procedure is as quick, comfortable, and stress-free as possible.",
      heroContentImage: "/images/services/subhero-extraction.jpg",
      additionalSections: [
        {
          title: "When is an Extraction Necessary?",
          content: "Extractions are performed for severely decayed teeth, advanced periodontal disease, impacted wisdom teeth, or to prepare for orthodontic treatment. We will always discuss all options with you before recommending an extraction.",
          image: "/images/services/extraction-info.jpg",
          subsections: [
            {
              subtitle: "Post-Operative Care",
              text: "Proper aftercare is crucial for a smooth recovery. We will give you detailed instructions on how to manage swelling, pain, and diet to ensure the extraction site heals quickly and without complications.",
              image: "/images/services/extraction-aftercare.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "braces-and-invisalign",
    title: "Braces and Invisalign",
    shortDescription: "Straighten your smile with our advanced orthodontic solutions. We offer traditional braces and clear aligners like Invisalign for a confident, perfectly aligned smile.",
    iconPath: "/images/icons/braces-and-invisalign.svg",
    longDescription: "Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly. We offer a range of solutions, from traditional metal braces to the discreet and modern clear aligners of Invisalign. Our personalized treatment plans are designed to help you achieve a beautiful, functional, and healthy smile at any age.",
    heroImage: "/images/services/clear-aligners.jpg",
    infographicImages: "/images/services/braces-invisalign-info1.png",
      
    
    seo: {
      title: "Braces & Invisalign in Pune | Top Orthodontic Solutions",
      description: "Get a straight smile with our top-rated orthodontic services in Pune. We provide both traditional braces and clear, discreet Invisalign aligners for all ages.",
      keywords: [
        "braces Pune",
        "Invisalign Pune",
        "orthodontics",
        "straight teeth",
      ],
    },
    beforeAfterCategory: "braces-and-invisalign",
    features: [
      {
        icon: "/images/icons/face-star.svg",
        title: "Customized Treatment Plan",
        description: "A plan designed to meet your specific orthodontic needs"
      },
      {
        icon: "/images/icons/smile-plus.svg",
        title: "Discreet Options",
        description: "Choose clear aligners for an invisible treatment"
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Comfort & Convenience",
        description: "Modern solutions designed for your comfort"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Expert Orthodontist",
        description: "Treatment overseen by a certified orthodontic specialist"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation",
        description: "Digital scanning and a full evaluation of your bite"
      },
      {
        stepNumber: 2,
        title: "Treatment Begins",
        description: "Placement of braces or delivery of your first set of aligners"
      },
      {
        stepNumber: 3,
        title: "Maintenance & Follow-up",
        description: "Regular check-ups to monitor progress and adjust treatment"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/braces-before-1.jpg",
        after: "/images/before-after/braces-after-1.jpg",
        description: "Correcting severe crowding with braces"
      },
      {
        before: "/images/before-after/invisalign-before-1.jpg",
        after: "/images/before-after/invisalign-after-1.jpg",
        description: "Transforming a smile with Invisalign aligners"
      },
      {
        before: "/images/before-after/braces-before-2.jpg",
        after: "/images/before-after/braces-after-2.jpg",
        description: "Closing gaps and aligning teeth"
      }
    ],
    detailedContent: {
      mainTitle: "Achieve the Straight Smile You've Always Wanted",
      mainDescription: "Whether you choose traditional braces or the clear, removable convenience of Invisalign, we can help you achieve a perfectly aligned smile. Orthodontic treatment not only improves aesthetics but also enhances your oral health.",
      heroContentImage: "/images/services/subhero-braces.jpg",
      additionalSections: [
        {
          title: "Braces vs. Invisalign",
          content: "Traditional braces are a time-tested solution for a wide range of orthodontic issues. Invisalign offers a nearly invisible alternative, using a series of custom-made clear aligners that are comfortable and easy to remove. We will help you determine the best option for your needs and lifestyle.",
          image: "/images/services/braces-invisalign-compare.jpg",
          subsections: [
            {
              subtitle: "The Importance of Orthodontics",
              text: "Properly aligned teeth are easier to clean, reducing the risk of cavities and gum disease. They also improve your bite, which can prevent problems like TMJ disorders and excessive wear on your teeth.",
              image: "/images/services/braces-importance.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    shortDescription: "Restore damaged or missing teeth with custom-made crowns and bridges. These durable solutions improve function, aesthetics, and overall oral health.",
    iconPath: "/images/icons/crowns-bridges.svg",
    longDescription: "Dental crowns are caps that are placed over a damaged tooth to restore its shape, size, strength, and appearance. Dental bridges are used to replace one or more missing teeth by anchoring to the teeth on either side of the gap. Both are custom-made to blend seamlessly with your natural teeth and are a reliable solution for a strong, beautiful smile.",
    heroImage: "/images/services/crowns-bridges-hero.jpg",
    infographicImages: "/images/services/crowns-bridges.jpg",
        
    seo: {
      title: "Dental Crowns & Bridges in Pune | Tooth Restoration",
      description: "Get high-quality dental crowns and bridges in Pune to restore damaged or missing teeth. Our custom restorations are durable and blend with your natural smile.",
      keywords: [
        "dental crowns Pune",
        "dental bridges Pune",
        "tooth restoration",
        "tooth replacement",
      ],
    },
    beforeAfterCategory: "crowns-and-bridges",
    features: [
      {
        icon: "/images/icons/strong.svg",
        title: "Strength & Durability",
        description: "Made from strong materials for long-lasting results"
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Natural Aesthetics",
        description: "Custom-colored to match your existing teeth perfectly"
      },
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Restores Function",
        description: "Improves your ability to chew and speak comfortably"
      },
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Expert Craftsmanship",
        description: "Precision-made restorations for a perfect fit"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Preparation",
        description: "Preparing the tooth and taking an impression for the crown or bridge"
      },
      {
        stepNumber: 2,
        title: "Fabrication",
        description: "The custom crown or bridge is created in a lab"
      },
      {
        stepNumber: 3,
        title: "Placement",
        description: "The final restoration is bonded securely to your teeth"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/crown-before-1.jpg",
        after: "/images/before-after/crown-after-1.jpg",
        description: "Crown placement on a broken front tooth"
      },
      {
        before: "/images/before-after/bridge-before-1.jpg",
        after: "/images/before-after/bridge-after-1.jpg",
        description: "Replacing a missing tooth with a dental bridge"
      },
      {
        before: "/images/before-after/crown-before-2.jpg",
        after: "/images/before-after/crown-after-2.jpg",
        description: "Restoring a worn-down molar with a crown"
      }
    ],
    detailedContent: {
      mainTitle: "Complete Your Smile with Crowns & Bridges",
      mainDescription: "Crowns and bridges are essential tools in restorative dentistry. They not only fill gaps and protect weak teeth but also improve your overall oral health by preventing shifting teeth and stabilizing your bite. Our high-quality, custom-made restorations are designed to last.",
      heroContentImage: "/images/services/subhero-crowns-bridges.jpg",
      additionalSections: [
        {
          title: "The Difference Between Crowns and Bridges",
          content: "A crown is used to cap or cover a single damaged tooth. A bridge, on the other hand, is a series of crowns used to span a gap where teeth are missing. Both are fixed solutions, meaning they are cemented onto existing teeth or implants and are not removable.",
          image: "/images/services/crowns-bridges-info.jpg",
          subsections: [
            {
              subtitle: "The Fabrication Process",
              text: "Our restorations are created using high-quality materials such as ceramic and porcelain, ensuring a perfect color match and a natural feel. We use precise digital impressions to ensure an exact fit and a comfortable, beautiful result.",
              image: "/images/services/crowns-bridges-lab.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Brighten your smile with our safe and effective professional teeth whitening services. Achieve a dazzling, confident smile in just one visit.",
    iconPath: "/images/icons/teeth-whitening.svg",
    longDescription: "Professional teeth whitening is a popular cosmetic dental procedure that can significantly lighten the shade of your teeth. Unlike over-the-counter products, our in-office treatment provides dramatic, long-lasting results in a single appointment. We use a high-concentration whitening gel, activated by a special light, for a quick and safe procedure.",
    heroImage: "/images/services/teeth-whitening-hero.jpg",
    infographicImages: 
      "/images/services/teeth-whitening-info1.png",
      
    
    seo: {
      title: "Teeth Whitening in Pune | Professional & Safe Whitening",
      description: "Get a brighter smile with our professional teeth whitening services in Pune. Our safe, in-office treatments provide dramatic and long-lasting results in a single visit.",
      keywords: [
        "teeth whitening Pune",
        "professional whitening",
        "brighten teeth",
        "bleaching",
      ],
    },
    beforeAfterCategory: "teeth-whitening",
    features: [
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Instant Results",
        description: "See a noticeable difference in just one session"
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Safe & Effective",
        description: "Performed by a professional in a controlled environment"
      },
      {
        icon: "/images/icons/smile-plus.svg",
        title: "Long-Lasting Brightness",
        description: "Enjoy a radiant smile for a long time with proper care"
      },
      {
        icon: "/images/icons/face-star.svg",
        title: "Customized Treatment",
        description: "Tailored to your desired shade and sensitivity level"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation",
        description: "Assessing your oral health and discussing whitening goals"
      },
      {
        stepNumber: 2,
        title: "Preparation",
        description: "Protecting your gums and lips before applying the gel"
      },
      {
        stepNumber: 3,
        title: "Whitening Procedure",
        description: "Applying the professional-grade gel and activating with light"
      }
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/before-after/whitening-before-1.jpg",
        after: "/images/before-after/whitening-after-1.jpg",
        description: "Removing stains for a visibly brighter smile"
      },
      {
        before: "/images/before-after/whitening-before-2.jpg",
        after: "/images/before-after/whitening-after-2.jpg",
        description: "Achieving a radiant, confident smile"
      },
      {
        before: "/images/before-after/whitening-before-3.jpg",
        after: "/images/before-after/whitening-after-3.jpg",
        description: "Dramatic whitening results in a single session"
      }
    ],
    detailedContent: {
      mainTitle: "Unleash the Radiance of Your Smile",
      mainDescription: "A bright, white smile can significantly boost your confidence. Our professional teeth whitening service effectively removes stains from coffee, tea, and other foods, giving you a brilliant, youthful smile that you'll be proud to show off.",
      heroContentImage: "/images/services/subhero-whitening.jpg",
      additionalSections: [
        {
          title: "How Professional Whitening Works",
          content: "We use a powerful, yet safe, hydrogen peroxide-based gel that penetrates the enamel to break down and lift stains. This process is much more effective and safer than using over-the-counter whitening kits, which can cause sensitivity and uneven results.",
          image: "/images/services/whitening-info.jpg",
          subsections: [
            {
              subtitle: "Maintaining Your Results",
              text: "To maintain your bright smile, we recommend avoiding stain-causing foods and drinks, practicing good oral hygiene, and scheduling regular professional cleanings.",
              image: "/images/services/whitening-maintenance.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "cleaning-and-polishing",
    title: "Cleaning and Polishing",
    shortDescription: "A professional dental cleaning is the cornerstone of great oral health. Our thorough cleaning and polishing services remove plaque, tartar, and surface stains for a healthier, brighter smile.",
    iconPath: "/images/icons/cleaning-and-polishing.svg",
    longDescription: "Routine dental cleaning, also known as prophylaxis, is essential for preventing cavities, gum disease, and other oral health issues. Our skilled hygienists use specialized tools to remove stubborn plaque and tartar that regular brushing and flossing can't reach. The final polishing step removes surface stains, leaving your teeth feeling smooth and looking brighter.",
    heroImage: "/images/services/cleaning-polishing-hero.jpg",
    infographicImages: "/images/services/cleaning-polishing-info1.png",
      
    seo: {
      title: "Dental Cleaning & Polishing in Pune | Professional Teeth Cleaning",
      description: "Keep your smile healthy and sparkling with our professional dental cleaning and polishing services in Pune. We remove plaque and tartar for a fresh, clean feeling.",
      keywords: [
        "dental cleaning Pune",
        "teeth polishing",
        "oral hygiene",
        "plaque removal",
      ],
    },
    beforeAfterCategory: "cleaning-and-polishing",
    features: [
      {
        icon: "/images/icons/teeth.svg",
        title: "Plaque & Tartar Removal",
        description: "Thorough cleaning to prevent cavities and gum disease"
      },
      {
        icon: "/images/icons/smile-plus.svg",
        title: "Brighter Smile",
        description: "Polishing removes surface stains for a whiter look"
      },
      {
        icon: "/images/icons/natural.svg",
        title: "Fresh Breath",
        description: "Eliminates bacteria that cause bad breath"
      },
      {
        icon: "/images/icons/tooth-tick.svg",
        title: "Preventive Care",
        description: "A crucial step in maintaining long-term oral health"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Examination",
        description: "A visual check for any signs of dental issues"
      },
      {
        stepNumber: 2,
        title: "Scaling",
        description: "Using an ultrasonic scaler to remove plaque and tartar"
      },
      {
        stepNumber: 3,
        title: "Polishing",
        description: "Smoothing the tooth surface to prevent future plaque buildup"
      }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "While cleaning improves appearance, before-and-after images are not standard." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "While cleaning improves appearance, before-and-after images are not standard." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "While cleaning improves appearance, before-and-after images are not standard." }
    ],
    detailedContent: {
      mainTitle: "The Foundation of a Healthy Smile",
      mainDescription: "Regular dental cleanings are the most effective way to maintain a healthy mouth. They help prevent the buildup of plaque and tartar, which are the main culprits behind gum disease and cavities. A clean mouth is a healthy mouth!",
      heroContentImage: "/images/services/subhero-cleaning.jpg",
      additionalSections: [
        {
          title: "The Importance of Regular Cleanings",
          content: "Even with excellent home care, some plaque and tartar buildup is inevitable. Professional cleanings can reach areas that you can't, helping to prevent more serious issues and giving you an opportunity for a complete check-up with your dentist.",
          image: "/images/services/cleaning-info.jpg",
          subsections: [
            {
              subtitle: "Polishing for a Brighter Smile",
              text: "The polishing step not only leaves your teeth feeling incredibly smooth but also removes many of the stains caused by coffee, tea, and other foods, giving you a naturally brighter smile without a full whitening procedure.",
              image: "/images/services/cleaning-polishing-info.jpg"
            }
          ]
        }
      ]
    }
  },
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    shortDescription: "Gentle and compassionate dental care for children. We focus on creating a positive, fun environment to help your child build a foundation for a lifetime of healthy dental habits.",
    iconPath: "/images/icons/kids-dentistry.svg",
    longDescription: "Pediatric dentistry is dedicated to the oral health of children from infancy through the teen years. Our kid-friendly clinic and gentle approach make dental visits a positive experience. We focus on preventive care, including cleanings, fluoride treatments, and sealants, to protect your child's developing teeth from cavities.",
    heroImage: "/images/services/pediatric-dentistry-large.jpg",
    infographicImages: "/images/services/pediatric-dentistry.jpg",
    
    seo: {
      title: "Kids Dentistry in Pune | Gentle Pediatric Dental Care",
      description: "We offer specialized kids dentistry in Pune. Our friendly team provides gentle care, from first visits to braces, in a fun and welcoming environment.",
      keywords: [
        "kids dentist Pune",
        "pediatric dentistry",
        "children's dental care",
        "first dental visit",
      ],
    },
    beforeAfterCategory: "kids-dentistry",
    features: [
      {
        icon: "/images/icons/child.svg",
        title: "Child-Friendly Environment",
        description: "A fun and welcoming clinic designed for kids"
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Preventive Care",
        description: "Focus on preventing cavities with sealants and fluoride"
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Gentle Approach",
        description: "Our team is trained to be gentle and patient with children"
      },
      {
        icon: "/images/icons/brush-paste.svg",
        title: "Dental Education",
        description: "Teaching kids and parents about proper oral hygiene"
      }
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "The First Visit",
        description: "A positive introduction to the dental office for your child"
      },
      {
        stepNumber: 2,
        title: "Check-up & Cleaning",
        description: "A gentle cleaning, fluoride treatment, and oral health check"
      },
      {
        stepNumber: 3,
        title: "Ongoing Care",
        description: "Monitoring dental development and providing continued care"
      }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "This service does not typically have before-and-after images." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "This service does not typically have before-and-after images." },
      { before: "/images/dummy.jpg", after: "/images/dummy.jpg", description: "This service does not typically have before-and-after images." }
    ],
    detailedContent: {
      mainTitle: "Building a Foundation for a Lifetime of Smiles",
      mainDescription: "A child's early experiences at the dentist can shape their attitude towards oral health for life. We aim to make every visit a positive one, building trust and a foundation for lifelong healthy habits.",
      heroContentImage: "/images/services/pediatric-dentistry-subhero.jpg",
      additionalSections: [
        {
          title: "Why Pediatric Dentistry is Important",
          content: "Children's teeth require specialized care to ensure proper development. Our pediatric dental services address issues unique to children, such as teething, thumb-sucking, and baby tooth decay, to ensure a healthy transition to permanent teeth.",
          image: "/images/services/pediatric-dentistry1.jpg",
          subsections: [
            {
              subtitle: "Preventive Treatments",
              text: "We offer preventive treatments like dental sealants, which act as a barrier to protect molars from decay, and fluoride applications to strengthen enamel and make teeth more resistant to cavities.",
              image: "/images/services/kids-dentistry-preventive.jpg"
            }
          ]
        }
      ]
    }
  },
];