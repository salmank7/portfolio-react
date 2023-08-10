import {
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlinePaperClip,
  AiOutlineBook,
  AiOutlineMail,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleSquare,
} from "react-icons/ai";

export const sidebarMenuLinks = [
  {
    id: 1,
    label: "home",
    icon: AiOutlineHome,
    route: "/",
  },
  {
    id: 2,
    label: "About",
    icon: AiOutlineProfile,
    route: "/about",
  },
  {
    id: 3,
    label: "Resume",
    icon: AiOutlinePaperClip,
    route: "/resume",
  },
  {
    id: 4,
    label: "Portfolio",
    icon: AiOutlineBook,
    route: "/portfolio",
  },
  {
    id: 5,
    label: "Blog",
    icon: AiOutlineBook,
    route: "/blogs",
  },
  {
    id: 6,
    label: "Contact",
    icon: AiOutlineMail,
    route: "/contact",
  },
];

export const sidebarFooterIcons = [
  {
    id: 1,
    icon: AiFillFacebook,
    route: "/",
  },
  {
    id: 2,
    icon: AiFillGithub,
    route: "/",
  },
  {
    id: 3,
    icon: AiFillTwitterSquare,
    route: "/",
  },
  {
    id: 4,
    icon: AiFillLinkedin,
    route: "/",
  },
  {
    id: 5,
    icon: AiFillDribbbleSquare,
    route: "/",
  },
];
