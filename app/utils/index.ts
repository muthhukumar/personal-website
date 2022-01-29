import * as React from 'react'

const useScrolled = (pageYOffset: number) => {
  const [scrolled, setScrolled] = React.useState(false)

  const onScroll = React.useCallback(() => {
    setScrolled(window.pageYOffset > pageYOffset)
  }, [pageYOffset])

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return scrolled
}

export { useScrolled }
