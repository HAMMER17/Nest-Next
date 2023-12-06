import React from 'react'

export default function UiButton({ clname, click }: any) {
  return (
    <div>
      <button type='submit' className={clname}>{click}</button>
    </div>
  )
}
