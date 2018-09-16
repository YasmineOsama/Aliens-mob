const users = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, user: action.res };
		default:
			return state;
	}
};
export default users;
