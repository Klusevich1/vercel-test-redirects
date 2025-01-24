import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <div><a className='text-[18px] text-blue-400 no-underline' href="/">Главная</a></div>
        <div><a className='text-[18px] text-blue-400 no-underline' href="/about">О нас</a></div>
        <div><a className='text-[18px] text-blue-400 no-underline' href="/contacts">Контакты</a></div>
        <div><a className='text-[18px] text-blue-400 no-underline' href="/news">Новости</a></div>
    </div>
  )
}

export default Header