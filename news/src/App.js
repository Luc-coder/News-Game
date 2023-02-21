import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import Sobre from './pages/Sobre'

import Header from './layout/Header'
import Footer from './layout/Footer'

import styles from './css/App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact='true' element={<Index />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
