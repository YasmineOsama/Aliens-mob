const aliens = (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_ALIENS':
			return { ...state, aliens: action.res };
		case 'UPDATE_ALIEN':
			return { ...state, aliens: action.res };
		case 'DELETE_ALIEN':
			return { ...state, aliens: action.res };
		case 'ADD_ALIEN':
			return { ...state, aliens: [...state.aliens, action.res] };
		default:
			return state;
	}
};
export default aliens;
