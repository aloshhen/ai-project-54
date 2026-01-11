import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brown-800">☕ Coffee Haven</div>
        <div className="space-x-6">
          <a href="#" className="text-brown-700 hover:text-brown-900">Главная</a>
          <a href="#menu" className="text-brown-700 hover:text-brown-900">Меню</a>
          <a href="#booking" className="text-brown-700 hover:text-brown-900">Бронирование</a>
        </div>
      </div>
    </nav>
  )
}