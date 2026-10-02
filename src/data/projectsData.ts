import { ProjectItem, ServiceItem } from '../types';

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "sanjay-place-residence",
    title: "The Sanjay Place Courtyard Residence",
    category: "Residential",
    location: "Civil Lines, Agra",
    year: "2024",
    area: "4,200 sq.ft",
    tagline: "Contemporary brutalist brickwork with central lightwell and climatic buffering.",
    description: "Designed for a multi-generational Agra family, this home balances thermal insulation against UP summers with dramatic internal courtyards, cantilevered stone canopies, and double-height living areas.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Passive Solar Shading", "Custom Travertine Joinery", "Double-Height Atrium", "Acoustic Insulation"],
    render3DType: "Photorealistic Exterior",
    beforeAfterComparison: {
      beforeLabel: "2D Architectural CAD Plan",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      afterLabel: "Photorealistic 3D Render & Light Study",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "taj-corridor-villa",
    title: "Taj Expressway Linear Villa",
    category: "3D Visualization",
    location: "Fatehabad Road Corridor, Agra",
    year: "2024",
    area: "6,500 sq.ft",
    tagline: "Monolithic concrete facade paired with warm fluted teakwood and cantilevered terraces.",
    description: "Full architectural conception and 3D simulation exploring sun path orientations across seasons to eliminate glare while bathing the master suites in ambient northern light.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["3D Daylight Simulation", "Thermal Massing", "Water Court Integration", "Cantilevered Balconies"],
    render3DType: "Photorealistic Exterior",
    beforeAfterComparison: {
      beforeLabel: "Structural Wireframe & Massing",
      beforeImage: "https://images.unsplash.com/photo-1581291518655-9523c932ded6?auto=format&fit=crop&w=1200&q=80",
      afterLabel: "Full 3D Material & Night Lighting Render",
      afterImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "veritas-corporate-hub",
    title: "Sanjay Place Executive Law Chambers",
    category: "Commercial",
    location: "Block 19, Sanjay Place, Agra",
    year: "2023",
    area: "3,100 sq.ft",
    tagline: "Quiet luxury workspace featuring sound-dampened acoustic fluting and brushed brass accents.",
    description: "Transformation of a commercial floorplate in central Sanjay Place into an elite, understated consultation space with private conference rooms and bespoke leather upholstery.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Acoustic Wall Panels", "Concealed HVAC Integration", "Ergonomic Layouts", "Bespoke Boardroom Tables"],
    render3DType: "Commercial Masterplan"
  },
  {
    id: "minimalist-penthouse-interior",
    title: "The Amber Living Penthouse",
    category: "Interiors",
    location: "Dayal Bagh, Agra",
    year: "2024",
    area: "2,800 sq.ft",
    tagline: "Warm minimalism, Venetian plaster textures, and recessed architectural lighting.",
    description: "An intentional departure from clutter. Every junction, shadow gap, and bespoke storage unit was modeled in high-definition 3D before a single hammer was struck.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Zero-Junction Detailing", "Custom Italian Marble Island", "Smart Ambient Scenes", "Bespoke Millwork"],
    render3DType: "Interior Living",
    beforeAfterComparison: {
      beforeLabel: "Initial 3D Spatial Layout",
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      afterLabel: "Final Finished Space with Textures",
      afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    id: "modern-minimal-duplex",
    title: "Khandari Duplex Villa Elevation",
    category: "3D Visualization",
    location: "Khandari, Agra",
    year: "2024",
    area: "3,800 sq.ft",
    tagline: "Dynamic parametric facade with deep shadow casting and integrated vertical gardens.",
    description: "Commissioned to modernize an existing structural frame. 3D visualization enabled the homeowner to explore 4 distinct material palettes before selecting slate stone with charred cedar timber.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Facade Retrofit Simulation", "Material Texture Testing", "Parametric Louvers", "Landscape Integration"],
    render3DType: "Spatial Planning"
  },
  {
    id: "lounge-experience-center",
    title: "Loom & Craft Luxury Retail Studio",
    category: "Commercial",
    location: "Civil Lines, Agra",
    year: "2023",
    area: "2,200 sq.ft",
    tagline: "Curvilinear display alcoves with micro-cement flooring and theatrical spot illumination.",
    description: "An experiential boutique space creating intimate client consultation nooks alongside museum-grade artifact displays.",
    heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Curved Plaster Walls", "Custom Display Podiums", "High-CRI Lighting", "Integrated POS Bar"],
    render3DType: "Interior Living"
  }
];

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: "architectural-planning",
    number: "01",
    title: "Architectural Planning & Engineering",
    subtitle: "Floorplans, Elevation & Structural Harmony",
    description: "From site analysis and Agra municipal bylaws compliance to flow optimization, thermal zoning, and structural integration. Every line drawn is purposeful and constructible.",
    deliverables: [
      "Vastu & Climatic Site Layouts",
      "Detailed Working Drawings & MEP Coordination",
      "Front Elevation & Structural Form Design",
      "Bylaw Verification & Sanction Assistance"
    ],
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "photorealistic-3d",
    number: "02",
    title: "3D Visualization & Planning",
    subtitle: "Visualize Every Corner Before Execution",
    description: "Our signature strength celebrated by clients across Agra. We produce high-fidelity 3D renderings, sun-path lighting simulations, and material mockups so you experience your space before spending on execution.",
    deliverables: [
      "Photorealistic Exterior 3D Elevations",
      "Full Interior Room Walkthrough Views",
      "Day/Night Architectural Lighting Simulations",
      "Accurate Material & Finish Specifications"
    ],
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "interior-design",
    number: "03",
    title: "Modern Interior Design",
    subtitle: "Sophisticated Materials, Lighting & Joinery",
    description: "Crafting quiet luxury and modern Indian living environments. We blend custom carpentry, marble and stone curation, ambient lighting design, and tailored palettes.",
    deliverables: [
      "Custom Millwork & Kitchen Detailing",
      "False Ceiling & Layered Lighting Design",
      "Color Palettes, Veneer & Stone Curation",
      "Curated Furniture & Soft Furnishing Directives"
    ],
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "turnkey-execution",
    number: "04",
    title: "Finishing & Site Supervision",
    subtitle: "A Responsible Team Committed to Precision",
    description: "Client reviews repeatedly commend our responsible project delivery. We bridge the gap between design vision and on-site craftsmen to achieve exceptional finish quality.",
    deliverables: [
      "Periodic Site Supervision & Milestone Audits",
      "Vendor & Material Quality Verification",
      "Joinery & Finishing Alignment Checks",
      "Final Handover & Snag-List Clearance"
    ],
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  }
];
