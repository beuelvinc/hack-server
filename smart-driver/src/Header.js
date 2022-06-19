import React from 'react'

export default function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ marginRight: 50, height: 50 }} src={require('./image1.png')} />
        <img  style={{ height: 50 }} src={require('./Frame3.png')}  />
    </div>
  )
}
