import * as React from 'react'
import * as ReactDOM from 'react-dom'

const domID: string = 'root'
const DOMRoot: HTMLElement | null = document.getElementById(domID)

class Apps extends React.Component {
    render() {
        return(
            <div>Hello world!</div>
        )
    }
}

ReactDOM.render(<Apps />, DOMRoot)