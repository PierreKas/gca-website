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

import img1 from "../assets/thematic-area/them-area-img1.jpeg";
import img2 from "../assets/thematic-area/them-area-img2.jpeg";
import img3 from "../assets/thematic-area/them-area-img3.jpeg";
import img4 from "../assets/thematic-area/them-area-img4.jpeg";
import img5 from "../assets/thematic-area/them-area-img5.jpeg";
import img6 from "../assets/thematic-area/them-area-img6.jpeg";
import img7 from "../assets/thematic-area/them-area-img7.jpeg";
import img8 from "../assets/thematic-area/them-area-img8.jpeg";
import img9 from "../assets/thematic-area/them-area-img9.jpeg";
import img10 from "../assets/thematic-area/them-area-img10.jpeg";
import img11 from "../assets/thematic-area/them-area-img11.jpeg";
import img12 from "../assets/thematic-area/thematic1.jpeg";
import img13 from "../assets/thematic-area/thematic2.jpeg";
import img14 from "../assets/thematic-area/thematic3.jpeg";
import img15 from "../assets/thematic-area/thematic4.jpeg";
import img16 from "../assets/thematic-area/thematic5.jpeg";
import img17 from "../assets/thematic-area/thematic6.jpeg";
import img18 from "../assets/thematic-area/thematic7.jpeg";
import img19 from "../assets/thematic-area/thematic8.JPG";
import health1 from "../assets/health/health1.jpeg";
import health2 from "../assets/health/health2.jpeg";
import health3 from "../assets/health/health3.jpeg";
import edu from "../assets/education/edu.jpeg";
import profile from "../assets/profile.jpeg";
import sam from "../assets/team/samuel-kibi.jpeg";
import lydia from "../assets/team/lydia.jpeg";
import mukiiza from "../assets/team/mukiiza.jpeg";
import achelles from "../assets/team/achelles.jpeg";
import peter from "../assets/team/peter.jpeg";
import deborah from "../assets/team/deborah.JPG";
import dephas from "../assets/team/dephas.jpeg";
import joseph from "../assets/team/joseph.jpeg";
import daniel from "../assets/team/daniel.jpeg";
import eco1 from "../assets/testimony/econ1.jpeg";
import eco2 from "../assets/testimony/econ2.jpeg";
import eco3 from "../assets/testimony/econ3.jpeg";

export const team = [
  {
    user: "Samuel Kibi",
    role: "Co-Founder & Executive Director",
    image: sam,
    text: "Samuel Kibi is the Co-Founder  Executive Director of Game Connect Africa (GCA)",
  },
  {
    user: "Lydia Ntono",
    role: "Co-Founder & Sustainable development Director",
    image: lydia,
    text: "Lydia Ntono is a Co-Founder & Sustainable development Director of Game Connect Africa (GCA)",
  },
  // Board
  {
    user: "Kintu Daniel",
    role: "Board chairman",
    image: daniel,
    text: "",
  },
  {
    user: "Mukiiza Ivan",
    role: "Board Treasurer",
    image: mukiiza,
    text: "",
    //text: "Bachelor of Commerce - MUK\nPostgraduate Diploma in Tax and Revenue Administration\n\nIvan has 3 years of Accounting, Finance and Fund Management in NGO sector , 3 years of Tax, Accounting and Finance experience in Private Sector\nCurrently working as a Domestic Tax Officer with Uganda Revenue Authority.",
  },
  // {
  //   user: "Isumba B. Peter",
  //   role: "Board member",
  //   image: peter,
  //   text: "",
  // },
  {
    user: "Rev. Diphas L Mwanga",
    role: "Board member\nSpiritual leader",
    image: dephas,
    text: "",
  },
  {
    user: "Pastor Justine Mwanga",
    role: "Board member",
    image: "",
    text: "",
  },
  {
    user: "Kirabo Deborah",
    role: "Board member",
    image: deborah,
    text: "",
  },
  // Members
  {
    user: "Henry S. Mwesigwa",
    role: "Program Director",
    image: "",
    text: "",
  },
  {
    user: "Ambrosse Demune",
    role: "Programs Officer",
    image: "",
    text: "",
  },
  {
    user: "Isumba B. Peter",
    role: "Communication Manager",
    image: peter,
    text: "",
  },
  {
    user: "Byaruhanga Juma",
    role: "Sports Manager",
    image: joseph,
    text: "",
  },

  {
    user: "Acheles",
    role: "Grants & Fundrasing Manager",
    image: achelles,
    text: "",
  },
  {
    user: "Muwanguzi Andrew",
    role: "Children Ministry",
    image: "",
    text: "",
  },
  {
    user: "Geoffrey Isabariye",
    role: "Head Teacher of the GCA School",
    image: "",
    text: "",
  },
];

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
  // { label: "Get Involved", href: "/get-involved" },
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
    images: [img6, eco2, img7, eco3, img8, eco1], //[img2, img5, img13],
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
    images: [health1, health2, health3],
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
    images: [img13, edu, img11],
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
    images: [img15, img19, img16],
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
    images: [img1, img3, img17],
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
    title: "Local Church capacity building",
    description:
      "Game connect Africa empowers local churches to serve the poor and vulnerable through sports by building community ownership.",
  },
  {
    number: "02",
    title: "Street Children Rehabilitation",
    description:
      "To withdraw, rehabilitate and reintegrate children living on the street and other vulnerable situations in Eastern Central Regional.",
  },
  {
    number: "03",
    title: "Quality Health Services",
    description:
      "To ensure increased access to comprehensive, quality, and equitable health services to the most vulnerable communities.",
  },
  {
    number: "04",
    title: "Education Support",
    description:
      "To support the education of ex-street children and other vulnerable children.",
  },
  {
    number: "05",
    title: "Community Empowerment",
    description:
      "To improve livelihoods of youths and vulnerable families, support at-risk communities, empower the young generation with relevant knowledge and skills, and enhance agriculture and food security through farmer support and agricultural inputs.",
  },
  {
    number: "06",
    title: "Child Abuse Prevention",
    description:
      "To undertake actions to prevent and respond to child abuse, violence, and exploitation.",
  },
  {
    number: "07",
    title: "Gender Equality",
    description:
      "To enhance partnerships, networks and movements among young women, young men, adolescent girls and boys, working on gender equality.",
  },
  {
    number: "08",
    title: "Girls Empowerment",
    description:
      "To inspire, empower, transform and develop communities in which girls stay both social and community.",
  },
  {
    number: "09",
    title: "Menstrual Hygiene",
    description:
      "To provide quick access to information related to menstrual hygiene and sanitary materials to girls and young women.",
  },

  {
    number: "10",
    title: "HIV/AIDS Awareness",
    description:
      "Raising awareness of HIV, treatment, care, and support to persons living with HIV/AIDS.",
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
    "A healthy, socially, and economically empowered community for a better Africa through sports for all.", // "A healthy, socially, and economically empowered community through sports.",
  mission:
    "To protect, educate and empower community to raise above diversity using the power of sports.", //"To provide equitable, inclusive, and affordable quality health care, economic empowerment, and social services to the community through sports.",
  description:
    "Game Connect Africa is a Community Based Organization (CBO) aimed to protect, educate and empower community to raise above diversity using the power of sport for sustainable development in the Communities of Uganda through transformative leadership, advocacy, sexual Reproductive health education, and skills development.",
  approach:
    "We work in disadvantaged rural communities, focusing on enhancing children's learning, development, and access to medical care services and education through play. We take an innovative child-centred approach to education and use the power of play to transform the lives of children through our play programmes.",
  belief:
    "Game Connect Africa Uganda believe Children learn best through play. It's an essential part of their development. That's where we come into partner with parents, schools, health facilities, prisons, churches, and other stakeholders to make learning through play a priority for children in Uganda.",
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
