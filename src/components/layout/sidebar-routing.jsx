

const {
  LayoutDashboard,
  ContactRound,
  Settings,
  Plug,
  MapPin,
  GitPullRequest,
  Users,
  PanelTopOpen,
  ClipboardMinus,
  ClipboardList,
  ChartColumn,
  Layers,
  MessageCircleMore,
} = require("lucide-react");

export let PageRoutes = [
  {
    groupName: "Main",
    icon: <Plug />,
  },
  {
    title: "Dashboard",
    path: "/",
    icon: <LayoutDashboard />,
    active: "",
    children: [],
  },
  {
    groupName: "Management",
    icon: <Plug />,
  },
  {
    title: "Courses Management",
    path: "/courses",
    icon: <Layers />,
    active: "courses",
    children: [],
  },
 {
    title: "Trainers Management",
    path: "/trainers",
    icon: <Users />,
    active: "trainers",
  },
  {
    title: "Courses Links",
    path: "/links",
    icon: <PanelTopOpen />,
    active: "links",
    children: [],
  },
  
  {
    title:"Payment Management",
    path:"/payment",
    icon:<ChartColumn />,
    active:"payment",
    children:[]
  },
];
