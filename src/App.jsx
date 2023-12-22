import CardCoffee from "./components/Cards/Card"
import EngagingLearning from "./components/EngagingLearning"
import Faq from "./components/Faq/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import LoveFellow from "./components/lovefellow/loveFellow"
import Pricing from "./components/pricing"


function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <EngagingLearning />
      <CardCoffee />
      <Pricing />
      <LoveFellow />
      <Faq />
      <Footer />
    </>
  )
}

export default App
