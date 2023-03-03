import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const useBooks = () => {
  const { result } = useQuery(gql`
    query getBooks {
      books {
        id
        name
        type,
        author {
          name
        }
      }
    }
  `)

  return {
    result
  }
}

export const useAuthors = () => {
  const { result, refetch } = useQuery(gql`
    query getAuthors {
      authors {
        id
        name
      }
    }
  `)

  return {
    result,
    refetch
  }
}

export const useAddAuthor = () => {
  const { mutate, onDone } = useMutation(gql`
    mutation createAuthor($createAuthorInput: CreateAuthorInput!) {
      createAuthor(createAuthorInput: $createAuthorInput) {
        id
      }
    }
  `)

  return { mutate, onDone }
}