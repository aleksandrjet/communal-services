import { districts } from '../constants/districts'
import { IOption } from '../components/inputSelect/InputSelect'

export const getOptionsDistricts = (): IOption[] => {
  return Object.entries(districts).map(([value, label]) => {
    return { label, value }
  })
}
