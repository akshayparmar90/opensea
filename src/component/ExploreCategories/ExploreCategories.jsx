import './explore-categories.css'
import art from '../../images/art.png'
const ExploreCategories = () => {
 return(
   <div className='explore-categories'>
     <div className='explore-categories-title'>
       <h2>Explore  Categories</h2>
       <p>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
     </div>
     <div className='explore-categories-desc'>
       <ul>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
         <li>
           <img src={art} alt="" />
           <div className='explore-categories-list-content'>
             <h3>Art</h3>
             <p>Art is something that stimulates an individual’s thoughts</p>
           </div>
         </li>
       </ul>
     </div>
     <div className='explore-categories-button'>
       <button>Explore Marketplace</button>
     </div>
   </div>
 )   
}

export default ExploreCategories;