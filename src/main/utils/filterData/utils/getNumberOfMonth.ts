import { months } from '../../../../constants/months'

export const getNumberOfMonth = (month: string): number => {
  return months.findIndex((monthName) => {
    return monthName === month
  })
}
