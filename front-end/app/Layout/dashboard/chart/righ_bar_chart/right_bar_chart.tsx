import React from 'react'
import './style.css'

const RightChart: React.FC = ({}) => {
  return (
    <div className='property'>
      <h5>Property Referrals</h5>
      <div className='property__details'>
        <div>
          <div className='title__righbar'>
            <p className=''>Social Media</p>
            <p>64%</p>
          </div>
          <div className='pro'>
            <div className='pro__pup'></div>
            <div className='silver'></div>
          </div>
        </div>
        <div>
          <div className='title__righbar'>
            <p className=''>Marketpaces</p>
            <p>40%</p>
          </div>
          <div className='pro'>
            <div className='pro__pup__2'></div>
            <div className='silver'></div>
          </div>
        </div>
        <div>
          <div className='title__righbar'>
            <p className=''>Websites</p>
            <p>50%</p>
          </div>
          <div className='pro'>
            <div className='pro__pup__3'></div>
            <div className='silver'></div>
          </div>
        </div>
        <div>
          <div className='title__righbar'>
            <p className=''>Digital Ads</p>
            <p>80%</p>
          </div>
          <div className='pro'>
            <div className='pro__pup__4'></div>
            <div className='silver'></div>
          </div>
        </div>
        <div>
          <div className='title__righbar'>
            <p className=''>Others</p>
            <p>15%</p>
          </div>
          <div className='pro'>
            <div className='pro__pup__5'></div>
            <div className='silver'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightChart
