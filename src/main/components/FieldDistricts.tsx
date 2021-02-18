import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'
import InputSelect, { IOption } from '../../components/inputSelect/InputSelect'
import { getOptionsDistricts } from '../../utils/getOptionsDistricts'

const OPTIONS_DISTRICTS = getOptionsDistricts()

const FieldDistricts: FC<FieldRenderProps<IOption[]>> = (props) => {
  const { input } = props

  return (
    <InputSelect
      {...input}
      options={OPTIONS_DISTRICTS}
      label={'Административные округа'}
      placeholder={'Округ'}
      isMulti
    />
  )
}

export default FieldDistricts
