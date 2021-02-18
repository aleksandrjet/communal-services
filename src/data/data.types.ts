export interface IAmountSuppliers {
  Amount: number
  Supplier: string
}

export interface IStatisticDistrictForMonth {
  global_id: number
  Suppliers: IAmountSuppliers[]
  AdmArea: string
  Month: string
  Year: number
  TotalAmount: number
  ID: number
}

export type IStatistic = IStatisticDistrictForMonth[]