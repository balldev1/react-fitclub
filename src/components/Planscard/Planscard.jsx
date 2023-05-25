import React from 'react'
import './Planscard.css'
import {plansData} from '../../data/plansData'
import whiteTick from "../../assets/whiteTick.png"

const Planscard = () => {
    return (
      <div className="plans-container" id='plans'>
          {/* {header} */}
          <div className="blur plans-blur1"></div>
          <div className="blur plans-blur2"></div>
          <div className='programs-header' style={{gap: '2rem'}}>
              <span className='stroke-text'>READY TO START</span>
              <span>YOUR JOURNEY</span>
              <span className='stroke-text'>NOW WITHUS</span>
          </div>
          {/* {plans card} */}
          <div className='plans'>
              { plansData.map((plan,i)=>(
                  <div className='plan' key={i}>
                     {plan.icon}
                     <span>{plan.name}</span>
                     <span>$ {plan.price}</span>
                    
                     <div className='features'>
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}> {feature}</span>
                            </div>
                        ))}
                   </div>

                   <div>
                    <span>See more benefits -></span>
                   </div>
                   <button className='btn'>join now</button>
                  </div>
              ) )}
          </div>
      </div>
    )
  }

export default Planscard
