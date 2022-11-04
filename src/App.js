import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from './components/index'
import { Header, Footer } from './sections/index'
import { Home, Profile } from './pages/index'

const App = () => {
    return (
        <>
            <Router basename={'/cybrog'}>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App;