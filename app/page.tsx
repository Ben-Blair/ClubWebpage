import Header from './(components)/Header'
import Hero from './(components)/Hero'
import About from './(components)/About'
import Events from './(components)/Events'
import GetInvolved from './(components)/GetInvolved'
import FAQ from './(components)/FAQ'
import Footer from './(components)/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Events />
      <About />
      <GetInvolved />
      <FAQ />
      <Footer />
    </main>
  )
}
