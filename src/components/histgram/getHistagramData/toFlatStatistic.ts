import flatten from 'lodash/flatten'

import {
  IAmountSuppliers,
  IStatistic,
  IStatisticDistrictForMonth,
} from '../../../data/data.types'

type IDistrictData = Pick<
  IStatisticDistrictForMonth,
  'AdmArea' | 'Month' | 'Year'
>

export type IFlattenStatistic = IAmountSuppliers & IDistrictData

export const toFlatStatistic = (data: IStatistic): IFlattenStatistic[] => {
  const arrSupplierWithDistrictData: IFlattenStatistic[][] = data.map(
    (districtOnMonth) => {
      const { Suppliers, AdmArea, Month, Year } = districtOnMonth

      const districtData: IDistrictData = { AdmArea, Month, Year }

      return Suppliers.map((amountOfSupplier) => {
        return { ...amountOfSupplier, ...districtData }
      })
    },
  )

  return flatten(arrSupplierWithDistrictData)
}
