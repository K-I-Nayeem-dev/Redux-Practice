import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllTodos from '../services/Actions/todoActions';

const Todos = () => {

    const {isLoading, error, todo} = useSelector((state) => state.todos);
    // const todos = useSelector(state => state);
    // console.log(todos)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
        // eslint-disable-next-line
    }, [])
    

  return (
    <div className='container'>
        <h2 className='text-center my-5'>Todo App Fetch Api Data</h2>
            {isLoading && <h3 className="text-center">...Loading</h3>}
            {error && <h3 className="text-center">{error}</h3>}
        <div className="row">
                {todo && todo.map((to)=>{
                    const {id, title, userId} = to
                    return(
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 " key={id}>
                            <div className="card"></div>
                                <div className="card-header"><h4>User ID : {userId}</h4></div>
                                <div className="card-body">
                                    <h4>ID : {id}</h4>
                                    <h5>Title : {title}</h5>
                                </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Todos