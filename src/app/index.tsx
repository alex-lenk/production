import {Link} from 'react-router-dom'
import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'

const App = () => {
    const {toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selectable: true}, ['theme', 'cls'])}>
            <h1 className="app">App</h1>

            <button className="btn btn-primary" onClick={toggleTheme}>toggle</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <AppRouter/>
        </div>
    )
}

export default App
