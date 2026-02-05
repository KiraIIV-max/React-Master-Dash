import React from 'react';
import { Search, Settings, Bell, User, Menu } from 'lucide-react';

const Navbar = ({onSearch}) => {
  return (
    <nav className="max-w-6xl sticky top-4 lg:left-1/4 z-40 flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 py-3 mx-4 lg:mx-6 mt-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-sm transition-all gap-3 lg:gap-0">
      
      <div className="flex flex-col w-full lg:w-auto">
        <div className="flex items-center text-xs text-gray-400 gap-1">
          <span className="hover:text-slate-700 cursor-pointer transition-colors">Pages</span>
          <span>/</span>
          <span className="text-slate-700 font-medium">Tables</span>
        </div>
        <h6 className="font-bold text-slate-700 tracking-tight text-sm mt-1">Tables</h6>
      </div>

      {/* Controls Area (Search & Icons) */}
      <div className="flex items-center gap-3 lg:gap-4 w-full lg:w-auto justify-between lg:justify-start">
        
        {/* Search Input */}
        <div className="relative flex items-center group flex-1 lg:flex-initial">
          <span className="absolute left-3 text-gray-400 group-focus-within:text-teal-400 transition-colors">
            <Search size={15} />
          </span>
          <input 
            type="text" 
            placeholder="Type here..." 
            onChange={onSearch}
            className="pl-10 pr-4 py-2 w-full lg:w-48 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-100 transition-all bg-white"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 lg:gap-3 text-gray-500">
          <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-slate-700 transition-colors">
            <User size={16} />
            <span className="text-xs font-bold">Sign In</span>
          </div>
          
          <User size={16} className="sm:hidden cursor-pointer hover:text-slate-700 transition-colors" />
          
          <Settings size={16} className="cursor-pointer hover:rotate-90 transition-all duration-500" />
          
          <div className="relative">
            <Bell size={16} className="cursor-pointer hover:text-slate-700" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;