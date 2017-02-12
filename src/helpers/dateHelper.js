import moment from 'moment'

function formatDate(date) {
  return moment(date).format("LL")
}

export {formatDate}