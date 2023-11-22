import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      url: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      url: "/About",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      url: "/Analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      url: "/Comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      url: "/Product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
  ];

  return (
    // <div className="container">
    <div style={{ width: isOpen ? "270px" : "50px" }} className="sidebar">
      <div className="top-section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          logo
        </h1>
        <div style={{ marginLeft: isOpen ? "70px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <Link to={item.url} key={index} className="link">
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link-text"
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
    // </div>
  );
};

export default Sidebar;
