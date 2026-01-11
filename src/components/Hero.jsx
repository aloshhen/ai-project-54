import React from 'react'
import { cn } from '../utils'
import { Coffee, UtensilsCrossed, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="text-brown-500 text-sm font-bold uppercase tracking-wider">Свежий кофе</div>
            <div className="text-6xl md:text-8xl font-bold text-brown-900">
              <span className="bg-gradient-to-r from-brown-800 to-amber-500 text-transparent bg-clip-text">
                Coffee Haven
              </span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-brown-700 max-w-2xl mx-auto mb-12">
            Уютная кофейня с бронированием и меню. Наслаждайтесь ароматом свежего кофе в комфортной атмосфере.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-brown-800 text-white rounded-xl hover:bg-brown-700 transition-colors">
              Забронировать столик
            </button>
            <button className="px-8 py-3 border-2 border-brown-800 text-brown-800 rounded-xl hover:bg-brown-50 transition-colors">
              Посмотреть меню
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}