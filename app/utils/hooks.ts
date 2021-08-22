import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

const useMdxComponent = (code: string) => {
  return React.useMemo(() => getMDXComponent(code), [code])
}

export {useMdxComponent}
