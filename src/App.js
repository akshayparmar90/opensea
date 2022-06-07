import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Clients from './component/Clients/Clients';
import CreateSell from './component/CreateSell/CreateSell';
import ExploreCategories from './component/ExploreCategories/ExploreCategories';
import Faq from './component/Faq/Faq';
import NotableDrops from './component/NotableDrops/NotableDrops';
import ResourcesForGettingStarted from './component/ResourcesForGettingStarted/ResourcesForGettingStarted';
import TrendingInAllCategories from './component/TrendingInAllCategories/TrendingInAllCategories';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
       <CreateSell />
      </div>
      <NotableDrops />
      <Clients />
      <TrendingInAllCategories />
      <div className='container'>
        <ExploreCategories />
        <Faq />
      </div>
      <ResourcesForGettingStarted />
      <Footer />
    </>
  );
}

export default App;
