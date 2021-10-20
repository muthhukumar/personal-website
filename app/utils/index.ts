import moment from 'moment'

const isServerEnvironment: () => boolean = () => typeof window === 'undefined'

const composeToArticleDate = (date: string | Date | number) => {
  return moment(date).format('ddd MMMM Do YYYY')
}

export {isServerEnvironment, composeToArticleDate}
