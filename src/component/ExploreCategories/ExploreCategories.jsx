import './explore-categories.css'
import { exploreCategories } from './exploreCategories.js'
const ExploreCategories = () => {
 return(
   <div className='explore-categories'>
     <div className='explore-categories-title'>
       <h2>Explore  Categories</h2>
       <p>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
     </div>
     <div className='explore-categories-desc'>
       <ul>
         {exploreCategories.map(e =>
            <li>
              <img src={e.img} alt="" />
              <div className='explore-categories-list-content'>
                <h3>{e.title}</h3>
                <p>{e.content}</p>
              </div>
            </li>
          )}
       </ul>
     </div>
     <div className='explore-categories-button'>
       <button>Explore Marketplace</button>
     </div>
   </div>
 )   
}

export default ExploreCategories;