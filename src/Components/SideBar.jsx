import { Link, useLocation } from "react-router-dom";
import { Home, User, BookOpen, Award, Phone, HandHeart } from "lucide-react";
import Socials from "./Socials";

function SideBar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About Me", path: "/about", icon: <User size={18} /> },
    { name: "Books", path: "/books", icon: <BookOpen size={18} /> },
    { name: "Awards", path: "/awards", icon: <Award size={18} /> },
    {
      name: "Social-Services",
      path: "/services",
      icon: <HandHeart size={18} />,
    },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      <div className=" w-1/4 h-screen bg-neutral-100 text-black flex flex-col justify-between fixed left-0 top-0">
        <div className="p-6 border-b border-gray-300 ">
          <div className="flex items-center gap-3">
            <img
              src="/profile.png"
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h2 className="text-lg font-bold">Dr. Pooja Singh</h2>
              <p className="text-sm text-gray-700">
                Writer & Social-Political Activist
              </p>
            </div>
          </div>
        </div>

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

export default SideBar;
