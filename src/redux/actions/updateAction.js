import axios from "axios";
import { resolve } from "source-map-resolve"
import { CAP_NHAT_EMAIL } from "../reducers/infoReducer";


// Nếu trong hàm này có những hành động bất đồng bộ thì phải khai báo hàm async await.
// Đây là đang làm hành động cập nhật dữ liệu lên server
export const updateEmail =(email) => async dispatch => {
try {
    // // 1.  Side-efect : Gọi lên servar hoặc làm gì ấy mà bất đồng bộ  (dùng middleware redux-thunk giúp bạn việc này )
    //  await new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //     resolve()
    //     }, 3000);
    // });
    // console.log(' Đã cập nhật thông tin lên server')

    // // 2. Cập nhật thông tin của infoReducer trong store tức là đẩy thông tin lên store
    // dispatch({
    //     type: CAP_NHAT_EMAIL,
    //     email:email       // Cái biến email này sẽ nhận từ ô inputText của thẻ home
    // }) // return ra 1 cái dispatch mà bên trong đã có sẵn action--> khi nào dùng chỉ việc store.updateEmail == store.dispatch ({type: 'CAP_NHAT_EMAIL', email: email})
        
    //------GỌI API thực thụ từ với web server node express 
    const res = await axios.get(`http://localhost:3000`)
    dispatch({
        type: CAP_NHAT_EMAIL,
        email: res.data
    }) 
}
catch (error) {

}
}