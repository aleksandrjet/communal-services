import React, { FC } from 'react'
import cn from 'classnames'

import s from './Header.module.sass'

interface IProps {
  children?: string
  className?: string
}

const Header: FC<IProps> = (props: IProps) => {
  const { children = 'Статистика ЖКХ', className } = props

  return <p className={cn(s.root, className)}>{children}</p>
}

export default Header
