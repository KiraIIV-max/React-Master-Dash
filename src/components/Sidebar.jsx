import React, { useState } from 'react'
import { LayoutDashboard } from 'lucide-react';
import { House } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Gavel } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { FileUser } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { X } from 'lucide-react';


const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState(false);

  const mainLinks = [
    { name: 'Dashboard', icon: <House size={18}/> },
    { name: 'Tables', icon: <ChartNoAxesColumn size={18}/> },
    { name: 'Billing', icon: <Wallet size={18}/> },
    { name: 'RTL', icon: <Gavel size={18}/> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <section className={`
        w-64 p-4 h-screen bg-gray-50/50 
        fixed lg:absolute top-0 left-0 z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}> 
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-slate-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className='flex flex-col gap-6'>
          <div className='pb-7 border-b-[1px] border-gray-200 flex gap-3 items-center font-bold text-sm tracking-tight uppercase text-slate-700'> 
            <span className="text-teal-400"><LayoutDashboard size={22} /></span> 
            purity ui dashboard 
          </div>

          <div className="flex flex-col gap-2">
            {mainLinks.map((item) => {
              const isActive = activeItem === item.name;

              return (
                <div 
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    onClose?.();
                  }} 
                  className={`flex gap-3 p-3 items-center text-sm font-bold transition-all cursor-pointer rounded-2xl
                    ${isActive ? 'bg-white shadow-sm text-slate-700' : 'text-gray-400 hover:bg-gray-100'}`}
                > 
                  <span className={`rounded-xl p-2 shadow-sm transition-all
                    ${isActive ? 'bg-teal-400 text-white shadow-teal-100' : 'bg-white text-teal-400'}`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          <p className='text-[12px] tracking-widest font-bold pt-4 pb-2 items-center uppercase text-slate-700'>
            Account Pages
          </p>

          <div className="flex flex-col gap-2">
            {[
              { name: 'Profile', icon: <UserRound size={18}/> },
              { name: 'Sign In', icon: <FileUser size={18}/> },
              { name: 'Sign Up', icon: <Rocket size={18}/> },
            ].map((item) => {
              const isActive = activeItem === item.name;
              return(
                <div 
                  key={item.name} 
                  onClick={() => {
                    setActiveItem(item.name);
                    onClose?.();
                  }} 
                  className={`flex gap-3 p-3 items-center text-sm font-bold transition-all cursor-pointer rounded-2xl
                    ${isActive ? 'bg-white shadow-sm text-slate-700' : 'text-gray-400 hover:bg-gray-100'}`}
                > 
                  <span className={`rounded-xl p-2 shadow-sm transition-all
                    ${isActive ? 'bg-teal-400 text-white shadow-teal-100' : 'bg-white text-teal-400'}`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Sidebar