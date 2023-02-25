import { useQuery } from '@vue/apollo-composable'
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