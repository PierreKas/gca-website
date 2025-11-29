import {
  Heart,
  Users,
  BookOpen,
  Shield,
  Sprout,
  Activity,
  GraduationCap,
  Stethoscope,
  DollarSign,
  Home,
} from "lucide-react";

// Import your images here (example structure)
// import heroImage from "../assets/images/hero.jpg";
// import program1 from "../assets/programs/program1.jpg";
// etc...

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Core Values", href: "/values" },
    ],
  },
  { label: "Thematic Areas", href: "/thematic-areas" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact" },
];

export const coreValues = [
  {
    icon: <Home />,
    title: "Church Empowerment",
    description:
      "Partnering with faith-based organizations to strengthen community impact.",
  },
  {
    icon: <Heart />,
    title: "Inclusive Community Health",
    description:
      "Providing equitable and accessible healthcare services to all.",
  },
  {
    icon: <Shield />,
    title: "Child Participation & Protection",
    description:
      "Ensuring every child's voice is heard and their safety is prioritized.",
  },
  {
    icon: <Users />,
    title: "Transparency and Accountability",
    description:
      "Operating with openness and responsibility in all our actions.",
  },
  {
    icon: <Heart />,
    title: "Integrity",
    description:
      "Upholding honesty and strong moral principles in everything we do.",
  },
  {
    icon: <Shield />,
    title: "Respect for Human Rights",
    description: "Championing dignity, equality, and justice for all people.",
  },
];

export const thematicAreas = [
  {
    icon: <DollarSign />,
    title: "Economic Empowerment",
    description:
      "Support communities and households to improve their socioeconomic status using three main strategies that will protect and grow their asset base.",
    // images: [economicImg1, economicImg2, economicImg3],
    details: [
      "Increasing household financial resources",
      "Increasing socioeconomic skill base",
      "Facilitating market inclusion through VSLA and agricultural loan inputs",
      "Tailored support based on specific household needs and capabilities",
      "Differentiated and targeted household level phased approach",
    ],
  },
  {
    icon: <Stethoscope />,
    title: "Community Health",
    description:
      "Ensure increased access to comprehensive, quality, and equitable health services to the most vulnerable through community outreaches and health camps.",
    // images: [healthImg1, healthImg2, healthImg3],
    details: [
      "Maternal and Child Health",
      "Antenatal Care and Post-Natal services",
      "Malaria Management and Diarrhea Diseases treatment",
      "Sexual Reproductive Health and Rights Services",
      "HIV Prevention, Care and Treatment Services",
      "Elimination of Mother To Child Transmission of HIV",
      "Antiretroviral Therapy",
      "Social Support and Community Systems Strengthening",
    ],
  },
  {
    icon: <GraduationCap />,
    title: "Education",
    description:
      "Harnessing the creative power of youth, empowering them with skills and competences that are crucial for a flourishing world.",
    // images: [educationImg1, educationImg2, educationImg3],
    details: [
      "Broadening soft skills and vocational skilling",
      "Fostering systems thinking",
      "Helping students discover their talents and values",
      "Enabling active participation in local sustainability transitions",
      "Solutions for sustainability starting from the young generation",
    ],
  },
  {
    icon: <Activity />,
    title: "Sports for Children",
    description:
      "Reaching out to children in underserved communities with high rates of child labour, child abuse, child neglect, and exploitation.",
    // images: [sportsImg1, sportsImg2, sportsImg3],
    details: [
      "Rescue children from vulnerable situations",
      "Provide temporary care and protection through sports",
      "Rehabilitation programs",
      "Family tracing and reintegration",
      "Building physical, social, and emotional skills through play",
    ],
  },
  {
    icon: <Shield />,
    title: "Social Engagement - Child Protection",
    description:
      "Strengthen social safety nets protecting children and youth from abuse and exploitation.",
    // images: [protectionImg1, protectionImg2, protectionImg3],
    details: [
      "Peace Clubs Student Empowerment Project",
      "Promoting peace in primary and secondary schools",
      "Platform for skills learning and experience exchange",
      "Human Rights education",
      "Legal support and civil restitution for vulnerable children",
    ],
  },
];

export const objectives = [
  {
    number: "01",
    title: "Street Children Rehabilitation",
    description:
      "To withdraw, rehabilitate and reintegrate children living on the street and other vulnerable situations in Eastern Central Regional.",
  },
  {
    number: "02",
    title: "Quality Health Services",
    description:
      "To ensure increased access to comprehensive, quality, and equitable health services to the most vulnerable communities.",
  },
  {
    number: "03",
    title: "Education Support",
    description:
      "To support the education of ex-street children and other vulnerable children.",
  },
  {
    number: "04",
    title: "Youth Livelihoods",
    description:
      "To improve the livelihoods of youths and vulnerable families to prevent street migrations in Eastern Central.",
  },
  {
    number: "05",
    title: "HIV/AIDS Awareness",
    description:
      "Raising awareness of HIV, treatment, care, and support to persons living with HIV/AIDS.",
  },
  {
    number: "06",
    title: "Community Support",
    description:
      "Supporting the most at risk communities, empowering grandmothers, and their orphaned grandchildren.",
  },
  {
    number: "07",
    title: "Child Abuse Prevention",
    description:
      "To undertake actions to prevent and respond to child abuse, violence, and exploitation.",
  },
  {
    number: "08",
    title: "Gender Equality",
    description:
      "To enhance partnerships, networks and movements among young women, young men, adolescent girls and boys, working on gender equality.",
  },
  {
    number: "09",
    title: "Girls Empowerment",
    description:
      "To inspire, empower, transform and develop communities in which girls stay both social and community.",
  },
  {
    number: "10",
    title: "Skills Development",
    description:
      "To empower young generation with relevant knowledge and skills.",
  },
  {
    number: "11",
    title: "Menstrual Hygiene",
    description:
      "To provide quick access to information related to menstrual hygiene and sanitary materials to girls and young women.",
  },
  {
    number: "12",
    title: "Agriculture & Food Security",
    description:
      "Empower Communities for improved Agriculture and food security through agriculture inputs for farmers.",
  },
];

export const playSkills = [
  {
    title: "Physical Skills",
    description:
      "Building strength, coordination, and motor development through active play.",
  },
  {
    title: "Social Skills",
    description:
      "Learning to interact, cooperate, and build relationships with others.",
  },
  {
    title: "Emotional Skills",
    description:
      "Developing emotional intelligence, resilience, and self-regulation.",
  },
  {
    title: "Healthy Mind",
    description: "Promoting mental wellness and positive mindset development.",
  },
  {
    title: "Cognitive Skills",
    description:
      "Enhancing problem-solving, critical thinking, and learning abilities.",
  },
  {
    title: "Creative Skills",
    description: "Fostering imagination, innovation, and creative expression.",
  },
];

export const organizationInfo = {
  vision:
    "A healthy, socially, and economically empowered community through sports.",
  mission:
    "To provide equitable, inclusive, and affordable quality health care, economic empowerment, and social services to the community through sports.",
  description:
    "Game Connect Africa is a Community Based Organization (CBO) aimed at empowering Children, protect, educate, Treat and rise above adversity using the power of sports for sustainable development in the Communities of Eastern Busoga Region through transformative leadership, advocacy, sexual Reproductive health education, and skills development.",
  approach:
    "We work in disadvantaged rural communities, focusing on enhancing children's learning, development, and access to medical care services and education through play. We take an innovative child-centred approach to education and use the power of play to transform the lives of children through our play programmes.",
  belief:
    "Game Connect Africa Uganda believe Children learn best through play. It's an essential part of their development. That's where we come into partner with parents, schools, health facilities, prisons, churches, and other stakeholders to make learning through play a priority for children in Busoga region - Eastern Uganda.",
};

export const partners = [
  {
    category: "Community Partners",
    list: ["Parents", "Schools", "Health Facilities", "Prisons", "Churches"],
  },
  {
    category: "Stakeholders",
    list: [
      "Community Leaders",
      "NGOs",
      "CSOs",
      "FBOs",
      "Teachers",
      "Health Workers",
    ],
  },
];
