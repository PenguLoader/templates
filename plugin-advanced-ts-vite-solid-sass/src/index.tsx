import { answer } from './utils/hello'
import { render } from 'solid-js/web'
import Test from './components/test'
import './index.scss'

export function init(context: any) {
    console.log('Current environment is ' + process.env.ENV)

    if (process.env.DEV) {
        console.log('Hello, developer!')
    } else {
        console.log('Hello, world!')
    }
}

export function load() {
    console.log('Answer is ' + answer)

    render(() => <Test />, document.body)
}
