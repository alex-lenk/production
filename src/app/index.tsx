import './styles/index.scss'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'

const App = () => {
    const {toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selectable: true}, ['theme', 'cls'])}>
            <Navbar className="navbar navbar-expand-lg bg-body-tertiary"/>
            <AppRouter/>
            <button className="btn btn-primary" onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default App
