import * as Styles from './styles'

import React from 'react'
// eslint-disable-next-line react/display-name
export default function Signature(props) {
  return (
    <Styles.Form
      // style={{ overflow: 'hidden', height: 0 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <p>----------------------------------------------------------</p>
      Assinatura
    </Styles.Form>
  )
}
