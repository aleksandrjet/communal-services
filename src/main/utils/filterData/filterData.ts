import { IOption } from 'components/inputSelect/InputSelect'
import { IStatistic } from '../../../data/data.types'
import { normalizeFormValues } from './utils/normalizeFormValues'
import { getNumberOfMonth } from './utils/getNumberOfMonth'
import { data } from '../../../data/data'

interface IParams {
  districts: IOption[] | null
  startPeriod: IOption | null
  endPeriod: IOption | null
}

export const filterData = (params: IParams): IStatistic => {
  const { districts, startDate, endDate } = normalizeFormValues(params)

  return data.filter((districtMonth) => {
    const { AdmArea: district, Month: month, Year: year } = districtMonth

    if (!startDate || !endDate || !districts) {
      return false
    }

    if (!districts.includes(district)) {
      return false
    }

    const numberOfMonth = getNumberOfMonth(month)
    const currentDate = new Date(year, numberOfMonth)

    if (startDate <= currentDate && currentDate <= endDate) {
      return true
    }

    return false
  })
}
