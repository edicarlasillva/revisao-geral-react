import { useState } from 'react'
import { Form } from '../../components/Form'
import { Post } from '../../types'

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  function handleCreateNewPost(newPost: Post) {
    setPosts((prevState) => [...prevState, newPost])
  }

  return (
    <>
      {console.log(posts)}
      <Form onSubmitNewPost={handleCreateNewPost} />

      {/* listar os posts */}
    </>
  )
}
