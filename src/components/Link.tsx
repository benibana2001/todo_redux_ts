import React from 'react'

type propTypes = {
    active: boolean,
    children: HTMLElement,
    onClick: React.MouseEventHandler
}

class Link extends React.Component<propTypes, {}> {
    constructor(props: propTypes) {
        super(props)
    }
    render() {
        return (
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    this.props.onClick(e)
                }}
            >
                {this.props.children}
            </a>
        )
    }
}

export default Link