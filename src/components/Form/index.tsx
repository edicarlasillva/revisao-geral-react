import { FormContainer, InputStyle, ButtonStyle } from './styles'
import { Post } from '../../types'
import { useState } from 'react'

interface FormProps {
  onSubmitNewPost: (newPost: Post) => void
}

const emptyPost = {
  title: '',
  author: '',
  category: '',
  date: '',
}

export function Form({ onSubmitNewPost }: FormProps) {
  const [formData, setFormData] = useState(emptyPost)
  const { author, category, date, title } = formData

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    onSubmitNewPost(formData)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputStyle
        type="text"
        value={title}
        name="title"
        placeholder="Título"
        onChange={handleInputChange}
      />
      <InputStyle
        type="text"
        value={author}
        name="author"
        placeholder="Autor"
        onChange={handleInputChange}
      />
      <InputStyle
        type="text"
        value={category}
        name="category"
        placeholder="Categoria"
        onChange={handleInputChange}
      />
      <InputStyle
        type="text"
        value={date}
        name="date"
        placeholder="Data"
        onChange={handleInputChange}
      />

      <ButtonStyle>Publicar Post</ButtonStyle>
    </FormContainer>
  )
}
