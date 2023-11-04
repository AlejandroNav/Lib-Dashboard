import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function cubeIt(num: number) {
  return (Math.cbrt(num))
}
function isLeap(year: number):boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>DashBoard 34</h1>
      <p>{cubeIt(127)}</p>
      {isLeap(100)? <p>YYES</p>:<p>NOO</p>}
    </>
  )
}

export default App
