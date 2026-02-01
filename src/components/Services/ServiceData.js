export const SERVICE_DATA = {
    // --- WHAT WE DO (SERVICES) ---

    // Electronics
    "corporate-it-scrap-disposal": {
        title: "Corporate IT & Asset Disposal",
        subtitle: "Secure Data Destruction & Sustainable Recycling",
        description: "We provide certified destruction of data-bearing devices and responsible recycling of obsolete IT infrastructure. Our chain-of-custody protocols ensure 100% data security and compliance with environmental regulations.",
        image: "/images/scene_electronics.png",
        features: ["On-site Hard Drive Shredding", "Serialized Audit Trails", "R2v3 Certified Recycling", "Certificate of Destruction"],
        benefits: ["Mitigate Data Breach Risks", "recover Value from Assets", "Zero-Landfill Guarantee"]
    },
    "e-waste-recycling": {
        title: "E-Waste Recycling",
        subtitle: "End-of-Life Electronics Solutions",
        description: "From consumer electronics to enterprise servers, we process all forms of e-waste. Our advanced separation technologies recover high-purity metals and plastics, returning them to the circular economy.",
        image: "/images/scene_electronics.png",
        features: ["CRT & Flat Screen Processing", "Circuit Board Recovery", "Battery Sorting", "Hazardous Component Removal"],
        benefits: ["Regulatory Compliance", "Reduced Carbon Footprint", "Circular Economy Support"]
    },

    // Industrial
    "battery-scrap-collection": {
        title: "Battery Scrap Collection",
        subtitle: "Safe Disposal of Lead-Acid & Lithium-Ion Batteries",
        description: "Batteries pose significant fire and environmental risks if mishandled. We offer specialized collection, transportation, and recycling services for all battery chemistries.",
        image: "/images/scene_industrial.png",
        features: ["UN-Rated Container Placement", "Thermal Runaway Prevention", "Acid Neutralization", "Lead & Plastic Recovery"],
        benefits: ["Fire Safety Assurance", "EPA Compliance", "Spill Response Handling"]
    },
    "chemical-packing": {
        title: "Lab Pack & Chemical Services",
        subtitle: "Expert Handling of Hazardous Chemicals",
        description: "Our certified chemists identify, segregate, and pack obsolete or unknown chemicals for safe disposal. We handle everything from small lab containers to bulk drums.",
        image: "/images/scene_pharma.png",
        features: ["Chemical Identification", "Unknown Waste Fingerprinting", "DOT-Compliant Packaging", "Manifest Preparation"],
        benefits: ["Risk Reduction", "Laboratory Decongestion", "Full Liability Protection"]
    },

    // Metals (Generic Template for similar items)
    "ferrous-metal-scrap": {
        title: "Ferrous Metal Recycling",
        subtitle: "Iron & Steel Processing",
        description: "We purchase and process all grades of ferrous scrap, including structural steel, cast iron, and manufacturing turnings, preparing them for domestic and international mills.",
        image: "/images/scene_metals.png",
        features: ["Heavy Shearing & Baling", "Industrial Cleanouts", "Roll-off Container Service", "Competitive Market Pricing"],
        benefits: ["Revenue Generation", "Site Safety", "Efficient Logistics"]
    },
    "non-ferrous-metal-scrap": {
        title: "Non-Ferrous Metal Recycling",
        subtitle: "Copper, Aluminum, Brass & More",
        description: "Maximizing value for high-grade metals. Our precise grading and analysis ensure you get the best market rates for copper, aluminum, brass, stainless steel, and high-temp alloys.",
        image: "/images/scene_metals.png",
        features: ["XRF Alloy Analysis", "Wire Stripping & Granulation", "Mixed Metal Sorting", "Secure Metal Storage"],
        benefits: ["Top-Tier Pricing", "Transparent Weighing", "Prompt Payment"]
    },

    // Special Waste
    "biohazardous-medical-waste-disposal": {
        title: "Biohazardous Waste Disposal",
        subtitle: "Infectious Waste Solutions",
        description: "Safe, compliant removal and treatment of red-bag waste, sharps, and pathological materials. We protect healthcare workers and the public through rigorous safety standards.",
        image: "/images/scene_healthcare.png",
        features: ["OSHA-Compliant Containers", "Autoclave Treatment", "Manifest Tracking", "Scheduled Pickups"],
        benefits: ["Infection Control", "Regulatory Peace of Mind", "Cost-Effective Plans"]
    },
    "pharmaceutical-waste": {
        title: "Pharmaceutical Waste Disposal",
        subtitle: "Secure Destruction of Expired & Controlled Substances",
        description: "We provide witness burning and reverse distribution services for non-hazardous and hazardous pharmaceutical waste, ensuring drugs do not enter the water supply or black market.",
        image: "/images/scene_pharma.png",
        features: ["Witness Destruction", "DEA Compliance Support", "Reverse Distribution", "Waste Characterization"],
        benefits: ["Diversion Prevention", "Environmental Protection", "Simplified Audits"]
    },

    // --- INDUSTRIES WE SERVE ---

    // Healthcare
    "hospitals-and-health-systems": {
        title: "Hospitals & Health Systems",
        subtitle: "Integrated Waste Streams for Large Facilities",
        description: "Large medical centers generate complex waste streams. We provide a single-vendor solution for RMW, chemo, sharps, pharma, and recycling, streamlining operations and reducing costs.",
        image: "/images/scene_healthcare.png",
        features: ["On-Site Technician Services", "Sustainability Dashboarding", "Staff Training Programs", "Integrated Waste Management"],
        benefits: ["Operational Efficiency", "Cost Reduction", "Higher Sustainability Scores"]
    },
    "clinics-and-urgent-care-centers": {
        title: "Clinics & Urgent Care",
        subtitle: "Flexible Solutions for Outpatient Care",
        description: "We understand that clinics have limited space and variable volumes. Our flexible pickup schedules and right-sized bin programs ensure you stay compliant without overpaying.",
        image: "/images/scene_healthcare.png",
        features: ["On-Demand Pickups", "Small Quantity Generation Support", "Simplified Billing", "Compliance Portals"],
        benefits: ["Space Saving", "Budget Friendly", "Reliable Service"]
    },

    // Industrial
    "chemical-and-manufacturing": {
        title: "Chemical & Manufacturing Plants",
        subtitle: "Industrial Waste & Byproduct Management",
        description: "Manufacturing processes produce diverse waste outputs. We help plants manage hazardous sludge, off-spec products, solvents, and general trash with a focus on waste-to-energy and recycling.",
        image: "/images/scene_industrial.png",
        features: ["Tank Cleaning", "Vacuum Truck Services", "Waste-to-Energy options", "Zero-Landfill Reporting"],
        benefits: ["Process Continuity", "Environmental Leadership", "Reduced Liability"]
    },
    "government-and-military": {
        title: "Government & Military",
        subtitle: "Secure & Compliant Defense Services",
        description: "We utilize cleared personnel and secure logistics to handle sensitive waste streams for defense contractors, military bases, and government agencies.",
        image: "/images/scene_corporate.png",
        features: ["Clearance-Holding Staff", "Secure Chain of Custody", "Demilitarization Services", "Detailed Reporting"],
        benefits: ["National Security Compliance", "Trusted Partnership", "Specialized Handling"]
    }
};

// Fallback for missing items
export const getServiceData = (slug) => {
    const data = SERVICE_DATA[slug];
    if (data) return data;

    // Generic Fallback generator based on slug
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Choose image based on keywords in slug
    let image = "/images/scene_industrial.png";
    if (slug.includes('medical') || slug.includes('clinic') || slug.includes('hosp')) image = "/images/scene_healthcare.png";
    if (slug.includes('metal') || slug.includes('copper') || slug.includes('alum')) image = "/images/scene_metals.png";
    if (slug.includes('electr') || slug.includes('it-')) image = "/images/scene_electronics.png";

    return {
        title: title,
        subtitle: "Professional Waste Management Services",
        description: `MS Asia provides specialized ${title} solutions tailored to your industry's needs. We ensure full compliance, safety, and operational efficiency.`,
        image: image,
        features: ["Regulatory Compliance", "Safe Handling", "Efficient Transport", "Sustainable Disposal"],
        benefits: ["Cost Optimization", "Risk Mitigation", "Environmental Responsibility"]
    };
};
