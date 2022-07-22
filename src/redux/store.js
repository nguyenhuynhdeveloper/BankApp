import {createStore, applyMiddleware} from 'redux';
// redux-logger
import thunk from 'redux-thunk';
import reducers from './reducers/indexReducers'

const middleware = [thunk] ; // Đây chỉ đơn giản là khai báo 1 cái mảng chứa các middleware là lớp trung gian , có cái nào nữa thì , viết vào 

export const store = createStore(
    reducers, 
    applyMiddleware(...middleware)  // Phải cập nhật cái thunk này  vào thì mới có thể dùng được 
)
 