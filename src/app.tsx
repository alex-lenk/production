import Counter from './components/Counter'
import './index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {Suspense} from 'react'

const App = () => {
    return (
        <div>
            <h1 className="app">App</h1>
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
