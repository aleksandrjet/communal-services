import flatten from 'lodash/flatten'

import { months } from '../constants/months'
import { IOption } from '../components/inputSelect/InputSelect'

export const getOptionsPeriods = (): IOption[] => {
  const years = [2016, 2017, 2018, 2019, 2020, 2021]

  const monthsForYears: IOption[][] = years.map((year) => {
    return months.map((month) => {
      return { label: `${month} ${year}`, value: `${month}_${year}` }
    })
  })

  return flatten(monthsForYears)
}
