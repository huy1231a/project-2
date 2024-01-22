'use client'
import React from 'react'
import { Column } from '@ant-design/plots'

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

  return <Column {...config} />
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
