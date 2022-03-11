import { useGetCharactersQuery } from '../../features/apiSlice/apiSlice'
import { isDisplayed, setDisplayedCharacter } from '../../features/detailCardSlice/detailCardSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { CharacterType } from '../../types'
import Favorite from '../Favorite/Favorite'
import './Cards.css' 

export default function Card () {
  const dispatch = useAppDispatch()
  const page = useAppSelector(store => store.changePage.value)
  const { data } = useGetCharactersQuery(page)

  console.log(data?.results)

  function handleOpenDetails (id: number) {
    dispatch(setDisplayedCharacter(id))
    dispatch(isDisplayed(true))
  }

  return (
    <>
      {data?.results.map(({ id, name, species, status, image }: CharacterType) => 
        <section key={id} className="Card">
          <Favorite id={id}/>
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{status === 'Alive' ? 'Alive 💚' : 'Dead 💔' }</p>
          <img src={image} alt={"picture of" + image} />
          <br />
          <button onClick={() => handleOpenDetails(id)}>open detailed view</button>
        </section>
      )}
    </>
  )
}