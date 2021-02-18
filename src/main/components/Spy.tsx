import React, { FC } from 'react'
import { FormSpy } from 'react-final-form'

interface IProps {
  setForm
}

const Spy: FC<IProps> = (props: IProps) => {
  const { setForm } = props

  return (
    <FormSpy
      subscription={{ values: true }}
      onChange={(props) => {
        setForm(props.values)
      }}
    />
  )
}

export default Spy
