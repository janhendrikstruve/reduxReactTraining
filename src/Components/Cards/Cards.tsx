import { useGetCharactersQuery } from '../../features/apiSlice/apiSlice'
import { setDisplayedCharacter } from '../../features/detailCardSlice/detailCardSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { CharacterType } from '../../types'
import Favorite from '../Favorite/Favorite'
import './Cards.css' 

export default function Card () {
  const dispatch = useAppDispatch()
  const page = useAppSelector(store => store.changePage.value)
  const { data: rawData, isFetching, isError, error } = useGetCharactersQuery(page)

  if (isFetching) return <div>Fetchig Data</div>

  if (isError) return <div>Error: {error}</div>
  
  const data = rawData.results.map(({ id, name, status, species, image }: CharacterType) => (
      {
        id,
        name,
        status,
        species,
        image
      }
    )
  )

  console.log(data)

  function handleOpenDetails (character: CharacterType) {
    dispatch(setDisplayedCharacter(character))
  }

  return (
    <>
      {data.map((character: CharacterType) => 
        <section key={character.id} className="Card">
          <Favorite id={character.id}/>
          <h2>{character.name}</h2>
          <img src={character.image} alt={"picture of" + character.image} />
          <br />
          <button onClick={() => handleOpenDetails(character)}>open detailed view</button>
        </section>
      )}
    </>
  )
}