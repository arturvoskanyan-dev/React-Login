import FacebookInfo from './components/FacebookIntro/FacebookIntro'
import FacebookLogin from './components/FacebookLogin/FacebookLogin'
import { signInData } from './data/data'
import './App.css'

function App() {
  return (
    <div className="facebook">
      <FacebookInfo />
      <FacebookLogin signInData={signInData} />
    </div>
  )
}

export default App
