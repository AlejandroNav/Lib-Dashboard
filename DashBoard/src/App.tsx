import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let arr1 = [1,2,3,4,5,6]


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
      <h1>DashBoard 3</h1>
      <p>{arr1}</p>
    </>
  )
}

export default App
