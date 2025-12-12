'use client'

import { HardHat, Phone, Shield, Truck } from 'lucide-react'

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-dark via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-orange rounded-2xl shadow-2xl shadow-orange-500/30">
            <HardHat className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Boise Demolition
        </h1>

        <div className="inline-block mb-6">
          <span className="bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-brand-orange/30">
            Coming Soon
          </span>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Professional demolition services for residential and commercial properties
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Shield className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Licensed & Insured</h3>
            <p className="text-slate-400 text-sm">Full coverage for your protection</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <HardHat className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Safe Demolition</h3>
            <p className="text-slate-400 text-sm">Professional crew & equipment</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Truck className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Debris Removal</h3>
            <p className="text-slate-400 text-sm">Complete site cleanup included</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-slate-300 mb-4">Need a quote? Give us a call!</p>
          <a href="tel:+12089187378" className="inline-flex items-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105">
            <Phone className="w-6 h-6" />
            (208) 918-7378
          </a>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          A Top Shelf company · Serving Boise, Meridian, Nampa, Caldwell & beyond
        </p>
      </div>
    </main>
  )
}
