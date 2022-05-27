import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_CHARACTER = gql`
//   mutation addCharacter($profileId: ID!, $character: String!) {
//     addCharacter(profileId: $profileId, character: $character) {
//       _id
//       name
//       characters
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
