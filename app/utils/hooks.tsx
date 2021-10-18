import * as React from 'react'
import mdxBundler from 'mdx-bundler/client'
import PRRHighlight, {defaultProps} from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'

function Highlight(props) {
  return (
    <PRRHighlight {...defaultProps} {...props} theme={dracula}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({line})} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({token})} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </PRRHighlight>
  )
}

const getMDXComponent = (code: string) => {
  const Component = mdxBundler.getMDXComponent(code)
  function MDXComponent({components, ...rest}: Parameters<typeof Component>['0']) {
    return <Component components={{Highlight, ...components}} {...rest} />
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
