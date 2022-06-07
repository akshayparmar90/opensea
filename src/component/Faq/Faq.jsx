import './faq.css'
import { faq } from './faq.js'
const Faq = () => {
  console.log(faq);
  return(
    <div className='faq-main'>
      <div className='faq-block'>
        <h3 className='faq-block-title'>We will try to help you if you are confused.</h3>
        <p className='faq-block-content'>A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</p>
      </div>
      <div className='faq'>
        {faq.map(list => 
          <>
            <input id={list.id} type='checkbox' />
            <label for={list.id}>
              <p className="faq-heading">{list.title}</p>
              <div className='faq-arrow'></div>
                <p className="faq-text">{list.content}</p>
            </label>
          </>
        )}
        <div className='explore-categories-button'>
        <button>View All</button>
      </div>
      </div>
    </div>
    
  )    
}
export default Faq;