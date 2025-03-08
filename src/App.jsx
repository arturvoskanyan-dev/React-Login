import FacebookInfo from './components/FacebookIntro/FacebookIntro'
import FacebookLogin from './components/FacebookLogin/FacebookLogin'
import { logInData } from './data/data'
import './App.css'

function App() {
  return (
    <div className="facebook">
      <FacebookInfo />
      <FacebookLogin logInData={logInData} />
    </div>
  )
}

export default App
