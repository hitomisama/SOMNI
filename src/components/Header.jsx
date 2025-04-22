import React from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { path: "/", cn: "首页", en: "HOME" },
  { path: "/news", cn: "新闻动态", en: "NEWS" },
  { path: "/about", cn: "关于我们", en: "COMPANY INFO" },
  { path: "/services", cn: "业务介绍", en: "SERVICES" },
  { path: "/works", cn: "商业项目", en: "WORKS" },
  { path: "/contact", cn: "联系我们", en: "CONTACT" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      
      <nav className="menu">
        <img src="/logo.jpg" alt="" />
        {menu.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
          >
        
            <span className="menu-cn">{item.cn}</span>
            <span className="menu-en">{item.en}</span>
          </Link>
        ))}
      </nav>
    </header>
    
  );
}