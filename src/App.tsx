
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 gap-5">
        <h1 className="text-center text-2xl font-semibold text-white">Progress Bar (useState)</h1>
        <ProgressBar />
      </div>
    </>
  )
}

export default App
