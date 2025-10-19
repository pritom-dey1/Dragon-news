import React from 'react'
import Marquee from 'react-fast-marquee'

export const LatestNews = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex bg-white py-3 px-2 gap-3 rounded-[5px]'>
        <h1 className='bg-[#d72050] text-white py-2 px-2 rounded-[5px]'>LatestNews</h1>
        <Marquee className='flex gap-3 text-red-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium voluptate quo adipisci? Totam magni aspernatur, repudiandae perspiciatis facere repellat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium voluptate quo adipisci? Totam magni aspernatur, repudiandae perspiciatis facere repellat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium voluptate quo adipisci? Totam magni aspernatur, repudiandae perspiciatis facere repellat.</p>
        </Marquee>
    </div>
  )
}
