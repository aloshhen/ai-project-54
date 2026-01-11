import React from 'react'
import { cn } from '../utils'
import { Sparkles, UtensilsCrossed, Coffee, Calendar, Clock, Star } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Мы предлагаем уникальный опыт кофейного дегустирования и удобное бронирование
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="w-12 h-12 rounded-xl bg-brown-100 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Свежий кофе</h3>
            <p className="text-brown-700">
              Мы используем только свежемолотые зерна премиум-класса для каждого напитка
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="w-12 h-12 rounded-xl bg-brown-100 flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-6 h-6 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Широкое меню</h3>
            <p className="text-brown-700">
              От классического эспрессо до сладких десертов - у нас есть всё для вашего удовольствия
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="w-12 h-12 rounded-xl bg-brown-100 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Быстрое бронирование</h3>
            <p className="text-brown-700">
              Забронируйте столик за 2 минуты и получите подтверждение на email
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}