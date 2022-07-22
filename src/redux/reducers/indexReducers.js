// Chỉ đơn giản là sử dụng component combineReducers của thư viện redux ==> sử dụng nhiều reducer cho 1 store
//----------------- Đây là nơi gom các hàm xử lý reducer thôi --------------------
import { combineReducers } from "redux";
import actionForReducer from './infoReducer'

const reducers = combineReducers ({
    personalInfo: actionForReducer    // Bên trong đây mới chỉ 1 reducer được gán lại tên là personalInfo thôi

});
 export default (state, action ) => reducers(state, action); //  đây là return ra 1 cái reducers chứa trạng thái , hành động