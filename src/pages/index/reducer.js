import { CHANGE_INDEX_INDEX } from './actionTypes'
const defaultState = {
		content:[],
		footnav:[]
}

export default (state = defaultState, action) => {
	if(action.type === CHANGE_INDEX_INDEX){
		const newState = Object.assign({}, state);
				newState.content=action.valuecontent
				newState.footnav=action.valuefootnav
		
		return newState;
	}
	return state;
}
