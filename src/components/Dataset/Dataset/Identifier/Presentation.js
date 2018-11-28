import React from 'react'
import PresentationItem, { TextField } from '../../../PresentationItem'
import { FormattedMessage } from 'react-intl'

const Presentation = ({data}) => {
  return (
    <div>
      {data &&
        <dl>
          <TextField field="type" data={data} />
          <TextField field="identifier" data={data} />
          <TextField field="createdBy" data={data} />
          <TextField field="created" data={data} />
        </dl>
      }
    </div>
  )
}
export default Presentation