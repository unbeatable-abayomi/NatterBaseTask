import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
    console.log('fecthing')
    fetch(
		'http://test.natterbase.com:5050/api/interview/get-applications?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
    )
    // axios.get('http://test.natterbase.com:5050/api/interview/get-applications?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg')
    //     .then( (res)=>{
    //        console.log(res.data, typeof(res.data))
    //        res.json()
    //     }) 
		.then((res) => res.json())
		.then((posts) =>
			dispatch({
				type: FETCH_POSTS,
				payload: posts
			})
		);
};
