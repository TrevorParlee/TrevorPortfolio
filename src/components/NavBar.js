import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-900 ">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white 
            hover:text-blue-400 text-6xl font-bold cursive tracking-widest"
          >
            Trevor Parlee
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex text-3xl items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-300"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex text-3xl items-center py-3 px-3 my-6 rounded text-white hover:text-red-800"
            activeClassName="text-white bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex text-3xl items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/trevorparlee"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 70, width: 70 }}
          />
          <SocialIcon
            url="https://www.instagram.com/trevcodes/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 70, width: 70 }}
          />
          <SocialIcon
            url="https://my.indeed.com/p/trevorp-rhps4su"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 70, width: 70 }}
          />
        </div>
      </div>
    </header>
  );
}
