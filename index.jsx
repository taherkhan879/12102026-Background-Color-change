import {useState} from 'react'
import './index.css'

const LightDarkMode = () => {
  const [lightDark, setLightDark] = useState(false)

  const lightDarkMode = () => {
    setLightDark(prev => !prev)
  }

  return (
    <div className={lightDark ? 'container dark' : 'container light'}>
      <div className="container1">
        <h1 className="heading-text">Click to Change Mode</h1>
        <button type="button" onClick={lightDarkMode} className="buttonText">
          {lightDark ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  )
}

export default LightDarkMode
