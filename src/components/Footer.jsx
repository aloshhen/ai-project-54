import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className="py-12 bg-brown-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">☕ Coffee Haven</div>
            <p className="text-brown-200">
              Уютная кофейня с бронированием и меню
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-brown-200 mb-2">ул. Кофейная, 123</p>
            <p className="text-brown-200 mb-2">+7 (123) 456-78-90</p>
            <p className="text-brown-200">info@coffeehaven.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Работаем</h3>
            <p className="text-brown-200 mb-2">Пн-Пт: 9:00 - 22:00</p>
            <p className="text-brown-200">Сб-Вс: 10:00 - 20:00</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brown-700 text-center text-brown-300">
          <p>© 2023 Coffee Haven. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}