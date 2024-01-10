import { useContext, useState } from 'react'
import { Form } from '../../components/Form'
import { Post } from '../../types'
import { ThemeContext } from '../../App'

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  function handleCreateNewPost(newPost: Post) {
    setPosts((prevState) => [...prevState, newPost])
  }

  const themeContext = useContext(ThemeContext)

  if (!themeContext) return null

  const { toggleTheme } = themeContext

  return (
    <>
      {console.log(posts)}
      <button onClick={toggleTheme}>Trocar tema</button>
      <Form onSubmitNewPost={handleCreateNewPost} />

      {/* listar os posts */}
    </>
  )
}
