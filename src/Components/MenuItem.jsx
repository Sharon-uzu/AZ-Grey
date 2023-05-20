import { FaTh, FaUserAlt, FaCommentAlt } from "react-icons/fa";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"
import {BsFillBagFill} from "react-icons/bs"
const MenuItem = [
  [
    {
      path: "/Admin/AdminVendor",
      name: "Vendor",
      icon: <FaTh />,
    },
    {
      path: "/Admin/AdminRider",
      name: "Rider",
      icon: <FaUserAlt />,
    },
    {
      path: "/Admin/AdminUser",
      name: "User",
      icon: <FaCommentAlt />,
    },
  ],
  [
    {
      path: "/Rider/Home",
      name: "Home",
      icon: <AiOutlineHome />,
    },
    {
      path: "/Rider/Search",
      name: "search",
      icon: <AiOutlineSearch />,
    },
    {
      path: "/Rider/Order",
      name: "Order",
      icon: <BsFillBagFill />,
    },
    {
    path: "/Rider/Settings",
    name: "Settings",
    icon: <FaCommentAlt />,
    }
  ],
  [
    {
      path: "/Vendor",
      name: "Vendor",
      icon: <FaTh />,
    },
    {
      path: "/Rider",
      name: "Rider",
      icon: <FaUserAlt />,
    },
    {
      path: "/User",
      name: "User",
      icon: <FaCommentAlt />,
    },
  ],
  [
    {
      path: "/Vendor",
      name: "Vendor",
      icon: <FaTh />,
    },
    {
      path: "/Rider",
      name: "Rider",
      icon: <FaUserAlt />,
    },
    {
      path: "/User",
      name: "User",
      icon: <FaCommentAlt />,
    },
  ],
];

const HarmburgerData = [
  [
    {
      path: "/Rider/Home",
      name: "Home",
      icon: <AiOutlineHome />,
    },
    {
      path: "/Rider/Search",
      name: "search",
      icon: <AiOutlineSearch />,
    },
    {
      path: "/Rider/Order",
      name: "Order",
      icon: <BsFillBagFill />,
    },
    {
    path: "/Rider/Settings",
    name: "Settings",
    icon: <FaCommentAlt />,
    }
  ],
]

export {HarmburgerData}
export default MenuItem;
