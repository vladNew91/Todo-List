import add from './add';
import del from './delete';
import list from './list';
import edit from './edit';

export const TodosListRequestSaga = list;
export const TodoAddRequestSaga = add;
export const TodoDeleteRequestSaga = del;
export const TodoEditRequestSaga = edit;
