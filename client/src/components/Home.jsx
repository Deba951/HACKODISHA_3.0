import Navbar from './Navbar'
import Welcome from './Welcome'
import Footer from './Footer'
import Services from './Services'
import Transactions from './Transactions'

export default function Home() {
    return <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
}