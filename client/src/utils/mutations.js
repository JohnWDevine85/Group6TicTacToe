import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;
