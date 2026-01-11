import React from 'react'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section id="booking" className="py-24 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-900 mb-4">
            Забронируйте столик
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto mb-12">
            Удобное бронирование за 2 минуты. Получите подтверждение на email
          </p>
          <button className="px-8 py-3 bg-brown-800 text-white rounded-xl hover:bg-brown-700 transition-colors">
            Начать бронирование
          </button>
        </div>
      </div>
    </section>
  )
}