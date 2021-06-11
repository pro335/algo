import React, { Component } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import chart from '../../assets/Mask.png'
import './ProductPage.scss'
import RatingStars from '../../components/RatingStars/RatingStars'
import ProductPaymentPanel from './ProductPaymentPanel'
import axios from 'axios'

class ProductPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      algo: [],
      algoReview: [],
      algoTotalRating: ''
    }
  }
  fetchAlgo () {
    const algoId = this.props.match.params.id

    axios.get('/algos/' + algoId)
      .then((response) => {
        this.setState({algoTotalRating: response.data.totalReviewRating})
        this.setState({algo: response.data.data})
        this.setState({algoReview: response.data.reviewsDetails})
      })
  }
  componentDidMount () {
    this.fetchAlgo()
  }
  render () {
    if (this.state.algo === undefined || this.state.algo.length == 0)
      return (<div />)
    return (
      <div className='__flex'>
        <SideBar />
        <div className='__algo-product-page __m-4 __f1 __pr-4'>
          <div className='__pointer __flex' onClick={this.props.history.goBack}>
            <i className='fas fa-chevron-left __mr-s __h2'></i>
            <span>Back to Marketplace</span>
          </div>
          <div className='__flex-stretch __mt-35 __mb-35'>
            <div className='__char-wrapper'>
              <img src={this.state.algo.image} alt='' />
            </div>
            <div className='__ml-4 __f1'>
              <div className='__h3 __bold'>
                {this.state.algo.stockAlgoName}
              </div>
              <div className='__h4 __dark-grey-text __line-height'>
                {this.state.algo.userId.name}
              </div>
              <div className='__flex __mt-1'>
                {this.state.algo.tags.map((tag, index) => {
                   return (
                     <span className='__chip __primary __mr-1' key={index}>{tag}</span>
                   )
                 })}
              </div>
              <div className='__mt-1 __h4 __flex'>
                <RatingStars ratings={this.state.algoTotalRating} />
                <span className='__ml-s'>{this.state.algoReview.length} reviews</span>
              </div>
            </div>
            <div className='__center'>
              <div className='__h3 __bold'>
                $
                {this.state.algo.priceDetails.price}
              </div>
              <div className='__small __dark-grey-text __mt-s'>
                {this.state.algo.priceDetails.type}
              </div>
            </div>
          </div>
          <div className='__h2 __bold __mb-1'>
            Description
          </div>
          <p>
            {this.state.algo.description}
          </p>
          <div className='__h2 __bold __mb-1 __mt-2'>
            How To Use
          </div>
          <p>
            {this.state.algo.howToUse}
          </p>
          <div className='__h2 __bold __mt-2'>
            Ratings & Reviews
          </div>
          <table className='__product-page-rating-table'>
            <tbody>
              <tr className='__h4 __bold'>
                <td>
                  {this.state.algoTotalRating == null ? 0 : this.state.algoReview.length} reviews
                </td>
                <td>
                  <div className='__flex'>
                    <RatingStars ratings={this.state.algoTotalRating} /> <span className='__ml-1'>{!this.state.algoTotalRating ? '0' : this.state.algoTotalRating} / 5</span>
                  </div>
                </td>
              </tr>
              {this.state.algoReview.map((review, index) => {
                 return (
                   <tr key={index}>
                     <td>
                       <div className='__bold'>
                         {review.user.name}
                       </div>
                       <div className='__dark-grey-text __line-height __mb-s'>
                         {review.user.first_name}
                       </div>
                       <RatingStars ratings={review.review.rating} small />
                     </td>
                     <td>
                       <div className='__bold'>
                         {review.review.reviewTitle}
                       </div>
                       <p>
                         {review.review.reviewDescription}
                       </p>
                     </td>
                   </tr>
                 )
               })}
            </tbody>
          </table>
        </div>
        <ProductPaymentPanel
          priceDetail={this.state.algo.priceDetails}
          isPurchased={this.props.isPurchased}
          isReviewed={this.props.isReviewed}
          isMyAlgo={this.props.isMyAlgo}
          myAlgo={this.state.algo} />
      </div>
    )
  }
}

export default ProductPage
