import { useGetCharactersQuery } from '../../features/apiSlice/apiSlice'
import { setDisplayedCharacter, isDisplayed } from '../../features/detailCardSlice/detailCardSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { CharacterType, fetchedCharacterType } from '../../types'
import Favorite from '../Favorite/Favorite'
import './DetailCard.css'

export default function DetailCard () {
  const { characterId, showCharacter } = useAppSelector(state => state.detailCard)
  const characters = useGetCharactersQuery(characterId).data?.results

  const page = useAppSelector(state => state.changePage)
  const dispatch = useAppDispatch()
  

  function handleCloseDetails () {
    dispatch(setDisplayedCharacter(0))
    dispatch(isDisplayed(false))
  }

  if (!characters || !showCharacter) return <></>

  const detailCharacter = characters.find((character: fetchedCharacterType) => character.id ===  characterId)

  const { id, name, species, status, image } = detailCharacter
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