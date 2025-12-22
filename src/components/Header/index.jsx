import './style.css'
import { Navigation } from '../Navigation'

export const Header = () => {
    return(
        <header>
            < Navigation />
            <h1 className='header-name'>We are creatives</h1>
        </header>
    )
}