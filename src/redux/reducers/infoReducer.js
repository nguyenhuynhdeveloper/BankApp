//--------action ------------------
//action được khai báo dưới dạng type để phục vụ cho store.dispatch(action.type)
export const CAP_NHAT_EMAIL ='CAP_NHAT_EMAIL'
export const CAP_NHAT_ID = 'CAP_NHAT_ID'

//-----------state-----------------------
// Ban đầu phải có 1 trạng thái ban đầu của trường thông tin này --- Đây chính là state khai báo giá trị khởi tạo ban đầu 
const initialState ={
    email: '', 
    score: 0,
    address: '',
    id: '', 
}

//---------reducer--------
// reducer chỉ đơn giản lá cái hàm ( state, action ) --> để đưa ra 1 state mới 
 export default function actionForReducer( state = initialState, action)  // initialState là trạng thái ban đầu , payload là những cái thông tin mình sẽ cập nhật mới 
 {
switch(action.type) {
    case CAP_NHAT_EMAIL:
        return {
            ...state,
            email: action.email
        }
    case CAP_NHAT_ID:
        return {
            ...state,
            id: action.id
        }    
    default: return state    
}
 }