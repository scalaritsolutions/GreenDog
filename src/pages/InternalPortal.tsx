import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Calendar, 
  Settings, 
  Clock, 
  Scissors, 
  CheckCircle2, 
  XCircle,
  MoreVertical,
  Plus
} from 'lucide-react';

const roster = [
  { id: 1, dog: "Buddy", breed: "Yorkie", service: "Full Groom", time: "09:00 AM", status: "Completed" },
  { id: 2, dog: "Bella", breed: "Cockapoo", service: "Wash & Brush", time: "11:30 AM", status: "In Progress" },
  { id: 3, dog: "Max", breed: "Golden Retriever", service: "Full Groom", time: "02:00 PM", status: "Upcoming" },
  { id: 4, dog: "Luna", breed: "Pomeranian", service: "Puppy Intro", time: "04:30 PM", status: "Upcoming" }
];

export const InternalPortal = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-container min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-on-surface mb-2">Salon Roster</h1>
            <p className="text-on-surface-variant">Welcome back, Fiona. Here's your schedule for today.</p>
          </div>
          <button className="button-premium py-3 px-6 flex items-center gap-2">
            <Plus className="w-5 h-5" /> New Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Daily Revenue", value: "£160", icon: <Scissors /> },
            { label: "Appointments", value: "4", icon: <Calendar /> },
            { label: "New Clients", value: "1", icon: <Users /> },
            { label: "Completion", value: "25%", icon: <CheckCircle2 /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-outline-variant/10 flex items-center gap-5">
              <div className="bg-brand-forest/10 p-4 rounded-2xl text-brand-forest">
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-outline-variant/10 overflow-hidden">
          <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-xl bg-brand-forest text-white font-bold text-sm">Today</button>
              <button className="px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container font-bold text-sm">Tomorrow</button>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Clock className="w-4 h-4 text-on-surface-variant" />
                <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">March 27, 2026</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Time</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Dog & Breed</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {roster.map((row) => (
                  <tr key={row.id} className="hover:bg-brand-forest/5 transition-colors group">
                    <td className="px-8 py-8 font-bold text-brand-forest">{row.time}</td>
                    <td className="px-8 py-8">
                      <div>
                        <p className="font-bold text-on-surface">{row.dog}</p>
                        <p className="text-xs text-on-surface-variant font-medium">{row.breed}</p>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <span className="px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-forest text-xs font-bold tracking-widest">
                        {row.service.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-2">
                        {row.status === "Completed" ? (
                          <CheckCircle2 className="w-4 h-4 text-brand-forest" />
                        ) : row.status === "In Progress" ? (
                          <div className="w-2 h-2 bg-brand-olive rounded-full animate-pulse" />
                        ) : (
                          <Clock className="w-4 h-4 text-on-surface-variant/50" />
                        )}
                        <span className={`text-sm font-bold ${
                          row.status === "Completed" ? "text-brand-forest" : 
                          row.status === "In Progress" ? "text-brand-olive" : 
                          "text-on-surface-variant"
                        }`}>
                          {row.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <button className="p-2 hover:bg-white rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-on-surface-variant" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 bg-surface-container-low/50 text-center">
            <button className="text-brand-forest font-bold text-sm tracking-widest uppercase hover:underline">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
