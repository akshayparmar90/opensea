import './create-sell.css'
const CreateSell = () => {
  return(
    <div className='create-sell'>
      <div className='create-sell-title-box'>
        <h2 className='create-sell-title'>Create & Sell Your NFT’s</h2>
        <p className='create-sell-desc'>
        A play of  light and shade, chairoscuro is the realm between the light and dark.
        </p>
      </div>
      <div className='create-sell-detail-box'>
        <ul>
          <li>
            <div className='create-sell-detail-box-item'>
              <div className='create-sell-detail-box-item-box'>
                <h3 className='create-sell-detail-box-item-title'>Set up your wallet</h3>
                <p className='create-sell-detail-box-item-content'>Once you’ve set up your wallet of choice, connect it to OpenSea.
  Learn about the <a href="#">wallets we support.</a></p>
              </div>
            </div>
          </li>
          <li>
          <div className='create-sell-detail-box-item'>
              <div className='create-sell-detail-box-item-box'>
                <h3 className='create-sell-detail-box-item-title'>Create  your  collection</h3>
                <p className='create-sell-detail-box-item-content'>Click <a href="#">My Collections</a> and set up your collection. Add social links, a description, profile & banner images, and set a secondary. </p>
              </div>
            </div>
          </li>
          <li>
          <div className='create-sell-detail-box-item'>
              <div className='create-sell-detail-box-item-box'>
                <h3 className='create-sell-detail-box-item-title'>Add  your  NFT’s</h3>
                <p className='create-sell-detail-box-item-content'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</p>
              </div>
            </div>
          </li>
          <li>
          <div className='create-sell-detail-box-item'>
              <div className='create-sell-detail-box-item-box'>
                <h3 className='create-sell-detail-box-item-title'>List  them  for  sale</h3>
                <p className='create-sell-detail-box-item-content'>Choose between auctions, fixed-price listings, and
declining-price listings. You choose how you want to sell your NFTs.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );    
}
export default CreateSell;