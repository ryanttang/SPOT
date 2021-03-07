export const initialState =  {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDabfUiMDvb1fpYO3ERuyzSVbxwKjCb8t6YOmXNMNwtA5ph5ddvyL8OFIqApu-Qn9Rbr6LVSqOoNnlYNoAS7F7zScvNbVntQy6tpyasPYrnW96v9YozsBS9PbQb4zCD8a3612gxc2AxdkknXPAFEQjEHnALxw",
};

const reducer = (state, action) => {
console.log(action);

// Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return { 
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return { 
                ...state,
                token: action.token
        };

        default:
            return state;
    }
};

export default reducer;