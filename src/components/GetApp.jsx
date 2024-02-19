import React from 'react'
import Apple from '../assets/apple.svg'
import Android from '../assets/android.svg'
import Button from '../components/Button'
import Phone from '../assets/phones.png'
import Pattern from  '../assets/pattern.png'

export default function GetApp() {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app' style={{ backgroundImage: `url(${Pattern})` }} >
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
              <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h2>
              <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
              <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              name="App Store"
              icon={Apple}
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              name="Play Store"
              icon={Android}
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <img src={Phone} alt="phones" width={550} height={870} />
        </div>


      </div>
    </section>
  )
}
