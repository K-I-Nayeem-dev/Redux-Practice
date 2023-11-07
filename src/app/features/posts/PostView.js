import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './PostsSlice';

const PostView = () => {

    const {isLoading, posts, error} = useSelector(state=> state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser())
    })

  return (
    <div className="container">
        <div className="row">
            <h2 className="text-center my-5">Redux Posts Form Api</h2>
            {!isLoading && <h3 className="text-center">...Loading</h3>}
            {error && <h3 className="text-center">{error}</h3>}
            {posts && posts.map((post)=> {
                return(
                    <div className="col-lg-4 py-3" key={post.id}>
                        <div className="card">
                            <div className="card-header">
                                <h3>ID : {post.id}</h3>
                            </div>
                            <div className="card-body">
                                <h3>Title : {post.title}</h3>
                                <h4>Body : {post.body}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PostView