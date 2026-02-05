import React from "react";

const StatsCard = ({ title, amount, percentage, icon, isUp }) => {
  return (
    <section className="ml-0 lg:ml-72 mt-5 bg-white p-4 lg:p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-100/50 lg:mr-6 mx-4 lg:mx-0 gap-4 sm:gap-0">
      <div className="flex flex-col flex-1">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          {title}
        </span>
        <div className="flex items-center gap-2">
           <h3 className="text-lg font-bold text-slate-700">{amount}</h3>
           <span className={`text-xs font-bold ${isUp ? 'text-green-400' : 'text-red-400'}`}>
             {isUp ? '+' : ''}{percentage}%
           </span>
        </div>
      </div>

      <div className="bg-teal-400 p-3 rounded-xl shadow-lg shadow-teal-100 text-white shrink-0">
        {icon}
      </div>
    </section>
  );
};

export default StatsCard;