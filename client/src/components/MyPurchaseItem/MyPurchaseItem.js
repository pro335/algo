import React from 'react';
import StockAlgoItem from '../StockAlgoItem/StockAlgoItem';
import WriteAReview from '../WriteAReview/WriteAReview';

const MyPurchaseItem = props => (
    <div>
        <div className='__small __dark-grey-text __mb-15'>{props.date}</div>
        <StockAlgoItem {...props} />
        <div className='__view-source-file'></div>
        {!props.reviewed  && <WriteAReview {...props} />}
    </div>
)

export default MyPurchaseItem;