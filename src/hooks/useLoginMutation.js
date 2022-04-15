import { gql, useMutation } from '@apollo/client'
const LOGIN = gql`
mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export const useLoginMutation = () => {
  const [register, { loading, error }] = useMutation(LOGIN)
  return { register, loading, error }
}
