export const loadAliens = res => {
	return { type: 'LOAD_ALIENS', res };
};

export const updateAlien = res => {
	return { type: 'UPDATE_ALIEN', res };
};

export const deleteAlien = res => {
	return { type: 'DELETE_ALIEN', res };
};

export const addAlien = res => {
	return { type: 'ADD_ALIEN', res };
};
