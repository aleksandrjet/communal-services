import { IOption } from '../../components/inputSelect/InputSelect'
import { getOptionsPeriods } from '../../utils/getOptionsPeriods'

export interface IFormValues {
  districts: IOption[] | null
  startPeriod: IOption | null
  endPeriod: IOption | null
}

export type IFieldName = keyof IFormValues

export const fieldNames: Record<IFieldName, IFieldName> = {
  districts: 'districts',
  endPeriod: 'endPeriod',
  startPeriod: 'startPeriod',
}

const OPTIONS_PERIODS = getOptionsPeriods()

export const initialValues: IFormValues = {
  districts: null,
  endPeriod: OPTIONS_PERIODS[0],
  startPeriod: OPTIONS_PERIODS[0],
}
