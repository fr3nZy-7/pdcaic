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
    shortDescription:
      "Relieve pain, save your natural tooth, and restore function with advanced root canal therapy in a single or minimal visits.",
    iconPath: "/images/icons/root-canal.svg",
    longDescription:
      "Root canal treatment is a highly effective procedure that can save your natural tooth when the inner pulp becomes infected or severely damaged. At our clinic, we use state-of-the-art technology and gentle techniques to make this essential treatment as comfortable and successful as possible.",
    heroImage: "/images/services/root-canal-large.jpg",
    infographicImages: "/images/services/rct.jpg",
    seo: {
      title: "Root Canal Treatment in Pune | Painless & Efficient",
      description:
        "Painless root canal in Pune — advanced rotary endodontics, digital imaging, and single-visit RCTs to save natural teeth with precision.",
      keywords: [
        "root canal Pune",
        "RCT Pune",
        "painless root canal Pune",
        "single sitting root canal Pune",
        "endodontist Pune",
      ],
    },
    beforeAfterCategory: "root-canal",
    features: [
      {
        icon: "/images/icons/pain-free-treatment.svg",
        title: "Pain-Free Treatment",
        description: "Advanced anesthesia ensures comfort",
      },
      {
        icon: "/images/icons/clinic.svg",
        title: "Single-Sitting RCT",
        description: "Many cases finished in one visit",
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Tooth Preservation",
        description: "Saves your natural tooth structure",
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Durable Results",
        description: "Long-term restoration and protection",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Diagnosis & Imaging",
        description: "X-rays confirm infection and treatment plan",
      },
      {
        stepNumber: 2,
        title: "Cleaning & Shaping",
        description: "Infected pulp removed, canals disinfected",
      },
      {
        stepNumber: 3,
        title: "Filling & Restoration",
        description:
          "Root canals sealed and tooth restored with filling/crown",
      },
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/dummy-before.jpg",
        after: "/images/dummy-after.jpg",
        description: "Infected molar saved with root canal",
      },
    ],
    detailedContent: {
      mainTitle: "Save Your Tooth with Modern Root Canal",
      mainDescription:
        "Root canal treatment is safe, comfortable, and highly effective in stopping infection while preserving your natural tooth.",
      heroContentImage: "/images/services/rct-subhero.jpg",
      additionalSections: [
        {
          title: "What is Root Canal Treatment?",
          content:
            "Root canal therapy removes infected or inflamed tissue from inside your tooth's root canals, eliminating pain and preventing the spread of infection. This procedure allows you to keep your natural tooth rather than having it extracted, preserving your smile and bite function.",
          image: "/images/services/rct-info-1.jpg",
          subsections: [
            {
              subtitle: "Save Your Natural Tooth with Advanced Endodontic Care",
              text: "Root canal treatment is a highly effective procedure that can save your natural tooth when the inner pulp becomes infected or severely damaged. At our clinic, we use **state-of-the-art technology** and gentle techniques to make this essential treatment as comfortable and successful as possible.",
              image: "/images/services/root-canal-relief.jpg",
            },
           
          ],
        },

        {
          title: "Why Choose Our Clinic for Root Canal Treatment?",
          content:
            "Root canal eliminates pain, infection, and prevents tooth loss. With modern methods, it’s no longer the dreaded procedure of the past.",
          image: "/images/services/rct-info-1.jpg",
          subsections: [
            {
              subtitle: "Advanced Technology & Techniques",
              text: `**1. Digital X-rays** for precise diagnosis and treatment planning, 
              **2. Rotary endodontic instruments** for thorough yet gentle cleaning 
              **3. Electronic apex locators** to ensure complete treatment of all canals 
              **4. Enhanced precision** with all root canals performed under magnification`,
              image: "/images/services/root-canal-relief.jpg",
            },
            {
              subtitle: "Comfort-Focused Care",
              text: `**1. Local anesthesia** to ensure you feel no pain during treatment 
              **2. Sedation options** available for anxious patients 
              **3. Comfortable treatment environment** designed to put you at ease 
              **4. Pain management protocols** for post-treatment comfort`,
              image: "/images/services/root-canal-modern.jpg",
            },
            {
              subtitle: "Expert Experience",
              text: `**1. Experienced endodontic specialists** with extensive training
              **2. High success rates** with proven treatment outcomes
              **3. Comprehensive follow-up care** to monitor healing
              **4. Emergency availability** for urgent cases`,
              image: "/images/services/root-canal-modern.jpg",
            },
          ],
        },
        {
          title: "Comprehensive Endodontic Services",
          content:
            "Beyond standard root canal treatment, we offer a full range of specialized endodontic procedures:",
          image: "/images/services/rct-info-1.jpg",
          subsections: [
            {
              subtitle: "Root Canal Retreatment",
              text: "When a previously treated tooth develops new problems or fails to heal properly, retreatment can often save the tooth.",
              image: "/images/services/1.jpg",
            },
            {
              subtitle: "Endodontic Surgery (Apicoectomy)",
              text: "Surgical procedure to remove infected tissue and seal the root tip when conventional treatment isn't sufficient.",
              image: "/images/services/root-canal-modern.jpg",
            },
            {
              subtitle: "Post and Core Placement",
              text: "Strengthening treatment for extensively damaged teeth that require additional internal support before crown placement.",
              image: "/images/services/root-canal-modern.jpg",
            },
            {
              subtitle: "Traumatic Injury Treatment",
              text: "Emergency care for teeth damaged by sports injuries, accidents, or trauma.",
              image: "/images/services/root-canal-modern.jpg",
            },
            {
              subtitle: "Internal Bleaching",
              text: "Specialized whitening treatment for discolored teeth following root canal therapy.",
              image: "/images/services/root-canal-modern.jpg",
            },
          ],
        },
        {
          title: "Key Benefits of Root Canal Treatment",
          content:
            `**Preserve Your Natural Tooth**: Keep your original tooth structure and avoid the need for extraction and replacement options. 
            **Eliminate Pain**: Remove the source of infection that's causing severe toothache and sensitivity.
            **Prevent Further Complications**: Stop the spread of infection to surrounding teeth and tissues. 
            **Cost-Effective Solution**: More affordable than tooth extraction followed by implant or bridge placement. 
            **Quick Recovery**: Most patients return to normal activities within 1-2 days.`,
          image: "/images/services/rct-patient.jpg",
          subsections: [],
        },
        {
          title: "Myth vs Reality",
          content:`**1. Myth**: Root canals are extremely painful. 
          **Reality**: With modern anesthesia and techniques, root canal treatment is no more uncomfortable than getting a large filling. Most patients experience little to no pain during the procedure.
          **2. Myth**: It's better to extract the tooth. 
          **Reality**: Saving your natural tooth is almost always the best option. Root canal treatment has a 85-97% success rate and allows you to keep your original tooth structure.
          **3. Myth**: Root canals cause illness. 
          **Reality**: This outdated myth has been thoroughly debunked by scientific research. Root canal treatment actually eliminates infection and promotes healing.
          **4. Myth**: Treatment takes many appointments. 
          **Reality**: Most root canals can be completed in 1-2 visits, depending on the complexity of the case.
          **5. Myth**: Root canals always fail. 
          **Reality**: When performed properly, root canal treatments have excellent long-term success rates, often lasting a lifetime with proper care.
          **6. Myth**: Pregnant women can't have root canals. 
          **Reality**: Root canal treatment is safe during pregnancy and may be necessary to eliminate dangerous infections, offcourse safest in the 2nd trimester, and with physician's consent only`,
          image: "/images/services/rct-patient.jpg",
          subsections: [],
        },
      ],
    },
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent replacement for missing teeth. Natural look, strong function, and long-lasting results with advanced implant technology.",
    iconPath: "/images/icons/dental-implants.svg",
    longDescription:
      "Dental implants are the gold standard for replacing missing teeth. They restore both function and aesthetics by integrating with your jawbone, offering unmatched stability and a natural appearance. Our clinic uses advanced 3D imaging, premium implant systems, and guided surgery to ensure precise placement, faster healing, and lifelong confidence in your smile.",
    heroImage: "/images/services/dental-implants-hero-large.jpg",
    infographicImages: "/images/services/implant-2.jpg",
    seo: {
      title: "Dental Implants in Pune, Lohegaon | Permanent Teeth Replacement",
      description:
        "Expert dental implants in Pune — restore missing teeth with advanced implant systems, 3D-guided surgery, and natural-looking results.",
      keywords: [
        "dental implants Pune",
        "teeth replacement Pune",
        "tooth implant Pune",
        "full mouth dental implants Pune",
        "implant dentist Pune",
      ],
    },
    beforeAfterCategory: "dental-implants",
    features: [
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Natural Look & Feel",
        description: "Implants blend seamlessly with natural teeth",
      },
      {
        icon: "/images/icons/clinic.svg",
        title: "Strong & Durable",
        description: "Restores chewing strength and bite function",
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Bone Health",
        description: "Prevents jawbone loss after tooth loss",
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Lifetime Solution",
        description: "Long-lasting with proper care and checkups",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation & Imaging",
        description:
          "3D scans and planning for precise implant placement",
      },
      {
        stepNumber: 2,
        title: "Implant Placement",
        description:
          "Titanium post placed safely into the jawbone under anesthesia",
      },
      {
        stepNumber: 3,
        title: "Healing & Crown Placement",
        description:
          "Custom crown fixed after integration for a natural smile",
      },
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/dummy-before.jpg",
        after: "/images/dummy-after.jpg",
        description: "Single missing tooth replaced with implant",
      },
      {
        before: "/images/dummy-before.jpg",
        after: "/images/dummy-after.jpg",
        description: "Full arch implant-supported bridge",
      },
    ],
    detailedContent: {
      mainTitle: "Restore Your Smile with Dental Implants",
      mainDescription:
        "Implants are the closest replacement to natural teeth — giving you strength, confidence, and a healthy smile that lasts a lifetime.",
      heroContentImage: "/images/services/single-implant-case.jpg",
      additionalSections: [
        {
          title: "What are Dental Implants?",
          content:
            "Dental implants are titanium posts surgically placed into the jawbone to replace the root of a missing tooth. Once integrated with the bone, they provide a stable foundation for crowns, bridges, or dentures, offering superior stability and longevity compared to traditional tooth replacement options.",
          image: "/images/services/implant-1.jpg",
          subsections: [
            {
              subtitle: "Permanent Solution for Missing Teeth with Natural Look and Feel",
              text: `Dental implants are the gold standard for replacing missing teeth, offering a permanent, natural-looking solution that restores both function and confidence. At our clinic, we use advanced implant technology and precision techniques to give you a smile that looks, feels, and functions just like your natural teeth.`,
              image: "/images/services/dental-implants-strong.jpg",
            },
           
            
          ],
        },
        {
          title: "Why Choose Our Clinic for Dental Implants?",
          content:
            "We offer a complete range of implant solutions to meet every patient's needs:",
          image: "/images/services/implant-1.jpg",
          subsections: [
            {
              subtitle: "Advanced Technology & Precision",
              text: `**1.** 3D CT scanning for precise treatment planning and implant placement
              **2.** Computer-guided surgery for optimal accuracy and minimal invasiveness
              **3.** Digital impressions for perfect-fitting restorations
              **4.** Premium implant systems from leading manufacturers
              **5.** All procedures performed under magnification for enhanced precision`,
              image: "/images/services/dental-implants-strong.jpg",
            },
            {
              subtitle: "Comprehensive Care",
              text: `**1. In-house oral surgery** - no need for referrals to other specialists
              **2. Custom prosthetics** designed and crafted for natural appearance
              **3.** Sedation options available for anxious patients
              **4.** Full-service approach from consultation through final restoration
`,
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "Expertise & Experience",
              text: `**1.** Extensive implant training with proven surgical outcomes
              **2. High success** rates backed by years of experience
              **3.** Comprehensive follow-up care to ensure long-term success
              **4. Emergency support** for any post-surgical concerns`,
              image: "/images/services/dental-implants-bone.jpg",
            },
            
          ],
        },
        {
          title: "Comprehensive Implant Services",
          content:
            "We offer a complete range of implant solutions to meet every patient's needs:",
          image: "/images/services/implant-1.jpg",
          subsections: [
            {
              subtitle: "Single Tooth Implants:",
              text: "Replace individual missing teeth without affecting adjacent healthy teeth.",
              image: "/images/services/dental-implants-strong.jpg",
            },
            {
              subtitle: "Multiple Tooth Implants:",
              text: "Restore several missing teeth with implant-supported bridges.",
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "All-on-4/All-on-6:",
              text: "Full arch restoration using strategically placed implants to support a complete set of teeth.",
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "Implant-Supported Dentures:",
              text: "Secure, stable dentures that won't slip or move.",
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "Immediate Load Implants:",
              text: "Same-day teeth replacement in suitable cases.",
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "Bone Grafting:",
              text: "Procedures to build adequate bone support when needed.",
              image: "/images/services/dental-implants-bone.jpg",
            },
            {
              subtitle: "Sinus Lift Surgery:",
              text: "Specialized technique to create space for upper jaw implants.",
              image: "/images/services/dental-implants-bone.jpg",
            },
          ],
        },
        {
          title: "Key Benefits of Dental Implants",
          content:`**Permanent Solution**: Implants are designed to last a lifetime with proper care, unlike bridges or dentures that need replacement.
**Natural Function**: Bite and chew with confidence - implants function just like natural teeth with full chewing power.
**Preserve Facial Structure**: Prevent bone loss and maintain your natural facial appearance.
**No Impact on Adjacent Teeth**: Unlike bridges, implants don't require grinding down healthy neighboring teeth.
**Easy Maintenance**: Care for implants just like natural teeth with regular brushing and flossing.
**Improved Confidence**: Smile, speak, and eat without worry about loose or uncomfortable prosthetics.`,
          image: "/images/services/implant-2.jpg",
          subsections: [],
        },
        {
          title: "Myth vs Reality",
          content:`**1. Myth**:Implant surgery is very painful. 
          **Reality**: Most patients report minimal discomfort. Local anesthesia and sedation options ensure a comfortable experience, with most patients taking only over-the-counter pain medication afterward.
**2. Myth**: Implants are only for older people. 
**Reality**: Age is not a limiting factor. Anyone with adequate bone structure and good oral health can be a candidate for implants, regardless of age.
**3. Myth**: The process takes too long. 
**Reality**: While healing takes time, many patients can have temporary teeth the same day. The investment in proper healing ensures long-term success.
**4. Myth**: Implants are too expensive. 
**Reality**: While initial cost is higher, implants often prove more economical long-term since they don't need replacement like other options.
**5. Myth**: Implants can be rejected by the body. 
**Reality**: True rejection is extremely rare. Titanium is biocompatible and integrates naturally with bone tissue.
**6. Myth**: You can't eat normally with implants. 
**Reality**: Once healed, implants restore full chewing function. You can eat all your favorite foods without restriction.`,
          image: "/images/services/implant-2.jpg",
          subsections: [],
        },
        
      ],
    },
  },
  {
    slug: "full-mouth-rehab",
    title: "Full Mouth Rehabilitation",
    shortDescription: "Comprehensive treatment combining multiple procedures to restore function, health, and aesthetics of your entire mouth.",
    iconPath: "/images/icons/full-mouth-rehab.svg",
    longDescription: "Full mouth rehabilitation (FMR) is a customized treatment plan that restores and rebuilds all teeth in both upper and lower jaws. It combines restorative, cosmetic, and functional dentistry to address worn, missing, or damaged teeth, bite issues, and aesthetics. At our clinic, we design FMR using crowns, bridges, implants, veneers, and sometimes orthodontics — tailored to your unique needs. The result is a healthier bite, improved function, and a beautiful, confident smile.",
    heroImage: "/images/services/FMR-hero.jpg",
    infographicImages: "/images/services/full-mouth-rehab-2.jpg",
    seo: {
      title: "Full Mouth Rehabilitation in Pune | Smile & Bite Restoration",
      description: "Transform your oral health with full mouth rehabilitation in Pune. Customized treatment combining crowns, implants, veneers, and orthodontics for function and aesthetics.",
      keywords: [
        "full mouth rehabilitation Pune",
        "full mouth reconstruction Pune",
        "smile restoration Pune",
        "bite correction Pune",
        "dental makeover Pune"
      ],
    },
    beforeAfterCategory: "full-mouth-rehabilitation",
    features: [
      { icon: "/images/icons/pain-free-treatment.svg", title: "Comprehensive Care", description: "Combines multiple treatments for complete oral health" },
      { icon: "/images/icons/face-star.svg", title: "Tailored Plans", description: "Every rehabilitation is personalized to patient needs" },
      { icon: "/images/icons/tooth-tick.svg", title: "Restored Function", description: "Improved chewing, speech, and jaw comfort" },
      { icon: "/images/icons/smile-plus.svg", title: "Smile Transformation", description: "Aesthetic results for confidence and beauty" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Detailed Consultation", description: "Exams, scans, and discussion of concerns and goals" },
      { stepNumber: 2, title: "Customized Treatment Plan", description: "Combination of crowns, implants, veneers, or orthodontics designed" },
      { stepNumber: 3, title: "Phased Treatment & Completion", description: "Step-by-step execution ensuring comfort and long-lasting results" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Full mouth crowns for worn teeth" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Implants + crowns for complete restoration" }
    ],
    detailedContent: {
      mainTitle: "A Complete Transformation for Health & Confidence",
      mainDescription: "Full mouth rehabilitation goes beyond fixing teeth — it rebuilds your oral foundation, enhances your smile, and restores overall confidence.",
      heroContentImage: "/images/services/full-mouth-rehab-subhero.jpg",
      additionalSections: [
        {
          title: "What is Full Mouth Rehabilitation?",
          content: "Full mouth rehabilitation, also known as full mouth reconstruction, is a comprehensive treatment plan that addresses all dental problems affecting your bite, jaw function, and smile aesthetics. This complex procedure combines multiple dental specialties to restore your entire mouth to optimal health and function.",
          image: "/images/services/full-mouth-rehab.jpg",
          subsections: [
            { subtitle: "Complete Oral Health Transformation for Complex Dental Cases", text: "Full mouth rehabilitation is a comprehensive treatment approach that addresses multiple dental issues simultaneously to restore optimal oral health, function, and aesthetics. At our clinic, we combine advanced technology with artistic expertise to give you a completely transformed smile and renewed confidence.", image: "/images/services/worn-teeth.jpg" },
            
            
          ]
        },
        {
          title: "Why Choose Our Clinic for Full Mouth Rehabilitation?",
          content: "We offer comprehensive solutions to meet every patient's needs:",
          image: "/images/services/full-mouth-rehab.jpg",
          subsections: [
            { subtitle: "Advanced Diagnostic Technology", 
              text: `**1.** 3D CT imaging for comprehensive anatomical assessment
              **2.** Digital smile design to preview your transformation
              **3.** Bite analysis technology for optimal jaw function
              **4.** Intraoral cameras for detailed documentation
              **5.** All procedures performed under magnification for precision`, 
              image: "/images/services/worn-teeth.jpg" },
            { subtitle: "Comprehensive Treatment Planning", 
              text:`**1.** Interdisciplinary approach combining multiple specialties
              **2.** Phased treatment plans to manage complex cases systematically
              **3.** Computer-guided procedures for predictable outcomes
              **4.** Custom treatment protocols tailored to your specific needs`, 
              image: "/images/services/missing-teeth.jpg" },
            { subtitle: "Expert Care Team", 
              text: `**1.** Extensive rehabilitation experience with complex cases
              **2.** Advanced training in multiple dental disciplines
              **3.** Proven track record of successful transformations
              **4.** Ongoing education in latest techniques and materials`, 
              image: "/images/services/bite-issues.jpg" },
              { subtitle: "Comfort & Convenience", 
              text: `**1.** Sedation options for anxious patients
              **2. Single-location care** - no referrals to multiple offices
              **3.** Flexible scheduling to accommodate extensive treatment
              **4.** Comprehensive support throughout your journey`, 
              image: "/images/services/bite-issues.jpg" }
          ]
        },
        {
          title: "Comprehensive Rehabilitation Services",
          content: "Our full mouth rehabilitation encompasses a wide range of specialized treatments:",
          image: "/images/services/full-mouth-rehab.jpg",
          subsections: [
            { subtitle: "Restorative Dentistry:", text: "Crowns, bridges, veneers, and onlays to restore damaged teeth.", image: "/images/services/worn-teeth.jpg" },
            { subtitle: "Dental Implants:", text: "Single implants, multiple implants, and full arch replacements for missing teeth.", image: "/images/services/missing-teeth.jpg" },
            { subtitle: "Orthodontic Correction:", text: "Alignment of teeth and bite correction when needed.", image: "/images/services/bite-issues.jpg" },
            { subtitle: "Endodontic Treatment:", text: "Root canal therapy performed under magnification for infected teeth.", image: "/images/services/bite-issues.jpg" },
            { subtitle: "Oral Surgery:", text: "Extractions, bone grafting, and surgical preparation procedures.", image: "/images/services/bite-issues.jpg" },
            { subtitle: "TMJ Treatment:", text: "Addressing jaw joint disorders and bite dysfunction.", image: "/images/services/bite-issues.jpg" },
            { subtitle: "Cosmetic Enhancement:", text: "Teeth whitening, smile design, and aesthetic improvements.", image: "/images/services/bite-issues.jpg" },
            { subtitle: "Occlusal Therapy:", text: "Bite adjustment and equilibration for proper jaw function.", image: "/images/services/bite-issues.jpg" }
          ]
        },
        {
          title: "Key Benefits of Full Mouth Rehabilitation",
          content: `**Complete Oral Health Restoration**: Address all dental problems in a coordinated treatment plan rather than piecemeal solutions.
          **Improved Function**: Restore proper chewing, speaking, and jaw function for better quality of life.
          **Enhanced Aesthetics**: Achieve a beautiful, natural-looking smile that complements your facial features.
          **Long-term Stability**: Comprehensive approach ensures lasting results and prevents future problems.
          **Increased Confidence**: Transform not just your smile but your self-esteem and social interactions.
          **Better Overall Health**: Improved oral health contributes to better systemic health and well-being.
`,
          image: "/images/services/full-mouth-rehab.jpg",
          subsections: [
          ]
        },
        {
          title: "Myths vs Reality",
          content: `**1. Myth**: Treatment takes years to complete. 
          **Reality**: Most full mouth rehabilitations are completed in 6-18 months with proper planning. Some cases can be finished even faster with immediate solutions.
**2. Myth**: It's only for severely damaged mouths. 
**Reality**: While it addresses complex cases, full mouth rehabilitation can benefit anyone wanting comprehensive oral health improvement and smile enhancement.
**3. Myth**: The process is too painful. 
**Reality**: Modern techniques and sedation options make treatment comfortable. Most patients report minimal discomfort throughout the process.
**4. Myth**: Results don't look natural. 
**Reality**: Advanced materials and digital design create incredibly natural-looking results that are customized to your facial features and preferences.
**5. Myth**: It's too expensive. 
**Reality**: While comprehensive, the coordinated approach often costs less than treating problems separately over time, and provides superior long-term value.
**6. Myth**: You can't function normally during treatment. 
**Reality**: Temporary restorations maintain function and aesthetics throughout treatment, so you can continue normal activities. `,
          image: "/images/services/full-mouth-rehab-2.jpg",
          subsections: [
            
          ]
        }
      ]
    }
  },
  
  {
    slug: "teeth-restoration",
    title: "Teeth Restoration",
    shortDescription: "Repair damaged, decayed, or broken teeth with advanced restorative techniques for natural appearance and function.",
    iconPath: "/images/icons/teeth-restoration.svg",
    longDescription: "Teeth restoration involves repairing teeth affected by cavities, fractures, or wear using modern dental materials and techniques. Our clinic provides fillings, inlays, onlays, and bonding to restore teeth to their natural form and function. With tooth-colored composite and ceramic options, restorations are strong, long-lasting, and blend seamlessly with your smile.",
    heroImage: "/images/services/teeth-restoration-hero.jpg",
    infographicImages: "/images/services/teeth-restoration-info.png",
    seo: {
      title: "Teeth Restoration in Pune | Fillings, Bonding & More",
      description: "Fix decayed, cracked, or broken teeth with advanced dental restorations in Pune. Tooth-colored fillings, inlays, onlays, and bonding available.",
      keywords: [
        "teeth restoration Pune",
        "tooth filling Pune",
        "dental bonding Pune",
        "inlay onlay Pune",
        "restorative dentistry Pune"
      ],
    },
    beforeAfterCategory: "teeth-restoration",
    features: [
      { icon: "/images/icons/tooth-tick.svg", title: "Tooth-Colored Options", description: "Composite and ceramic restorations for natural look" },
      { icon: "/images/icons/strong.svg", title: "Strong & Durable", description: "Restorations designed to withstand chewing forces" },
      { icon: "/images/icons/gentle-care.svg", title: "Quick & Painless", description: "Most procedures completed in a single visit" },
      { icon: "/images/icons/gentle.svg", title: "Minimally Invasive", description: "Maximum tooth preservation with modern methods" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Assessment & X-rays", description: "Identify extent of decay or damage" },
      { stepNumber: 2, title: "Tooth Preparation", description: "Decay removal and surface shaping" },
      { stepNumber: 3, title: "Restoration Placement", description: "Composite, ceramic, or bonding applied and polished" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Cavity filled with tooth-colored composite" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Fractured tooth restored with bonding" }
    ],
    detailedContent: {
      mainTitle: "Repair & Protect Your Teeth",
      mainDescription: "Restorative dentistry not only fixes problems but also prevents future damage. Our focus is on preserving natural teeth with minimally invasive methods.",
      heroContentImage: "/images/services/subhero-teeth-restoration.jpg",
      additionalSections: [
        {
          title: "What are Direct Composite Restorations?",
          content: "Direct composite restorations are tooth-colored materials that are applied, shaped, and hardened directly on your tooth during your visit. These mercury-free, aesthetic restorations bond chemically to your tooth structure, providing excellent strength while preserving maximum natural tooth material.",
          image: "/images/services/restoration-types.jpg",
          subsections: [
            { subtitle: "Direct Composite Restorations", text: "Natural-Looking, Same-Day Tooth Repairs with Advanced Composite Materials. Direct composite restorations are tooth-colored fillings and repairs that are sculpted and cured directly in your mouth during a single appointment. At our clinic, we use the finest composite materials and artistic techniques to create restorations that are virtually indistinguishable from your natural teeth.", image: "/images/services/composite-filling.jpg" },
           
          ]
        },
        {
          title: "Why Choose Our Clinic for Direct Composite Restorations?",
          content: "Depending on the extent of damage, we use different approaches — from simple fillings to advanced onlays and inlays.",
          image: "/images/services/restoration-types.jpg",
          subsections: [
            { subtitle: "Advanced Composite Technology", text: `**1.** High-quality nano-hybrid composites with superior strength and polish retention
              **2.** Multiple shade options for perfect color matching to your natural teeth
              **3.** Advanced bonding agents for long-lasting adhesion
              **4.** Light-curing technology for optimal polymerization and durability
              **5.** All procedures performed under magnification for exceptional precision and detail`, image: "/images/services/composite-filling.jpg" },
            { subtitle: "Artistic Excellence", text: `**1.** Layering techniques to mimic natural tooth translucency and depth
              **2.** Custom shade blending for seamless integration with surrounding teeth
              **3.** Anatomical sculpting to restore natural tooth contours and function
              **4.** Surface texturing to match the natural characteristics of your teeth`, image: "/images/services/inlay-onlay.jpg" },
            { subtitle: "Conservative Approach", text: `**1.** Minimal tooth preparation preserving maximum natural tooth structure
              **2.** Biomimetic materials that flex and function like natural enamel
              **3.** Same-day completion with no need for temporary restorations
              **4.** Immediate function - eat and drink normally right after treatment`, image: "/images/services/dental-bonding.jpg" },
              { subtitle: "Quality & Comfort", text: `**1.** Pain-free procedures with gentle techniques and effective anesthesia
              **2.** Smooth, comfortable surfaces that feel natural
              **3.** Long-lasting results with proper care and maintenance
              **4.** Comprehensive aftercare instructions and support`, image: "/images/services/dental-bonding.jpg" }
          ]
        },
        {
          title: "Comprehensive Direct Composite Services",
          content: "We offer a complete range of direct composite treatments:",
          image: "/images/services/restoration-types.jpg",
          subsections: [
            { subtitle: "Composite Fillings:", text: "Mercury-free, tooth-colored fillings for cavities in both front and back teeth.", image: "/images/services/composite-filling.jpg" },
            { subtitle: "Dental Bonding:", text: "Sculpted composite to repair chips, close gaps, reshape teeth, and improve appearance.", image: "/images/services/inlay-onlay.jpg" },
            { subtitle: "Cosmetic Contouring:", text: "Minor reshaping and smoothing of tooth irregularities.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Enamel Repair:", text: "Restoration of worn or damaged enamel surfaces.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Cosmetic Contouring:", text: "Minor reshaping and smoothing of tooth irregularities.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Gap Closure:", text: "Closing small spaces between teeth without orthodontics.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Chip and Fracture Repair:", text: "Immediate restoration of broken or damaged tooth edges.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Smile Enhancement:", text: "Improving tooth shape, size, and color in a single visit.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "White Spot Treatment:", text: "Covering discolored areas and white spots on teeth.", image: "/images/services/dental-bonding.jpg" },
            { subtitle: "Emergency Repairs:", text: "Same-day treatment for damaged teeth.", image: "/images/services/dental-bonding.jpg" },

          ],
          
        },
        {
          title: "Key Benefits of Direct Composite Restorations",
          content: `**Same-Day Results**: Complete treatment in a single appointment with immediate results.
          **Natural Appearance**: Advanced composites blend seamlessly with your natural tooth color and translucency.
          **Conservative Treatment**: Minimal tooth removal preserves healthy tooth structure.
          **Strong Bond**: Chemical bonding to tooth structure often strengthens the remaining tooth.
          **Mercury-Free**: Safe, biocompatible materials with no metal content.
          **Versatile**: Can address both functional and cosmetic concerns simultaneously.
          **Cost-Effective**: More affordable than indirect restorations like crowns or veneers.
          **Repairable**: Easy to adjust, repair, or enhance if needed in the future.`,
          image: "/images/services/restoration-types.jpg",
          subsections: [
           
          ]
        },
        {
          title: "Myth vs Reality",
          content: `**1. Myth**: Composite fillings don't last as long as amalgam. 
          **Reality**: Modern composites can last 10-15 years or more with proper care, often outlasting amalgam fillings.
          **2. Myth**: White fillings stain easily. 
          **Reality**: Today's advanced composites are highly stain-resistant and maintain their color with proper oral hygiene.
          **3. Myth**: Composite restorations are weaker. 
          **Reality**: Modern nano-hybrid composites are extremely strong and actually bond to teeth, often making them stronger than amalgam.
          **4. Myth**: The procedure is more painful. 
          **Reality**: Composite procedures often require less tooth removal and cause less post-treatment sensitivity than traditional fillings.
          **5. Myth**: They're only good for front teeth. 
          **Reality**: Advanced composites are strong enough for back teeth and can withstand normal chewing forces.
          **6. Myth**: Composites shrink and fall out. 
          **Reality**: Proper layering techniques and curing protocols minimize shrinkage and ensure long-lasting restorations.`,
          image: "/images/services/restoration-care.jpg",
          subsections: [
            
          ]
        }
      ]
    }
  },
  
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription: "Expert oral surgical care — from wisdom tooth removal to jaw surgeries — with advanced technology, comfort options, and personalized aftercare.",
    iconPath: "/images/icons/oral-surgery.svg",
    longDescription: "Oral surgery covers a wide range of procedures that restore health, comfort, and confidence. At our clinic, we specialize in safe and precise surgeries including wisdom tooth extractions, jaw surgery, sinus lifts for implants, cyst and tumor removal, trauma repair, and oral cancer screenings. Every treatment is carried out with modern technology, skilled expertise, and complete focus on patient comfort — including anesthesia and sedation options. Our approach ensures minimal discomfort, faster recovery, and long-lasting oral health.",
    heroImage: "/images/services/oral-surgery-hero.jpg",
    infographicImages: "/images/services/oral-surgery-info1.png",
    seo: {
      title: "Oral Surgery in Pune | Wisdom Tooth, Jaw Surgery & More",
      description: "Advanced oral surgery in Pune — wisdom tooth extractions, jaw surgery, sinus lifts, cyst removal, trauma care, and oral cancer screenings with expert surgeons.",
      keywords: [
        "oral surgery Pune",
        "wisdom tooth extraction Pune",
        "jaw surgery Pune",
        "oral surgeon Pune",
        "sinus lift Pune",
        "oral cancer screening Pune",
        "dental cyst removal Pune",
        "trauma repair oral surgery"
      ],
    },
    beforeAfterCategory: "oral-surgery",
    features: [
      { icon: "/images/icons/expert-specialist.svg", title: "Experienced Surgeons", description: "Performed by skilled oral surgery specialists" },
      { icon: "/images/icons/clinic.svg", title: "Advanced Techniques", description: "Precision methods with modern equipment" },
      { icon: "/images/icons/gentle-care.svg", title: "Comfort & Safety", description: "Local anesthesia and sedation options available" },
      { icon: "/images/icons/gentle.svg", title: "Wide Scope", description: "From simple extractions to complex jaw surgeries" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Consultation & Imaging", description: "Detailed exam with X-rays/3D scans for accurate planning" },
      { stepNumber: 2, title: "Surgical Procedure", description: "Performed with precision and focus on patient comfort" },
      { stepNumber: 3, title: "Recovery & Aftercare", description: "Post-op guidance, follow-up support, and quick healing" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Impacted wisdom tooth extraction" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Sinus lift procedure for implant placement" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Jaw cyst removal and healing" }
    ],
    detailedContent: {
      mainTitle: "Expert Surgical Care for Every Need",
      mainDescription: "From routine extractions to complex corrective surgeries, our oral surgery services are designed to restore health, function, and confidence — with your comfort as our top priority.",
      heroContentImage: "/images/services/subhero-oral-surgery.jpg",
      additionalSections: [
        {
          title: "What is Oral Surgery?",
          content: "Oral surgery involves surgical procedures performed in and around the mouth to address various dental and medical conditions. From simple extractions to complex reconstructive procedures, oral surgery can resolve problems, alleviate pain, and restore optimal oral health and function.",
          image: "/images/services/oral-surgery-procedures.jpg",
          subsections: [
            
            { subtitle: "Advanced Surgical Solutions for Complex Dental and Oral Health Issues", text: "Oral surgery encompasses a wide range of procedures designed to treat conditions affecting the mouth, teeth, jaws, and surrounding structures. At our clinic, we combine surgical expertise with advanced technology and compassionate care to provide safe, effective treatment in a comfortable environment.", image: "/images/services/oral-trauma.jpg" }
          ]
        },
        {
          title: "Why Choose Our Clinic for Oral Surgery?",
          content: "Your comfort matters to us. We provide local anesthesia and sedation options to ease anxiety and ensure painless treatment. Our strict sterilization protocols guarantee safety at every step. After surgery, you’ll receive personalized recovery instructions, dietary guidance, and follow-up appointments to ensure smooth healing.",
          image: "/images/services/oral-surgery-comfort.jpg",
          subsections: [
            { subtitle: "Advanced Surgical Technology", text: `**1.** 3D CT imaging for precise surgical planning and guidance
              **2.** Computer-guided surgery for optimal accuracy and minimal invasiveness
              **3.** Piezoelectric instruments for gentle bone surgery with minimal trauma
              **4.** Advanced anesthesia techniques including IV sedation options
              **5.** All procedures performed under magnification for enhanced precision`, image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Comprehensive Surgical Expertise", text: `**1.** Extensive surgical training with proven experience in complex cases
              **2.** In-house capability - no need for referrals to other specialists
              **3.** Emergency surgical services available for urgent cases
              **4.** Collaborative approach with other dental specialists when needed`, image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Patient Comfort & Safety", text: `**1.** Multiple sedation options to ensure patient comfort and anxiety control
              **2.** Pain management protocols for optimal post-operative comfort
              **3.** Sterile surgical environment meeting highest safety standards
              **4.** Pre and post-operative care with detailed instructions and support`, image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "State-of-the-Art Facility", text: `**1.** Modern surgical suite equipped with latest technology
              **2.** Digital imaging systems for accurate diagnosis and planning
              **3.** Emergency equipment and protocols for patient safety
              **4.** Comfortable recovery areas for post-procedure monitoring`, image: "/images/services/oral-surgery-myth.jpg" }
          ]
        },
        {
          title: "Comprehensive Oral Surgery Services",
          content: "We offer a complete range of surgical procedures to meet all your oral health needs:",
          image: "/images/services/oral-surgery-comfort.jpg",
          subsections: [
            { subtitle: "Tooth Extractions:", text: "Simple and surgical removal of damaged, impacted, or problematic teeth.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Wisdom Tooth Removal:", text: "Extraction of third molars that are impacted, crowded, or causing problems.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Dental Implant Placement: ", text: "Surgical placement of titanium implants to replace missing teeth.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Bone Grafting:", text: "Procedures to rebuild and strengthen jawbone for implant placement or structural support.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Sinus Lift Surgery:", text: "Specialized technique to create adequate bone height in the upper jaw for implants.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Apicoectomy:", text: "Root-end surgery to save teeth when conventional root canal treatment isn't sufficient.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Soft Tissue Surgery:", text: "Procedures involving gums and oral tissues for health and aesthetic improvement.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Biopsy Procedures:", text: "Removal and examination of suspicious tissue for diagnostic purposes.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Cyst and Tumor Removal:", text: "Surgical treatment of benign growths and lesions in the mouth.", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Corrective Jaw Surgery:", text: "Treatment of jaw alignment and bite problems (in coordination with orthodontists).", image: "/images/services/oral-surgery-myth.jpg" },
            { subtitle: "Trauma and Injury Repair:", text: "Emergency treatment of facial and dental injuries.", image: "/images/services/oral-surgery-myth.jpg" }
          ]
        },
        {
          title: "Key Benefits of Our Oral Surgery",
          content: `**Expert Care**: Specialized training and extensive experience in complex surgical procedures.
          **Advanced Technology**: State-of-the-art equipment for precise, minimally invasive surgery.
          **Comprehensive Service**: Full range of procedures available in one convenient location.
          **Comfort Options**: Multiple sedation levels to ensure patient comfort and anxiety control.
          **Faster Healing**: Modern techniques promote quicker recovery with less discomfort.
          **Safety First**: Rigorous safety protocols and emergency preparedness.
          **Coordinated Care**: Seamless integration with other dental treatments and specialists.
        `,
          image: "/images/services/oral-surgery-comfort.jpg",
          subsections: [
           
          ]
        },
        {
          title: "Myths vs Reality",
          content: `**1. Myth**: Oral surgery is extremely painful. 
          **Reality**: Modern anesthesia and pain management techniques make procedures comfortable. Most patients report minimal post-operative discomfort.
          **2. Myth**: Recovery takes weeks. 
          **Reality**: Many procedures have quick healing times. Simple extractions often heal within days, while complex surgeries typically heal within 1-2 weeks.
          **3. Myth**: Oral surgery is dangerous. 
          **Reality**: When performed by trained professionals with proper equipment, oral surgery is very safe with low complication rates.
          **4. Myth**: You'll be awake and aware during surgery. 
          **Reality**: Various sedation options are available, from local anesthesia to IV sedation, ensuring patient comfort throughout the procedure.
          **5. Myth**: Oral surgery always requires hospitalization. 
          **Reality**: Most oral surgeries are outpatient procedures performed safely in the dental office.
          **6. Myth**: Complications are common. 
          **Reality**: Serious complications are rare when procedures are performed by experienced surgeons following proper protocols.`,
          image: "/images/services/oral-surgery-comfort.jpg",
          subsections: [
            
          ]
        },
      ]
    }
  }
  ,
  {
    slug: "smile-designing",
    title: "Smile Designing",
    shortDescription:
      "Transform your smile with a customized blend of cosmetic treatments — designed to boost confidence and aesthetics.",
    iconPath: "/images/icons/smile-makeover.svg",
    longDescription:
      "A smile makeover combines treatments like veneers, whitening, bonding, crowns, and orthodontics to enhance your smile’s beauty and harmony. At our clinic, every makeover is personalized after a detailed consultation and digital smile design. Our goal is not only to improve aesthetics but also ensure balance, comfort, and natural appeal.",
    heroImage: "/images/services/smile-makeover-hero.jpg",
    infographicImages: "/images/services/smile-makeover-info1.png",
    seo: {
      title: "Smile Makeover in Pune | Cosmetic Dentistry Experts",
      description:
        "Personalized smile makeovers in Pune — veneers, whitening, crowns, and digital smile design for a confident and natural-looking smile.",
      keywords: [
        "smile makeover Pune",
        "cosmetic dentist Pune",
        "veneers Pune",
        "teeth whitening Pune",
        "digital smile design Pune",
      ],
    },
    beforeAfterCategory: "smile-makeover",
    features: [
      {
        icon: "/images/icons/expert-specialist.svg",
        title: "Customized Plans",
        description: "Tailored treatments for your goals",
      },
      {
        icon: "/images/icons/clinic.svg",
        title: "Digital Smile Design",
        description: "Preview results before treatment",
      },
      {
        icon: "/images/icons/gentle-care.svg",
        title: "Multi-Treatment Approach",
        description: "Whitening, veneers, crowns & more",
      },
      {
        icon: "/images/icons/gentle.svg",
        title: "Natural Results",
        description: "Enhances smile without looking artificial",
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Consultation & Planning",
        description: "Smile goals discussed with digital previews",
      },
      {
        stepNumber: 2,
        title: "Treatment Execution",
        description: "Combination of cosmetic procedures as per plan",
      },
      {
        stepNumber: 3,
        title: "Final Reveal",
        description: "Balanced, aesthetic smile transformation",
      },
    ],
    mockBeforeAfterImages: [
      {
        before: "/images/dummy-before.jpg",
        after: "/images/dummy-after.jpg",
        description: "Smile makeover with veneers and whitening",
      },
    ],
    detailedContent: {
      mainTitle: "Redesign Your Smile with Confidence",
      mainDescription:
        "A smile makeover is more than cosmetic — it’s about confidence, self-expression, and creating harmony between teeth, gums, and face.",
      heroContentImage: "/images/services/subhero-smile-makeover.jpg",
      additionalSections: [
        {
          title: "What’s in a Smile Makeover?",
          content:
            "We use a mix of treatments like veneers, whitening, bonding, and crowns to deliver your dream smile. Each plan is unique and based on your needs.",
          image: "/images/services/smile-makeover-1.jpg",
          subsections: [
            {
              subtitle: "Veneers",
              text: "Thin porcelain shells to cover imperfections.",
              image: "/images/services/veneers-detail.jpg",
            },
            {
              subtitle: "Whitening",
              text: "Safe, effective in-clinic and at-home options.",
              image: "/images/services/whitening-detail.jpg",
            },
          ],
        },
        {
          title: "Myth vs Reality",
          content:
            "Myth: Smile makeovers always look fake. Reality: With modern techniques and natural design principles, results are aesthetic and realistic.",
          image: "/images/services/smile-makeover-myth.jpg",
          subsections: [],
        },
      ],
    },
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    shortDescription: "Safe, painless removal of damaged, infected, or problematic teeth with expert care and gentle techniques.",
    iconPath: "/images/icons/tooth-extraction.svg",
    longDescription: "Sometimes, removing a tooth is the best solution for long-term oral health. Extractions are recommended for severely decayed, damaged, or infected teeth, as well as for orthodontic or wisdom tooth-related reasons. Our clinic ensures a painless, stress-free experience with local anesthesia and, when needed, sedation options. With modern tools and techniques, healing is faster and complications are minimized.",
    heroImage: "/images/services/tooth-extraction-hero.jpg",
    infographicImages: "/images/services/tooth-extraction-info.png",
    seo: {
      title: "Tooth Extraction in Pune | Safe & Gentle Dental Care",
      description: "Expert tooth extraction in Pune — painless, safe, and gentle removal of decayed, infected, or problematic teeth with quick recovery.",
      keywords: [
        "tooth extraction Pune",
        "dental extraction Pune",
        "tooth removal Pune",
        "wisdom tooth removal Pune",
        "painless extraction Pune"
      ],
    },
    beforeAfterCategory: "tooth-extraction",
    features: [
      { icon: "/images/icons/gentle-care.svg", title: "Painless Procedure", description: "Local anesthesia and sedation for comfort" },
      { icon: "/images/icons/expert-specialist.svg", title: "Expert Techniques", description: "Handled by skilled dentists with precision" },
      { icon: "/images/icons/smile-plus.svg", title: "Quick Healing", description: "Guided aftercare for smooth recovery" },
      { icon: "/images/icons/gentle.svg", title: "Safe & Hygienic", description: "Strict sterilization and safety standards" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Consultation & X-rays", description: "Evaluate tooth condition and treatment need" },
      { stepNumber: 2, title: "Extraction Procedure", description: "Tooth removed gently with minimal trauma" },
      { stepNumber: 3, title: "Aftercare & Healing", description: "Post-op instructions for recovery and comfort" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Severely decayed tooth extraction and healing" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Orthodontic extraction before braces" }
    ],
    detailedContent: {
      mainTitle: "Safe & Stress-Free Extractions",
      mainDescription: "Our priority is your comfort and health. Extractions are performed with utmost care, followed by clear aftercare guidance to ensure fast healing.",
      heroContentImage: "/images/services/subhero-tooth-extraction.jpg",
      additionalSections: [
        {
          title: "When Is Extraction Needed?",
          content: "Extractions are recommended only when teeth cannot be saved or are causing complications. This includes severe decay, advanced gum disease, trauma, or orthodontic planning.",
          image: "/images/services/extraction-cases.jpg",
          subsections: [
            { subtitle: "Severe Decay", text: "When a tooth is beyond repair and causes pain or infection.", image: "/images/services/decayed-tooth.jpg" },
            { subtitle: "Orthodontic Needs", text: "Some cases require extractions to align teeth properly.", image: "/images/services/orthodontic-extraction.jpg" },
            { subtitle: "Impacted Teeth", text: "Wisdom teeth or other impacted teeth may need surgical removal.", image: "/images/services/impacted-tooth.jpg" }
          ]
        },
        {
          title: "Care & Myths",
          content: "Post-extraction care ensures smooth healing. Many patients worry unnecessarily due to common myths.",
          image: "/images/services/extraction-care.jpg",
          subsections: [
            { subtitle: "Myth vs Reality", text: "Myth: Extraction always causes severe pain. Reality: With anesthesia and modern tools, discomfort is minimal and recovery is quick.", image: "/images/services/extraction-myth.jpg" }
          ]
        }
      ]
    }
  }
  ,
  {
    slug: "braces-and-invisalign",
    title: "Braces & Aligners",
    shortDescription: "Straighten your teeth and improve bite with modern orthodontic options — from traditional braces to invisible aligners.",
    iconPath: "/images/icons/braces-aligners.svg",
    longDescription: "Orthodontic treatment aligns teeth and jaws for a healthier bite, improved function, and a beautiful smile. We provide a range of options including metal braces, ceramic braces, and clear aligners like Invisalign. Each plan is customized to your age, dental condition, and lifestyle. Whether you want the reliability of braces or the convenience of nearly invisible aligners, our orthodontists ensure precise, comfortable, and effective care.",
    heroImage: "/images/services/clear-aligners.jpg",
    infographicImages: "/images/services/braces-aligners-info.png",
    seo: {
      title: "Braces & Aligners in Pune | Invisible Aligners & Orthodontics",
      description: "Expert orthodontic care in Pune — metal braces, ceramic braces, and invisible aligners for straighter teeth and improved bite.",
      keywords: [
        "braces Pune",
        "aligners Pune",
        "invisible aligners Pune",
        "Invisalign Pune",
        "orthodontist Pune",
        "ceramic braces Pune"
      ],
    },
    beforeAfterCategory: "braces-aligners",
    features: [
      { icon: "/images/icons/expert-specialist.svg", title: "Expert Orthodontists", description: "Treatment designed and supervised by specialists" },
      { icon: "/images/icons/tooth-tick.svg", title: "Modern Options", description: "Metal, ceramic, and clear aligner solutions" },
      { icon: "/images/icons/gentle.svg", title: "Customized Plans", description: "Treatment tailored to each patient’s needs" },
      { icon: "/images/icons/smile-plus.svg", title: "Improved Function & Smile", description: "Better bite, healthier gums, and a confident smile" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Consultation & Planning", description: "Examination, X-rays, and digital scans for treatment design" },
      { stepNumber: 2, title: "Appliance Placement", description: "Braces or aligners fitted for gradual teeth movement" },
      { stepNumber: 3, title: "Adjustments & Follow-up", description: "Regular check-ups to track progress and refine movement" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Crowded teeth aligned with braces" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Gapped teeth corrected with aligners" }
    ],
    detailedContent: {
      mainTitle: "Straight Teeth, Healthy Smile",
      mainDescription: "Orthodontics is not just about looks — it improves oral health, bite function, and long-term stability. We offer both traditional and advanced solutions to make your journey smooth and effective.",
      heroContentImage: "/images/services/subhero-braces-aligners.jpg",
      additionalSections: [
        {
          title: "Treatment Options",
          content: "We provide a full spectrum of orthodontic care for children, teens, and adults. Options include metal braces for reliability, ceramic braces for aesthetics, and clear aligners for invisible correction.",
          image: "/images/services/braces-aligners-types.jpg",
          subsections: [
            { subtitle: "Metal Braces", text: "Tried-and-tested option with high effectiveness for all cases.", image: "/images/services/metal-braces.jpg" },
            { subtitle: "Ceramic Braces", text: "Tooth-colored brackets for less visibility while correcting alignment.", image: "/images/services/ceramic-braces.jpg" },
            { subtitle: "Clear Aligners", text: "Removable, comfortable, and nearly invisible trays for modern orthodontics.", image: "/images/services/clear-aligner.jpg" }
          ]
        },
        {
          title: "Care & Myths",
          content: "Orthodontic treatment requires consistent care and follow-up. Patients often believe braces are only for teenagers, but that’s a myth.",
          image: "/images/services/braces-aligners-care.jpg",
          subsections: [
            { subtitle: "Myth vs Reality", text: "Myth: Braces are only for kids. Reality: Adults of all ages can successfully undergo orthodontic treatment.", image: "/images/services/braces-aligners-myth.jpg" }
          ]
        }
      ]
    }
  }
,  
  {
  slug: "crowns-and-bridges",
  title: "Crowns & Bridges",
  shortDescription: "Restore strength, function, and beauty to damaged or missing teeth with custom crowns and bridges designed for a natural smile.",
  iconPath: "/images/icons/crowns-bridges.svg",
  longDescription: "Crowns and bridges are proven dental solutions to restore damaged, weakened, or missing teeth. Crowns act like protective caps, strengthening teeth while enhancing aesthetics, and bridges replace missing teeth by anchoring artificial teeth to adjacent healthy ones. At our clinic, we use advanced materials like zirconia, porcelain-fused-to-metal, and all-ceramic options for durability and a natural appearance. Every restoration is crafted for precision fit, long-term comfort, and confidence in your smile.",
  heroImage: "/images/services/crowns-bridges-hero.jpg",
  infographicImages: "/images/services/crowns-bridges-info.png",
  seo: {
    title: "Dental Crowns & Bridges in Pune | Tooth Restoration Experts",
    description: "Restore damaged or missing teeth with natural-looking dental crowns and bridges in Pune. Zirconia, ceramic, and PFM options available for strength and beauty.",
    keywords: [
      "dental crowns Pune",
      "dental bridges Pune",
      "tooth cap Pune",
      "zirconia crown Pune",
      "ceramic crown Pune",
      "tooth replacement Pune"
    ],
  },
  beforeAfterCategory: "crowns-bridges",
  features: [
    { icon: "/images/icons/strong.svg", title: "Durable Materials", description: "Zirconia, ceramic, and porcelain-fused options" },
    { icon: "/images/icons/natural.svg", title: "Natural Aesthetics", description: "Designed to match your natural teeth" },
    { icon: "/images/icons/tooth-tick.svg", title: "Perfect Fit", description: "Custom-made for comfort and function" },
    { icon: "/images/icons/smile-plus.svg", title: "Long-Lasting Solution", description: "Strong restorations with proper care" }
  ],
  processSteps: [
    { stepNumber: 1, title: "Consultation & Exam", description: "Assessment of damaged or missing teeth with X-rays and scans" },
    { stepNumber: 2, title: "Tooth Preparation", description: "Shaping of teeth and impressions for a custom fit" },
    { stepNumber: 3, title: "Crown/Bridge Placement", description: "Final restoration fitted and cemented for durability" }
  ],
  mockBeforeAfterImages: [
    { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Front tooth crown for aesthetics" },
    { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Bridge replacing missing molar" }
  ],
  detailedContent: {
    mainTitle: "Strong, Functional & Beautiful Restorations",
    mainDescription: "Crowns and bridges not only restore function but also enhance the beauty of your smile. Whether it’s strengthening a weak tooth or replacing a missing one, our solutions are designed for comfort, strength, and confidence.",
    heroContentImage: "/images/services/subhero-crowns-bridges.jpg",
    additionalSections: [
      {
        title: "Types of Crowns & Bridges",
        content: "We offer a range of options to suit different needs and budgets — from metal-ceramic crowns for durability to zirconia crowns for premium aesthetics. Our bridges restore multiple missing teeth with seamless integration.",
        image: "/images/services/crowns-bridges-types.jpg",
        subsections: [
          { subtitle: "Zirconia Crowns", text: "Highly aesthetic, durable, and metal-free option for front and back teeth.", image: "/images/services/zirconia-crown.jpg" },
          { subtitle: "Porcelain-Fused-to-Metal (PFM)", text: "Cost-effective and strong crowns with a balance of durability and aesthetics.", image: "/images/services/pfm-crown.jpg" },
          { subtitle: "All-Ceramic Crowns", text: "Ideal for visible teeth — lifelike translucency and natural appearance.", image: "/images/services/ceramic-crown.jpg" }
        ]
      },
      {
        title: "Care & Maintenance",
        content: "With proper oral hygiene and routine check-ups, crowns and bridges can last 10–15 years or longer. Avoid chewing hard objects and maintain regular cleaning to ensure longevity.",
        image: "/images/services/crowns-bridges-care.jpg",
        subsections: [
          { subtitle: "Myth vs Reality", text: "Myth: Bridges damage adjacent teeth permanently. Reality: With modern bonding techniques, minimal preparation preserves maximum tooth structure.", image: "/images/services/crowns-bridges-myth.jpg" }
        ]
      }
    ]
  }
},
{
  slug: "teeth-whitening",
  title: "Teeth Whitening",
  shortDescription: "Brighten your smile safely and effectively with professional whitening treatments tailored to your needs.",
  iconPath: "/images/icons/teeth-whitening.svg",
  longDescription: "Teeth whitening is one of the quickest ways to enhance your smile. Unlike over-the-counter kits, professional whitening delivers safe, effective, and long-lasting results without damaging enamel. We offer in-office whitening for instant brightness and take-home kits for gradual whitening under professional guidance. Say goodbye to stains from coffee, tea, or aging, and hello to a confident, radiant smile.",
  heroImage: "/images/services/teeth-whitening-hero.jpg",
  infographicImages: "/images/services/teeth-whitening-info.png",
  seo: {
    title: "Teeth Whitening in Pune | Safe & Effective Smile Brightening",
    description: "Professional teeth whitening in Pune — safe, painless, and effective solutions to remove stains and brighten your smile instantly.",
    keywords: [
      "teeth whitening Pune",
      "professional whitening Pune",
      "laser teeth whitening Pune",
      "teeth bleaching Pune",
      "cosmetic dentistry Pune"
    ],
  },
  beforeAfterCategory: "teeth-whitening",
  features: [
    { icon: "/images/icons/smile-plus.svg", title: "Quick Results", description: "Whiter teeth in just one session" },
    { icon: "/images/icons/gentle-care.svg", title: "Safe & Gentle", description: "Does not damage enamel when done professionally" },
    { icon: "/images/icons/gentle.svg", title: "Personalized Options", description: "In-office and take-home whitening kits" },
    { icon: "/images/icons/face-star.svg", title: "Boosts Confidence", description: "Enhance your smile and self-esteem" }
  ],
  processSteps: [
    { stepNumber: 1, title: "Smile Assessment", description: "Evaluation of stains and shade selection" },
    { stepNumber: 2, title: "Whitening Treatment", description: "Application of whitening gel with/without laser activation" },
    { stepNumber: 3, title: "Post-Care Guidance", description: "Dietary advice and maintenance instructions for longer results" }
  ],
  mockBeforeAfterImages: [
    { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Whitening after coffee stains removal" },
    { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Improved shade after one session" }
  ],
  detailedContent: {
    mainTitle: "Brighter Smiles, the Healthy Way",
    mainDescription: "Our whitening treatments are designed to give you noticeable results safely. Whether you choose instant in-office whitening or a professional take-home kit, we ensure a natural, radiant glow without harming your enamel.",
    heroContentImage: "/images/services/subhero-teeth-whitening.jpg",
    additionalSections: [
      {
        title: "Types of Whitening",
        content: "We provide two main options: quick in-office whitening for immediate results and custom take-home trays for gradual brightening under supervision.",
        image: "/images/services/teeth-whitening-types.jpg",
        subsections: [
          { subtitle: "In-Office Whitening", text: "Professional-grade whitening gel with laser/light activation for instant brightness.", image: "/images/services/in-office-whitening.jpg" },
          { subtitle: "Take-Home Kits", text: "Custom-fitted trays with safe whitening gel for gradual, controlled results.", image: "/images/services/take-home-kit.jpg" }
        ]
      },
      {
        title: "Whitening Safety & Myths",
        content: "Professional whitening is enamel-safe and approved by dental associations. Common myths can mislead patients, so here’s the truth:",
        image: "/images/services/teeth-whitening-safety.jpg",
        subsections: [
          { subtitle: "Myth vs Reality", text: "Myth: Whitening damages enamel. Reality: Professional whitening only removes stains and does not harm enamel structure.", image: "/images/services/teeth-whitening-myth.jpg" }
        ]
      }
    ]
  }
},
  


{
  slug: "cleaning-and-polishing",
  title: "Cleaning & Polishing",
  shortDescription: "Professional dental cleaning to remove plaque, tartar, and stains — leaving your teeth fresh, smooth, and healthy.",
  iconPath: "/images/icons/cleaning.svg",
  longDescription: "Daily brushing is essential, but even the best oral care routines can’t reach every spot. Professional cleaning and polishing remove plaque, tartar, and stains that cause gum disease, cavities, and bad breath. With gentle ultrasonic scalers and polishing tools, our treatment restores oral freshness and gives your teeth a naturally brighter look. Regular cleaning not only enhances appearance but also prevents serious dental problems in the long run.",
  heroImage: "/images/services/cleaning-hero.jpg",
  infographicImages: "/images/services/cleaning-info1.png",
  seo: {
    title: "Dental Cleaning & Polishing in Pune | Preventive Care",
    description: "Gentle and thorough dental cleaning in Pune — remove plaque, tartar, and stains with safe ultrasonic scaling and polishing.",
    keywords: [
      "dental cleaning Pune",
      "scaling and polishing Pune",
      "teeth cleaning dentist Pune",
      "remove plaque tartar Pune",
      "gum disease prevention Pune",
      "professional teeth cleaning Pune"
    ],
  },
  beforeAfterCategory: "cleaning-polishing",
  features: [
    { icon: "/images/icons/natural.svg", title: "Fresher Breath", description: "Removes bacteria that cause odor" },
    { icon: "/images/icons/face-star.svg", title: "Brighter Smile", description: "Eliminates stains and dullness" },
    { icon: "/images/icons/teeth.svg", title: "Healthy Gums", description: "Prevents gum disease and bleeding" },
    { icon: "/images/icons/gentle-care.svg", title: "Gentle & Safe", description: "Painless ultrasonic technology" }
  ],
  processSteps: [
    { stepNumber: 1, title: "Initial Checkup", description: "Evaluate gums and teeth condition" },
    { stepNumber: 2, title: "Scaling", description: "Ultrasonic cleaning removes tartar and plaque" },
    { stepNumber: 3, title: "Polishing", description: "Smooth finish for stain-free, shiny teeth" }
  ],
  mockBeforeAfterImages: [
    { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Plaque and stain removal" }
  ],
  detailedContent: {
    mainTitle: "Simple Care, Big Difference",
    mainDescription: "Cleaning & polishing not only give you a fresh smile but also help prevent gum disease, cavities, and long-term dental issues.",
    heroContentImage: "/images/services/subhero-cleaning.jpg",
    additionalSections: [
      {
        title: "Why Regular Cleaning Matters",
        content: "Even with daily brushing and flossing, plaque and tartar can build up in hard-to-reach areas. Professional scaling and polishing ensure complete cleanliness and gum protection.",
        image: "/images/services/cleaning-detail.jpg",
        subsections: [
          { subtitle: "Stain Removal", text: "Coffee, tea, and tobacco stains can be polished away safely.", image: "/images/services/cleaning-stains.jpg" }
        ]
      },
      {
        title: "Comfort & Myths",
        content: "Our cleaning procedures are gentle and safe, performed with modern ultrasonic tools. Myths like 'scaling loosens teeth' are false — in reality, it strengthens gums by removing harmful deposits.",
        image: "/images/services/cleaning-myth.jpg",
        subsections: [
          { subtitle: "Myth vs Reality", text: "Myth: Cleaning damages enamel. Reality: Professional cleaning is completely safe and actually protects enamel by preventing decay.", image: "/images/services/cleaning-vs.jpg" }
        ]
      }
    ]
  }
}
,
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    shortDescription: "Gentle, fun, and stress-free dental care for children — preventive treatments, cavity protection, and habit guidance for healthy little smiles.",
    iconPath: "/images/icons/kids-dentistry.svg",
    longDescription: "Children require special care, attention, and patience at the dentist. Our Kids Dentistry services are designed to make dental visits positive, comfortable, and even enjoyable for your child. From cavity prevention to habit correction, we focus on building a strong foundation for lifelong oral health. With a child-friendly environment, advanced technology, and compassionate care, we help kids overcome dental anxiety and look forward to their visits.",
    heroImage: "/images/services/pediatric-dentistry-large.jpg",
    infographicImages: "/images/services/kids-dentistry-info1.png",
    seo: {
      title: "Kids Dentistry in Pune | Pediatric Dentist for Healthy Smiles",
      description: "Specialized kids dentistry in Pune — cavity prevention, fluoride treatment, braces for kids, and habit correction with gentle and fun care.",
      keywords: [
        "kids dentist Pune",
        "pediatric dentist Pune",
        "children dental clinic Pune",
        "cavity prevention kids Pune",
        "habit correction dentist Pune",
        "dental care for children Pune"
      ],
    },
    beforeAfterCategory: "kids-dentistry",
    features: [
      { icon: "/images/icons/dental-edu.svg", title: "Child-Friendly Space", description: "Fun and stress-free environment for kids" },
      { icon: "/images/icons/gentle.svg", title: "Preventive Care", description: "Fluoride, sealants, and regular checkups to stop cavities early" },
      { icon: "/images/icons/dental-braces.svg", title: "Early Orthodontics", description: "Monitor and guide jaw and teeth development" },
      { icon: "/images/icons/brush-paste.svg", title: "Habit Guidance", description: "Thumb sucking, mouth breathing, and other corrections" }
    ],
    processSteps: [
      { stepNumber: 1, title: "Friendly Introduction", description: "A playful orientation helps kids relax and trust the dentist" },
      { stepNumber: 2, title: "Examination & Preventive Care", description: "Check teeth, apply fluoride/sealants, and clean gently" },
      { stepNumber: 3, title: "Treatment if Needed", description: "Fillings, braces, or other procedures with gentle techniques" }
    ],
    mockBeforeAfterImages: [
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Cavity filled in baby tooth" },
      { before: "/images/dummy-before.jpg", after: "/images/dummy-after.jpg", description: "Early orthodontic correction" }
    ],
    detailedContent: {
      mainTitle: "Building Healthy Habits Early",
      mainDescription: "Our goal is not just treatment — but teaching kids and parents how to maintain oral hygiene habits that last a lifetime.",
      heroContentImage: "/images/services/happy-kid.jpg",
      additionalSections: [
        {
          title: "Preventive & Corrective Care",
          content: "We provide fluoride treatments, sealants, cavity fillings, and habit correction counseling to protect young smiles from problems. Early orthodontic guidance ensures teeth and jaw grow in the right direction.",
          image: "/images/services/kids-preventive.jpg",
          subsections: [
            { subtitle: "Fluoride & Sealants", text: "Simple, painless procedures that protect against cavities.", image: "/images/services/kids-fluoride.jpg" },
            { subtitle: "Early Braces Monitoring", text: "Spotting crowding or bite issues early saves future complex treatments.", image: "/images/services/kids-braces.jpg" }
          ]
        },
        {
          title: "Comfort & Education",
          content: "Every visit is made child-friendly, with gentle handling and clear communication. We educate parents and children on diet, brushing, and healthy oral habits.",
          image: "/images/services/kids-dental-education.jpg",
          subsections: [
            { subtitle: "Myth vs Reality", text: "Myth: Baby teeth don’t matter since they fall out. Reality: Healthy baby teeth are crucial for speech, chewing, and guiding permanent teeth properly.", image: "/images/services/kids-myth.jpg" }
          ]
        }
      ]
    }
  },
];