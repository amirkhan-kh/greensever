import Header from './componenta/header/Header';
import Intro from './componenta/intro/Intro';
import LandScape from './componenta/landscape/Land';
import Service from './componenta/service/Service';
import Table from './componenta/table/Table';
import Gallery from './componenta/gallery/Gallery';
import Customers from './componenta/customors/Customers';
import Questions from './componenta/questions/Questions';
import New from './componenta/newArticles/New';
import Consultation from './componenta/consultation/Consul';
import Footer from './componenta/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <LandScape/>
      <Service/>
      <Table/>
      <Gallery/>
      <Customers/>
      <Questions/>
      <New/>
      <Consultation/>
      <Footer/>
    </>
  )
}

export default App