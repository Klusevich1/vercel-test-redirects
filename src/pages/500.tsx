import Header from '@/components/Header'
import React from 'react'

const InternalServerError = () => {
  return (
    <div>
      <Header />
      <h1>Error 500</h1>
      <p>Ошибка сервера, что-то пошло не так</p>
    </div>
  )
}

export default InternalServerError