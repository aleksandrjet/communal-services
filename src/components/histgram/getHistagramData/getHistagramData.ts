import { supplierShortNames } from '../../../constants/suppliers'
import { districts } from '../../../constants/districts'
import { IFlattenStatistic, toFlatStatistic } from './toFlatStatistic'
import { IStatistic } from '../../../data/data.types'

type ISupplier = {Supplier: string}
type IAmount = {[shortDistrictName: string]: number}
type IItemHistagram = ISupplier & IAmount

export const getHistagramData = (data: IStatistic): IItemHistagram[] => {
  const flattenStatistic: IFlattenStatistic[] = toFlatStatistic(data)

  const result = {}

  flattenStatistic.forEach((flatten) => {
    const {AdmArea, Amount, Supplier} = flatten

    const district = districts[AdmArea]

    if (!result[Supplier]) {
      result[Supplier] = {}
    }

    if (!result[Supplier][district]) {
      result[Supplier][district] = 0
    }

    result[Supplier].Supplier = supplierShortNames[Supplier]
    result[Supplier][district] += Amount
  })

  return Object.values(result)
}


