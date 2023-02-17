import {Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './styles/index.scss'
import {MainPage} from 'pages/MainPage'
import {useTheme} from './providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import AboutPage from 'pages/AboutPage/ui/AboutPage'

const App = () => {
    const {toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selectable: true}, ['theme', 'cls'])}>
            <h1 className="app">App</h1>

            <button className="btn btn-primary" onClick={toggleTheme}>toggle</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
