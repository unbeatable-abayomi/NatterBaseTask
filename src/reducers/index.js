// import axios from 'axios';

//  axios.get('http://test.natterbase.com:5050/api/interview/get-applications?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg')
//     .then( (res)=>{
//        console.log(res.data, typeof(res.data))
//     })  

// const initState = {
//     posts: [
// 		{
// 			text: 'Go shopping',
// 			completed: true
// 		},
// 		{
// 			text: 'Clean the Yard',
// 			completed: false
// 		},
// 		{
// 			text: 'Take a walk',
// 			completed: false
// 		}
// 	]
// }

// const rootReducer =(state = initState, action)=>{
//    return state
// }



// export default rootReducer;

import {combineReducers} from 'redux';
import postReducer from './postReducer';


export default combineReducers({
	posts: postReducer
})