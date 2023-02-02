import {Suspense, useContext, useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './styles/index.scss'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import Counter from './components/Counter'
import {useTheme} from './theme/useTheme'

const App = () => {
    const {toggleTheme} = useTheme()

    return (
        <div className="app">
            <h1 className="app">App</h1>

            <button className="btn btn-primary" onClick={toggleTheme}>toggle</button>

            <Counter/>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
