const authStateDefault = {
  user: null,
  participant: null,
  newUserInfo: {
    name: '',
    email: '',
    passwordOne: '',
    image: '',
    creatingUserParticipant: false
  }
}

export function authReducer( authState = authStateDefault , action ){
  switch (action.type){
    default:
      return { ...authState }
  }
}

export function loadingReducer( loadingState = {value: false} , action){
  switch (action.type){
    default:
      return { ...loadingState }
  }
}
