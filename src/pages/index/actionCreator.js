import { CHANGE_INDEX_INDEX } from './actionTypes';
export const getIndexAction = (valuecontent, valuefootnav) => ({
	type:CHANGE_INDEX_INDEX,
	valuecontent: valuecontent,
	valuefootnav: valuefootnav
})
