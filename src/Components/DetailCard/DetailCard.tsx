import { useGetCharactersQuery, useGetSpecificCharacterQuery } from '../../features/apiSlice/apiSlice'
import { setDisplayedCharacter, isDisplayed } from '../../features/detailCardSlice/detailCardSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { CharacterType } from '../../types'
import Favorite from '../Favorite/Favorite'
import './DetailCard.css'

export default function DetailCard () {
  const { characterId, showCharacter } = useAppSelector(state => state.detailCard)
  const dispatch = useAppDispatch()

  const data = useGetCharactersQuery(characterId).data

  function handleCloseDetails () {
    dispatch(setDisplayedCharacter(0))
    dispatch(isDisplayed(false))
  }

  if (!showCharacter || !data) return <></> 
  const { id, name, species, status, image }: CharacterType = data.results
  return (
    <>
      <section key={id} className="DetailCard">
        <Favorite id={id}/>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{status}</p>
        <img src={image} alt={"picture of" + image} />
        <br />
        <button onClick={handleCloseDetails}>close detailed view</button>
      </section>
    </>
      )

  

}