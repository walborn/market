import React from 'react'
import cn from 'classnames'
import axios from 'axios'
import { useRouter } from 'next/router'

import { Formik, Field, Form } from 'formik'
import { Layout } from 'components/Layout'
import { Input } from 'components/Input'
import { TextArea } from 'components/TextArea'
import { Thumb } from 'components/Thumb'
import { Checkbox } from 'components/Checkbox'
import { Button } from 'components/Button'
import { elephant } from 'public/elephant'
import styles from './index.module.scss'

interface Good {
  id: number
  name: string
  descriptoin: string
  image: string
  price: number
  count: number
  active: boolean
}

const values = (values) => ({ ...values, price: parseInt(values.price), count: parseInt(values.count) })

function Good() {
  const router = useRouter()
  const handleCreate = values => axios
    .post(`/api/v1/goods`, values)
    .then(() => router.push('/goods'))

  return (
    <Layout>
      <Formik
        initialValues={{
          name: '',
          descriptoin: '',
          image: elephant,
          price: '',
          count: '',
          active: false,
        }}
        onSubmit={handleCreate}
      >
        {({ values, setFieldValue }) => (
        <Form className={styles.root}>
          <img
          width={800}
          style={{ boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'}}
            src="/web.png"
          />

          <label
            htmlFor="name"
            className={styles.title}
          >
            Name
          </label>
          <Field
            id="name"
            name="name"
            placeholder="Dingo"
            className={styles.field}
            component={Input}
          />

          <label
            htmlFor="description"
            className={styles.title}
          >
            Description
          </label>
          <Field
            id="description"
            name="description"
            placeholder="My favorite elephant"
            className={styles.field}
            component={TextArea}
          />
          <label
            htmlFor="price"
            className={styles.title}
          >
            Price
          </label>
          <Field
            id="price"
            name="price"
            placeholder="123"
            className={styles.field}
            component={Input}
          />
          
          <label
            htmlFor="count"
            className={styles.title}
          >
            Count
          </label>
          <Field
            id="count"
            name="count"
            placeholder="123"
            className={styles.field}
            component={Input}
          />

          <label
            htmlFor="active"
            className={styles.title}
          >
            <Checkbox
              id="active"
              className={styles.active}
              checked={values.active}
              onChange={e => setFieldValue('active', e.target.checked)}
            />
            Active
          </label>
         

          <div className={styles.submit}>
            <Button type="submit" green>
              Create
            </Button>
           </div>
        </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default Good
