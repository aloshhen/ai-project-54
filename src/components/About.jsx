import React from 'react'
import { cn } from '../utils'
import { Clock, Star, Coffee } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-900 mb-4">
            Как это работает
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Простой процесс бронирования и удобное меню
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Выберите время</h3>
            <p className="text-brown-700">
              Выберите удобное время и дату для визита
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Заполните форму</h3>
            <p className="text-brown-700">
              Укажите свои контактные данные и предпочтения
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-brown-800" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-2">Наслаждайтесь</h3>
            <p className="text-brown-700">
              Получите подтверждение и наслаждайтесь вашим визитом
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}