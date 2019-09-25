import React from 'react'
import Todo from './Todo'
import {useSelector} from 'react-redux'

const TodosList = () => {
    const todosList = useSelector(state => state.todos);
    return (
        <div>
            {
                todosList.map(todo => (
                    <Todo todoInfo = {todo} key={todo.id} />
                ))
            }
        </div>
    )
}

export default TodosList