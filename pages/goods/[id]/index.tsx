import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import axios from 'axios'

import { Formik, Field, Form } from 'formik'
import { Layout } from 'components/Layout'
import { Input } from 'components/Input'
import { TextArea } from 'components/TextArea'
import { Thumb } from 'components/Thumb'
import { Checkbox } from 'components/Checkbox'
import { Button } from 'components/Button'



import styles from './index.module.scss'

const DuplicateIcon = props => <svg {...props} viewBox="0 0 24 24"><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/></svg>
const DeleteIcon = props => <svg {...props} viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>

interface Good {
  id: number
  name: string
  description: string
  image: string
  price: number
  count: number
  active: boolean
}

const values = (values) => ({ ...values, price: parseInt(values.price), count: parseInt(values.count) })

function Good({ good }: { good: Good }) {
  const router = useRouter()

  const handleUpdate = values => axios.patch(`/api/v1/goods/${good.id}`, values)
  const handleCreate = values => axios.post(`/api/v1/goods`, values)
  const handleDelete = () => axios
    .delete(`/api/v1/goods/${good.id}`)
    .then(() => router.push('/goods'))

  return (
    <Layout>
      <Formik
        initialValues={good}
        onSubmit={handleUpdate}
      >
        {({ values, setFieldValue }) => {
          const disabled = good.name === values.name
            && good.description === values.description
            && good.image === values.image
            && `${good.price}` === `${values.price}`
            && `${good.count}` === `${values.count}`
            && good.active === values.active
          console.log(disabled, good, values)
          
          return (
            <Form className={styles.root}>
              <DeleteIcon className={cn(styles.icon, styles.delete)} onClick={handleDelete} />
              <DuplicateIcon className={cn(styles.icon, styles.duplicate)} onClick={() => handleCreate(values)} />

              <Thumb
                className={cn(styles.field, styles.image)}
                value={values.image}
                onChange={value => setFieldValue('image', value)}
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
                className={cn(styles.field, styles.textarea)}
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
                <Button type="submit" disabled={disabled} green>
                  Update
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths(id) {
  // Call an external API endpoint to get goods
  const res = await fetch('https://aroma-vest.prj.yandex-academy.ru/api/v1/goods')
  const goods = await res.json()

  // Get the paths we want to pre-render based on goods
  const paths = goods.map(({ id }) => ({ params: { id: `${id}` } }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the good `id`.
  // If the route is like /goods/1, then params.id is 1
  const res = await fetch(`https://aroma-vest.prj.yandex-academy.ru/api/v1/goods/${params.id}`)
  const good = await res.json()

  // Pass good data to the page via props
  return { props: { good } }
}

export default Good
