import React from 'react'
import Phone from '../assets/phone.png'
import Camp from '../assets/camp.svg'
import { FEATURES } from '../../constants'
import FeaturesBg from  '../assets/feature-bg.png'

export default function Features() {
  return (
    <section className='flexCenter overflow-hidden bg-center bg-no-repeat py-24' style={{ backgroundImage: `url(${FeaturesBg})` }}>
      
      <div className='max-container padding-container relative w-full flex flex-col lg:flex-row justify-end'>
        <div className=' flex flex-1 lg:min-h-[900px]'>
          <img src={Phone} alt="phone" width={440} height={1000} className='feature-phone' />
        </div>
            <div className='z-20 flex w-full flex-col lg:w-[60%]'>
                  <div className='relative'>
                      <img src={Camp} alt="camp" height={50} width={50} className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] '/>
                      <h2 className='bold-40 lg:bold-64 '>Our Features</h2>
                  </div>

                  <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:my-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
            </div>

      </div>
    </section>
  )
}

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <img src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}
