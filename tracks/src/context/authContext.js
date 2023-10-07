import createDataContex from "./createDataContext"

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const { Provider, Context } = createDataContex(
  authReducer,
  {},
  { isSignedIn: false }
)
