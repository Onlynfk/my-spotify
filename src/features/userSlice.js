import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'data',
    initialState: {
        user: "",
        playlists: [],
        playing: false,
        item: null,
        discover_weekly: null,
        token:null
        // token: 'BQAf8sCYu6utAZ6_krKeQ3Gpe1zLZMJLfjtCDe0MIcwgNSveB0lKOcCCH2aZTh_Y4S-pd18VSpQDOO6N-9m18wKfDWWmNU1kpKqL1NoFKAGp4zs0uzcVMhRSBWgJDgcuwJM9fh14SnEQp46ldP4Y1sDsGiXD2rB8kpOof7RLUxtdpXPkOegDYs49        '
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setPlaylists(state, action) {
            state.playlists = action.payload
        },
        setDisoverWeekly(state, action) {
            state.discover_weekly = action.payload
        }


    }

})

export const userActions = userSlice.actions;

export default userSlice;




// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_USER':
//             return {
//                 ...state,
//                 user: action.user
//             }
//         case 'SET_TOKEN':
//             return {
//                 ...state,
//                 token: action.token
//             }
//         case 'SET_PLAYLISTS':
//             return {
//                 ...state,
//                 playlists: action.playlists
//             }
//         default:
//             return state;
//     }
// }
