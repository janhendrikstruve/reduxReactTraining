import { useGetCharactersQuery } from './features/apiSlice/apiSlice'
import Card from './Components/Card/Card'
import './App.css'


function App() {
  const { data, isLoading, isSuccess, isError, error } = useGetCharactersQuery()

  console.log(data?.results)

  return (
    <div className="App">
      <h1>Rick and morty Redux</h1>
      <main>
        <Card/>
      </main>
    </div>
  )
}

export default App
