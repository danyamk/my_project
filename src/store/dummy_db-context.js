import React, { useReducer } from "react";

export const DUMMY_DB = [
  {
    key: Math.random().toString(),
    id: Math.random().toString(),
    artist: "Kendrick Lamar",
    name_track: "HUMBLE.",
    bio:
      "Kendrick Lamar Duckworth (born June 17, 1987) is " +
      "an American rapper, songwriter, and record producer. " +
      "He is often cited as one of the most influential rappers of his generation. " +
      "Aside from his solo career, he is also a member of the hip hop supergroup Black Hippy " +
      "alongside his former Top Dawg Entertainment (TDE) labelmates Ab-Soul, Jay Rock, and Schoolboy Q.",
  },
  {
    key: Math.random().toString(),
    id: Math.random().toString(),
    artist: "Eminem",
    name_track: "Killshot",
    bio:
      "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, " +
      "is an American rapper, songwriter and record producer." +
      "He is credited with popularizing hip hop in middle America and is critically acclaimed " +
      "as one of the greatest rappers of all time. " +
      "Eminem's global success and acclaimed works are widely regarded " +
      "as having broken racial barriers for the acceptance of white rappers in popular music.",
  },
  {
    key: Math.random().toString(),
    id: Math.random().toString(),
    artist: "Metallica",
    name_track: "Halo On Fire",
    bio:
      "Metallica is an American heavy metal band. " +
      "The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and " +
      "drummer Lars Ulrich and has been based in San Francisco for most of its career.",
  },
];

const PostContext = React.createContext({
  state: [],
  dispatch: (Artist, Name_Track, Bio) => {},
});

const myreducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return [
        ...state,
        {
          artist: action.payload.uArtist,
          name_track: action.payload.uName_Track,
          bio: action.payload.uBio,
          id: Math.random().toString(),
          key: Math.random().toString(),
        },
      ];
    default:
      return state;
  }
};

export const CreatePostProvider = (props) => {
  const [state, dispatch] = useReducer(myreducer, DUMMY_DB);

  return (
    <PostContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
