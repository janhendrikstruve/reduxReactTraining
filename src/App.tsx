import { useAppDispatch } from './hooks'
import { nextPage, previousPage } from './features/changePageSlice/changePageSlice'
import Card from './Components/Cards/Cards'
import './App.css'


function App() {
  const dispatch = useAppDispatch()

  function handlePreviousPage () {
    dispatch(previousPage())
  }
  function handleNextPage () {
    dispatch(nextPage())
  }

  return (
    <div className="App">
      <h1>Rick and morty Redux</h1>
      <main>
        <Card/>
      </main>
      <button onClick={handlePreviousPage}>previous page</button>
      <button onClick={handleNextPage}>next page</button>
    </div>
  )
}

export default App
