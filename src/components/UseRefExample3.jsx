import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {

    const [showTodo, setShowTodo] = useState(true)
    return (
        <div>
            {showTodo && <Todo />}
            <button className="btn-primary" onClick={() => setShowTodo(!showTodo)}> Toggle Todo</button>
        </div >
    )
}

export default UseRefExample3