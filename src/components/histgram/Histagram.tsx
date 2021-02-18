import React, { FC } from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { districtColors } from '../../constants/districts'
import { getHistagramData } from './getHistagramData/getHistagramData'
import { IStatistic } from '../../data/data.types'
import s from './Histagram.module.sass'

interface IProps {
  data: IStatistic
}

const Histagram: FC<IProps> = (props: IProps) => {
  const { data } = props

  const normalizeData = getHistagramData(data)

  const keysData = Object.keys((normalizeData[0] as {}) || {})
  const keysForBars = keysData.filter((keyName) => {
    return keyName !== 'Supplier'
  })

  const barsList = keysForBars.map((keyName) => {
    return (
      <Bar
        key={keyName}
        dataKey={keyName}
        fill={districtColors[keyName] || '#B284BE'}
      />
    )
  })

  if (!normalizeData.length) {
    return (
      <div className={s.rootEmpty}>
        <p className={s.text}>
          По Вашему запросу нет данных, попробуйте изменить фильтры
        </p>
      </div>
    )
  }

  return (
    <div className={s.root}>
      <BarChart
        width={736}
        height={400}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        data={normalizeData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'Supplier'} />
        <Tooltip />
        <Legend />
        {barsList}
      </BarChart>
    </div>
  )
}

export default Histagram
