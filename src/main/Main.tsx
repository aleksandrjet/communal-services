import React, { useMemo, useState } from 'react'
import { Field, Form } from 'react-final-form'

import Header from '../components/header/Header'
import FieldDistricts from './components/FieldDistricts'
import FieldStartPeriod from './components/FieldStartPeriod'
import FieldEndPeriod from './components/FieldEndPeriod'
import Spy from './components/Spy'
import Histagram from '../components/histgram/Histagram'
import { filterData } from './utils/filterData/filterData'
import { getErrorPeriod } from './utils/getErrorPeriod'
import { fieldNames, IFormValues, initialValues } from './utils/mainFormConfig'
import s from './Main.module.sass'

const Main = () => {
  const [formState, setFormState] = useState<IFormValues>(initialValues)

  const filteredData = useMemo(() => {
    return filterData(formState)
  }, [formState])

  const errorPeriod = getErrorPeriod(formState)

  return (
    <>
      <Form
        onSubmit={() => console.log('')}
        initialValues={initialValues}
        render={() => {
          return (
            <form className={s.root}>
              <Spy setForm={setFormState} />
              <Header />
              <Field name={fieldNames.districts} component={FieldDistricts} />
              <div className={s.filters}>
                <Field
                  name={fieldNames.startPeriod}
                  component={FieldStartPeriod}
                />
                <Field name={fieldNames.endPeriod} component={FieldEndPeriod} />
              </div>
              {errorPeriod && <p className={s.error}>{errorPeriod}</p>}
            </form>
          )
        }}
      />
      <Histagram data={filteredData} />
    </>
  )
}

export default Main
