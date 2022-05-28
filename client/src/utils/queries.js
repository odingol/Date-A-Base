import { gql } from "@apollo/client";

// export const QUERY_CHARACTERS = gql`
//   query savedCharacter($profileId: ID!) {
//     character(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

// Ask brian about how to query these
export const QUERY_CHARACTERS = gql`
  query allCharacters {
    characters {
      _id
      name
      gender
      codeLanguage
      prompt
      description
      image
    }
  }
`;

export const QUERY_GENDERS = gql`
  query allProfiles {
    profiles {
      name
      gender
    }
  }
`;
