// Navbar Mega Menu Data Structure
// Each main menu item has categories with descriptions

const genericDesc = "Professional waste management solutions.";

export const NAV_MENU_DATA = {
    "What We Do": {
        columns: [
            {
                title: "Electronics",
                description: "E-waste collection and responsible disposal",
                items: [
                    { label: "Corporate IT Scrap Disposal", desc: "Secure data destruction and eco-friendly recycling for servers, laptops, and office IT infrastructure.", image: "/images/scene_electronics.png" },
                    { label: "E-Waste Recycling", desc: "Zero-landfill recycling solutions for end-of-life electronics, ensuring maximum resource recovery.", image: "/images/scene_electronics.png" },
                    { label: "HPLC Solvent Waste Collection", desc: "Specialized collection and safe disposal services for laboratory solvent waste and chemical byproducts.", image: "/images/scene_pharma.png" },
                    { label: "Motor & Transformer Scrap", desc: "Efficient dismantling and metal recovery services for industrial motors, transformers, and heavy machinery.", image: "/images/scene_metals.png" },
                    { label: "Wire & Cable Scrap", desc: "High-value recycling for insulated copper/aluminum wires and industrial cabling.", image: "/images/scene_metals.png" }
                ]
            },
            {
                title: "Industrial & Construction",
                description: "Industrial waste management solutions",
                items: [
                    { label: "Battery Scrap Collection", desc: "Compliant handling and recycling of lead-acid, lithium-ion, and industrial battery waste.", image: "/images/scene_industrial.png" },
                    { label: "Chemical Packing", desc: "Safe packing and disposal of chemicals.", image: "/images/scene_industrial.png" },
                    { label: "Construction & Demolition Scrap", desc: "Waste tracking for C&D projects.", image: "/images/scene_industrial.png" },
                    { label: "HVAC Scrap Recovery", desc: "Recovery services for HVAC systems.", image: "/images/scene_industrial.png" }
                ]
            },
            {
                title: "Metals",
                description: "Metal scrap processing and recycling",
                items: [
                    { label: "Aluminium Scrap Recycling", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Brass & Bronze Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Ferrous Metal Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Heavy Equipment Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Industrial Machinery Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Lead Scrap Recycling", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Nickel & Alloy Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Non-Ferrous Metal Scrap", desc: genericDesc, image: "/images/scene_metals.png" },
                    { label: "Stainless Steel Scrap", desc: genericDesc, image: "/images/scene_metals.png" }
                ]
            },
            {
                title: "Recyclables",
                description: "Sustainable recycling services",
                items: [
                    { label: "Glass Waste Recycling", desc: genericDesc, image: "/images/scene_recyclables.png" },
                    { label: "Paper & Cardboard Recycling", desc: genericDesc, image: "/images/scene_recyclables.png" },
                    { label: "Plastic Scrap Processing", desc: genericDesc, image: "/images/scene_recyclables.png" },
                    { label: "Rubber & Tyre Scrap", desc: genericDesc, image: "/images/scene_recyclables.png" },
                    { label: "Textile & Fabric Scrap", desc: genericDesc, image: "/images/scene_recyclables.png" },
                    { label: "Wood & Pallet Scrap", desc: genericDesc, image: "/images/scene_recyclables.png" }
                ]
            },
            {
                title: "Special Waste Services",
                description: "Hazardous and medical waste disposal",
                items: [
                    { label: "Biohazardous Medical Waste Disposal", desc: genericDesc, image: "/images/scene_healthcare.png" },
                    { label: "Pharmaceutical Waste", desc: genericDesc, image: "/images/scene_pharma.png" },
                    { label: "Regulated Medical Waste Services", desc: genericDesc, image: "/images/scene_healthcare.png" }
                ]
            }
        ]
    },
    "Industries We Serve": {
        columns: [
            {
                title: "Healthcare",
                description: "Healthcare waste management solutions",
                items: [
                    { label: "Clinics & Urgent Care Centers", desc: "Flexible pickup schedules and compliance support for outpatient clinics and urgent care facilities.", image: genericDesc },
                    { label: "Dental Clinics", desc: "Safe disposal of sharps, amalgam, and hazardous dental waste in compliance with environmental laws.", image: genericDesc },
                    { label: "Dialysis Centers", desc: "Specialized handling of biohazardous waste and sharps generated in dialysis treatment centers.", image: genericDesc },
                    { label: "Enterprise Healthcare", desc: genericDesc },
                    { label: "Home Health Organizations", desc: genericDesc },
                    { label: "Hospitals & Health Systems", desc: "Comprehensive waste management streams tailored for large-scale medical facilities and hospitals.", image: genericDesc },
                    { label: "National & Corporate Healthcare", desc: genericDesc },
                    { label: "Non-Acute Hospital Affiliates", desc: genericDesc },
                    { label: "Nursing & Long-Term Care Facilities", desc: genericDesc },
                    { label: "Physician Offices", desc: genericDesc },
                    { label: "Practices & Care Providers", desc: genericDesc },
                    { label: "Surgery Centers", desc: genericDesc },
                    { label: "Veterinary Clinics & Hospitals", desc: genericDesc }
                ]
            },
            {
                title: "Pharmacy, Labs & Research",
                description: "Pharma and lab waste disposal",
                items: [
                    { label: "Blood Banks", desc: "Strictly regulated disposal services for biological waste and expired blood products ensuring total safety.", image: genericDesc },
                    { label: "Compounding Pharmacies", desc: genericDesc },
                    { label: "Laboratory & Research Organizations", desc: "Expert management of chemical, pathological, and microbiological waste for research and diagnostic labs.", image: genericDesc },
                    { label: "Retail Pharmacies", desc: genericDesc }
                ]
            },
            {
                title: "Other Industries",
                description: "Industry-specific waste solutions",
                items: [
                    { label: "Airports & Seaports", desc: genericDesc },
                    { label: "Chemical & Specialty Chemical", desc: genericDesc },
                    { label: "Education / Educational Institutions", desc: genericDesc },
                    { label: "Energy", desc: genericDesc },
                    { label: "Engineering & Consulting", desc: genericDesc },
                    { label: "General Manufacturing", desc: genericDesc },
                    { label: "Government & Military", desc: genericDesc },
                    { label: "Pharmaceutical & Biotechnology", desc: genericDesc },
                    { label: "Railroad Services", desc: genericDesc },
                    { label: "Refinery", desc: genericDesc },
                    { label: "Small Businesses", desc: genericDesc },
                    { label: "Steel & Primary Metals", desc: genericDesc },
                    { label: "Transportation", desc: genericDesc },
                    { label: "Utilities", desc: genericDesc }
                ]
            }
        ]
    },
    "Company": {
        columns: [
            {
                title: "Overview",
                description: "Who we are and what drives us",
                items: [
                    { label: "About Us", desc: "Learn about our company history." },
                    { label: "Mission & Values", desc: "Our core principles and goals." },
                    { label: "Certifications", desc: "Our industry certifications." },
                    { label: "Technology & Innovation", desc: "Advanced waste processing tech." },
                    { label: "Safety Standards", desc: "Our commitment to safety." },
                    { label: "Sustainability Report", desc: "Review our annual impact." }
                ]
            },
            {
                title: "More",
                description: "Careers and connect with us",
                items: [
                    { label: "Careers", desc: "Join our growing team." },
                    { label: "Client Testimonials", desc: "What our partners say." },
                    { label: "Case Studies", desc: "Success stories and projects." },
                    { label: "Contact Us", desc: "Get in touch with us." },
                    { label: "Standard of Excellence", desc: "Our quality promise." }
                ]
            }
        ]
    }
};
