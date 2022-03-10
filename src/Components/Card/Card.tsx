import { useGetCharactersQuery } from '../../features/apiSlice/apiSlice'
import Favorite from '../Favorite/Favorite'
import './Card.css' 

export default function Card () {
  const { data } = useGetCharactersQuery()

  return (
    <main>
      {data?.results.map(({ id, name, species, status, image }) => 
        <section key={id} className="Card">
          <Favorite id={id}/>
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{status}</p>
          <img src={image} alt={"picture of" + image} />
        </section>
      )}
    </main>
  )
}