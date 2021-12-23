import React from 'react'

import styles from './index.module.scss'

const b64toBlob = (url) => fetch(url).then(res => res.blob())

export const Thumb = ({ className, value, onChange }) => {
  const [ file, setFile ] = React.useState<any>()
  const [ loading, setLoading ] = React.useState(false)

  const inputRef = React.useRef()
  React.useEffect(() => {
    if (!file) return
    setLoading(true)

    const readFile = async (file) => {
      if (typeof file === 'string') {
        file = await b64toBlob(file)
      }
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(file)
      })
    }
    readFile(file)
      .then((value) => {
        setLoading(false)
        onChange(value)
      })
  }, [ file ])

  const handleClick = () => {
    // @ts-ignore
    inputRef.current.click()
  }

  return (
    <>
      <input
        hidden
        ref={inputRef}
        name="image"
        type="file"
        onChange={e => setFile(e.currentTarget.files[0])}
      />
      <div className={className}>
      {
        value
        ? loading
          ? <p>loading...</p>
          : (
            <img
              src={value}
              className={styles.image}
              height={200}
              width={200}
              onClick={handleClick}
            />
          )
        : null
      }
      </div>
    </>
  )
}
