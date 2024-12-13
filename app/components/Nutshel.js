import React from "react";
import {  FiMail, FiUsers } from "react-icons/fi";
import { IoLayersOutline } from "react-icons/io5"
import { FaHandshake, FaRegUser } from "react-icons/fa";


const HoverDevCards = () => {
  return (
    <div className="p-4 theme">
      <p className="text-3xl py-3 text-center font-semibold mb-2 capitalize ">Other features</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 pb-10">
        <Card
          title="B2B"
          subtitle="Business to business"
          href="#"
          Icon={FaHandshake}
        />
        <Card title="B2C" subtitle="Business To Client" href="#" Icon={FaRegUser} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FaRegUser} />
        <Card
          title="Bespoke"
          subtitle="Tailored Excellence"
          href="#"
          Icon={IoLayersOutline}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;