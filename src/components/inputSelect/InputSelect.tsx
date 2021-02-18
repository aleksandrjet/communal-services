import React, { FC } from 'react'
import Select from 'react-select'
import cn from 'classnames'

import s from './InputSelect.module.sass'

export interface IOption {
  value: string
  label: string
}

interface IProps {
  label?: string
  options: IOption[]
  placeholder?: string
  className?: string
  isMulti?: boolean
  value: IOption | IOption[]
  onChange?: (value) => void
}

const InputSelect: FC<IProps> = (props: IProps) => {
  const {label, options, placeholder, isMulti, className, onChange, value} = props

  return (
    <div className={cn(s.root, className)}>
      {label && <p className={s.label}>{label}</p>}
      <Select
        value={value}
        isMulti={!!isMulti}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    </div>

  )
}

export default React.memo(InputSelect)
