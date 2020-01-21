import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

const domID: string = 'root'
const DOMRoot: HTMLElement | null = document.getElementById(domID)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    DOMRoot
)