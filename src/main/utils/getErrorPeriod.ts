import { IFormValues } from './mainFormConfig'
import { getDateFromOption } from './filterData/utils/getDateFromOption'

export const getErrorPeriod = (formState: IFormValues): string | null => {
  const {startPeriod, endPeriod} = formState
  const startDate = getDateFromOption(startPeriod)
  const endDate = getDateFromOption(endPeriod)

  if (startDate && endDate && endDate < startDate) {
    return 'Дата окончания периода не должна быть раньше, даты начала периода'
  }

  return null
}
