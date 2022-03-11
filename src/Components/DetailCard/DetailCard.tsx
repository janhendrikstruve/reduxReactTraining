import { unsetDisplayedCharacter } from '../../features/detailCardSlice/detailCardSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { CharacterType } from '../../types'
import Favorite from '../Favorite/Favorite'
import './DetailCard.css'

export default function DetailCard () {
  const { characterdata, showCharacter}  = useAppSelector(state => state.detailCard)
  const dispatch = useAppDispatch()
  
  function handleCloseDetails () {
    dispatch(unsetDisplayedCharacter())
  }

  const { id, name, species, status, image } = characterdata

  if(!showCharacter) return <></>

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