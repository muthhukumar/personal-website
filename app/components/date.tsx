import * as React from 'react'
import moment from 'moment'

const Date: React.FC<{ date: string | number | Date; className: string | undefined }> = (props) => {
  const date = props.date
  return date ? (
    <p {...props} className={props.className}>
      {moment(date).format('dddd, MMMM Do YYYY')}
    </p>
  ) : null
}

export default Date
