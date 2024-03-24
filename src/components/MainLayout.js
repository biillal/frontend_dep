import React from 'react'
import Header from '../utilis/Header'
import Footer from '../utilis/Footer'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
