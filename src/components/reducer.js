// initial state slice 
export const initialState ={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:''
}

// THE REDUCER PRIMARY JOB IS TO WAIT FOR ACTIONS
// state is how it currently looks
// action sets the state
const  reducer =(state, action) =>{
    console.log(action);

    // dsipatch action for user
    switch(action.type){
        // action > type , [payload]  :: playload is the user(a variable attached)
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }


    }
}

export default reducer;