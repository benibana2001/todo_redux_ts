import React, { MouseEventHandler } from 'react'
import { Todo } from './Todo'

type todo = {
    id: number,
    completed: boolean,
    text: string
}

type todos = todo[]

type propTypes = {
    todos: todos,
    onTodoClick: MouseEventHandler
}

class TodoList extends React.Component<propTypes, {}> {
    constructor(props: propTypes) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    <Todo key={index}  {...todo} onClick={(index) => this.props.onTodoClick(index)} />
                })}
            </ul>
        )
    }
}