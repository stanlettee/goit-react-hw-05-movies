import styles from './styles/Movies.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const apiKey = '71c3daa9589b3ba88d7c5d90ff9276b7'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.elements.input.value)
  }

  useEffect(() => {
    if (!search) return

    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: apiKey,
        query: search,
      },
    })
    .then(res => {
      setMovies(res.data.results)
    })
    .catch(err => console.error(err))
  }, [search])

  return (
    <section className={styles.movies}>
      <div className={`${styles.container} container`}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            name="input"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>

        <ul className={styles.list}>
          {movies.map(movie => (
            <li className={styles.item} key={movie.id}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}




