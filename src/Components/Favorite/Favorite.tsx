import { useAppDispatch, useAppSelector } from '../../hooks'
import { toggledFavorites } from '../../features/favoritesSlice/favoritesSlice'
import { BsEmojiHeartEyes, BsEmojiHeartEyesFill } from 'react-icons/bs'

interface FavoriteTypes  {
  id: number
}

export default function Favorite ({ id }: FavoriteTypes) {
  const favorites = useAppSelector((state) => state.favorites.value)
  const dispatch = useAppDispatch()
  const isFavorite = favorites.includes(id)

  function handleCLick () {
    dispatch(toggledFavorites(id))
  }

  return (
    isFavorite ? <BsEmojiHeartEyesFill size="30px" onClick={handleCLick}/> : <BsEmojiHeartEyes size="30px" onClick={handleCLick}/>
  )
}