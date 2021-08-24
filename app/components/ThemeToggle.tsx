import {FaSun, FaMoon} from 'react-icons/fa'

import {Themed, useTheme} from '../utils/theme-provider'

function ThemeToggle() {
  const {toggleTheme} = useTheme()
  return (
    <button onClick={toggleTheme} className="rounded-md">
      <Themed light={<FaMoon />} dark={<FaSun />} />
    </button>
  )
}

export default ThemeToggle
