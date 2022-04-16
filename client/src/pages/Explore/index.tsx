import React, { FC } from 'react'
import BatchTransComponent from 'components/BatchTransComponent'
import SingleTransComponent from 'components/SingleTransComponent'

const Explore: FC = () => {
  return (
    <div className="grid-container">
      <SingleTransComponent />
      <BatchTransComponent />
    </div>
  )
}

export default Explore
