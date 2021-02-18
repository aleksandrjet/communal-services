import { getNumberOfMonth } from './getNumberOfMonth'
import { IOption } from '../../../../components/inputSelect/InputSelect'

export const getDateFromOption = (periodOption: IOption | null): Date | null => {

  const [month, year] = periodOption?.value?.split?.('_') || []

  const numberYear = Number(year)
  const numberOfStartMonth = getNumberOfMonth(month)

  if (numberYear < 2016 || numberYear > 2021) {
    return null
  }

  if (numberOfStartMonth < 0 || numberOfStartMonth > 11) {
    return null
  }

  return new Date(numberYear, numberOfStartMonth)
}
