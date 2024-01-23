'use client'
import React from 'react'
import { Column } from '@ant-design/plots'
import './style.css'

interface DataItem {
  name: string
  月份: string
  月均降雨量: number
}

const DemoColumn: React.FC = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    // 分组柱状图 组内柱子间的间距 (像素级别)
    dodgePadding: 2,
    // 分组柱状图 组间的间距 (像素级别)
    intervalPadding: 20,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'bottom',
      color: ['#1ca9e6', '#f88c24'],
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'white',
        },
      ],
    },
  }

  return (
    <div>
      <div className='title__chart'>
        <h4 className='title__1'>Total Revenue</h4>
        <div className='title__2'>
          <div className='last__month'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'>
              <circle cx='6.5' cy='6.5' r='6.5' fill='#6C5DD3' />
            </svg>
            <span>Last Month</span>
          </div>
          <div className='runnung__month'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'>
              <circle cx='6.5' cy='6.5' r='6.5' fill='#CFC8FF' />
            </svg>
            <span>Running Month</span>
          </div>
        </div>
      </div>
      <div className='data__chart'>
        <p className='total__num'>$236,535</p>
        <div className='squal'>
          <div className='circle'>
            <div className='svg_op'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='10'
                viewBox='0 0 8 10'
                fill='#FCFCFC'
                className=''>
                <path
                  d='M0.910457 4.30885C0.702177 4.52478 0.364489 4.52478 0.15621 4.30885C-0.0520699 4.09292 -0.0520699 3.74283 0.15621 3.5269L3.24575 0.323893C3.66231 -0.107964 4.33769 -0.107965 4.75425 0.323893L7.84379 3.5269C8.05207 3.74283 8.05207 4.09292 7.84379 4.30885C7.63551 4.52478 7.29782 4.52478 7.08954 4.30885L4.53333 1.65876V9.44708C4.53333 9.75245 4.29455 10 4 10C3.70545 10 3.46667 9.75245 3.46667 9.44708V1.65876L0.910457 4.30885Z'
                  fill='#6C5DD3'
                />
              </svg>
            </div>
          </div>
          <div className='more__than'>
            <span className='number__chart'>0,8%</span>
            <span className='month'>Than last Month</span>
          </div>
        </div>
      </div>
      <Column {...config} />
    </div>
  )
}

const App: React.FC = () => {
  return <DemoColumn />
}

// For Next.js, use the App component in pages/index.tsx or any other appropriate file
const Chart: React.FC = () => {
  return <App />
}

export default Chart

// In Next.js, you don't need to manually call ReactDOM.render as Next.js handles it for you.
