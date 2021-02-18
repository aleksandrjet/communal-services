import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

import InputSelect, { IOption } from '../../components/inputSelect/InputSelect'
import { getOptionsPeriods } from '../../utils/getOptionsPeriods'

const OPTIONS_PERIODS = getOptionsPeriods()

const FieldStartPeriod: FC<FieldRenderProps<IOption>> = (props) => {
  const {input} = props
  
  return (
    <InputSelect
      {...input}
      options={OPTIONS_PERIODS}
      label={'Начало периода'}
      placeholder={'Период'}
    />
  )
}

export default FieldStartPeriod
