import React from 'react'

export default function Alert(props) {
  const Cap = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <div style={{ height: '48px', marginTop:"4.1rem" }} className='al mb-2'>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Cap(props.alert.type)}</strong>:{props.alert.msg}
      </div>}
    </div>

  )
}
