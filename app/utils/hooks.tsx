import * as React from 'react'
import mdxBundler from 'mdx-bundler/client'

const getMDXComponent = (code: string) => {
  const Component = mdxBundler.getMDXComponent(code)
  function MDXComponent({components, ...rest}: Parameters<typeof Component>['0']) {
    return <Component components={{...components}} {...rest} />
  }
  return MDXComponent
}

const useMdxComponent = (code: string) => {
  return React.useMemo(() => getMDXComponent(code), [code])
}

const useScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export {useMdxComponent, useScrollToTop}
