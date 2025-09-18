import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  Award,
  Image,
  Phone,
  Menu,
  X,
  HandHeartIcon,
} from "lucide-react";
import Socials from "./Socials";
import { useState } from "react";

function SideBarMobile() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About Me", path: "/about", icon: <User size={18} /> },
    { name: "Books", path: "/books", icon: <BookOpen size={18} /> },
    { name: "Awards", path: "/awards", icon: <Award size={18} /> },
    { name: "Services", path: "/services", icon: <HandHeartIcon size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      <div className="md:hidden  fixed top-0 left-0 w-full bg-white border-b border-gray-300 flex justify-between items-center px-4 py-3 z-50">
        <div className="flex items-center gap-3">
          <img
            src="/profile.png"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Dr. Pooja Singh
            </h2>
            <p className="text-xs text-gray-600">
              Writer & Social-Political Activist
            </p>
          </div>
        </div>

        <button
          className="p-2 text-gray-700 hover:text-purple-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-12 md:top-0 md:left-0 w-full bg-neutral-100  shadow-lg transform transition-all duration-300 z-40 
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 font-thin rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-purple-600 text-white  "
                  : "text-gray-700  hover:bg-purple-300 "
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <Socials />
      </div>
    </>
  );
}

export default SideBarMobile;
