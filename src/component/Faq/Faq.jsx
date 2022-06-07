import './faq.css'
const Faq = () => {
  return(
    <div className='faq-main'>
      <div className='faq-block'>
        <h3 className='faq-block-title'>We will try to help you if you are confused.</h3>
        <p className='faq-block-content'>A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</p>
      </div>

      <div className='faq'>
        <input id='faq-a' type='checkbox' />
        <label for='faq-a'>
          <p className="faq-heading">How do I create an NFT?</p>
          <div className='faq-arrow'></div>
            <p className="faq-text">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>
        </label>
        <input id='faq-b' type='checkbox' />
        <label for='faq-b'>
          <p className="faq-heading">How do I create and sell NFTs on Polygon?</p>
          <div className='faq-arrow'></div>
            <p className="faq-text">Upgrading is a slow process and will take around 3-10 days. <strong>In order to control the risk and secure the space you earned, we will gradually process it.</strong> during this time you can still use your account as normal as usual.</p>
        </label>
        <input id='faq-c' type='checkbox' />
        <label for='faq-c'>
          <p className="faq-heading">What is Freezing Metadata</p>
          <div className='faq-arrow'></div>
            <p className="faq-text">NO ACCESS TO YOUR PERSONAL ACCOUNT OR INFO IS REQUIRED! All I need from you is your Dropbox referral link.</p>
        </label>
        <input id='faq-d' type='checkbox' />
        <label for='faq-d'>
          <p className="faq-heading">Does Opensea allow physical item trades?</p>
          <div className='faq-arrow'></div>
            <p className="faq-text">Log in to the Dropbox website and get your referral link: www.dropbox.com/referral. Copy the link (example link: <strong>https://db.tt/xYxYzyXy</strong>) and send it via eBay message. </p>
        </label>
        <input id='faq-e' type='checkbox' />
        <label for='faq-e'>
          <p className="faq-heading">How do I add a collection collaborator?</p>
          <div className='faq-arrow'></div>
            <p className="faq-text">Yes, you can! Just send me all the referral links during the checkout process, including a short note, what account should receive which amount of space.</p>
        </label>
        <div className='explore-categories-button'>
        <button>View All</button>
      </div>
      </div>
    </div>
    
  )    
}
export default Faq;