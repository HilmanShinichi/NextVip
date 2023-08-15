import React from 'react'
import style from '@/styles/404.module.scss'
import Image from 'next/image'

const Costume404 = () => {
  return (
    <div className={style.error}>
        <Image src="/not_found.png" width={600} height={600} alt="" />
        <div>
            404 | Halaman Tidak ditemukan
        </div>
    </div>
  )
}

export default Costume404