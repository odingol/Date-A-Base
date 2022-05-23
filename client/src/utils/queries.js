import { gql } from '@apollo/client';

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

// Ask brian about how to query these
export const QUERY_CHARACTERS = gql`
  query allCharacters {
    character {
      name
      gender
      codeLanguage
      prompt
      description
      image
      link
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