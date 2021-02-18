import { suppliers } from '../constants/suppliers'
import { IOption } from '../components/inputSelect/InputSelect'

export const getOptionsSuppliers = (): IOption[] => {
  return Object.values(suppliers).map((supplier) => {
    return {label: supplier, value: supplier}
  })
}
