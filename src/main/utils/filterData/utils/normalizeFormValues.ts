import isEmpty from 'lodash/isEmpty'

import { getDateFromOption } from './getDateFromOption'
import { IOption } from '../../../../components/inputSelect/InputSelect'

interface IParams {
  districts: IOption[] | null
  startPeriod: IOption | null
  endPeriod: IOption | null
}

interface IResult {
  districts: string[] | null
  startDate: Date | null
  endDate: Date | null
}

export const normalizeFormValues = (params: IParams): IResult => {
  const { districts, startPeriod, endPeriod } = params

  const normalizeDistricts = districts?.map((districtOption) => {
    return districtOption.value
  }) || null

  return {
    districts: isEmpty(normalizeDistricts) ? null : normalizeDistricts,
    startDate: getDateFromOption(startPeriod),
    endDate:  getDateFromOption(endPeriod),
  }
}
