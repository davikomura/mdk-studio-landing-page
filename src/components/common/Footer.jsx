import React from 'react'
import zapzap from '../../assets/wpp.png'

const Footer = () => {
    return(
        <a href='https://api.whatsapp.com/send?phone=5598981600041' className='bg-transparent fixed bottom-0 right-0 z-50 pr-12 pb-12 w-20 md:w-25 lg:w-28'>
            <img src={zapzap}/>
        </a>
    )
}

export default Footer