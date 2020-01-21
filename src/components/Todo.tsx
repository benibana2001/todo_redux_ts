import React, { MouseEventHandler } from 'react'

type propTypes = {
    onClick: MouseEventHandler,
    completed: boolean,
    text: string
}

export class Todo extends React.Component<propTypes, {}> {
    constructor(props: propTypes) {
        super(props)
    }
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
            </li>
        )
    }
}