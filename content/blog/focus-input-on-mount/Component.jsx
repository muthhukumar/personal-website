import * as React from 'react'

function LoginForm({shouldFocus}) {
  const emailInputRef = React.useRef(null)

  React.useEffect(() => {
    if (shouldFocus) {
      emailInputRef.current.focus()
    }
  }, [])

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{border: '1px solid black', padding: '16px'}}>
      <h2 style={{margin: '10px'}}>Login form</h2>
      <label>
        email: <input placeholder="email" name="email" type="email" ref={emailInputRef} />
      </label>
      <br />
      <label>
        password: <input placeholder="password" name="password" type="password" />
      </label>
      <br />
      <button type="submit" style={{border: '1px solid black', padding: '8px 14px'}}>
        login
      </button>
    </form>
  )
}

function App() {
  const [mount, setMount] = React.useState(true)
  const [shouldFocus, setShouldFocus] = React.useState(true)
  return (
    <div style={{border: '1px solid black', padding: '16px'}}>
      <div style={{minHeight: '14rem'}}>
        {mount ? <LoginForm shouldFocus={shouldFocus} /> : null}
      </div>
      <br />
      <label>
        mount login form:{' '}
        <input
          name="mount"
          checked={mount}
          type="checkbox"
          onChange={(e) => setMount(e.target.checked)}
        />
      </label>
      <br />
      <label>
        should focus input on mount{' '}
        <input
          name="shouldFocus"
          checked={shouldFocus}
          type="checkbox"
          onChange={(e) => setShouldFocus(e.target.checked)}
        />
      </label>
    </div>
  )
}

export {LoginForm}

export default App
