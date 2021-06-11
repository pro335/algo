import React, { Component } from 'react';
import PopUp from '../../ui/PopUp/PopUp';
import axios from 'axios';

class ConfirmPaymentPopUp extends Component{
    onClick = () => {
        this.props.onConfirmation()
        
        const userId = localStorage.getItem('userId')
        const savePurchaseAlgoData = {
            userId : userId,
            algoId : this.props.algoData
        }
        axios.post('/myPurchases/save', savePurchaseAlgoData)
        .then((response) => {
           console.log("success", response)
        })

    }
    render(){
        return(
            <PopUp showcross={false} className='__center'>
                You’re about to buy 
                <div className="__bold __h4 __line-height">Title of Stock Algo</div>
                Click ‘Confirm’ to complete your purchase
                <div className='__flex __flex-equal-space __mt-2'>
                    <button className='__btn __green-text' onClick={this.props.close}>Cancel</button>
                    <button className='__btn' onClick={this.onClick}>Confirm</button>
                </div>
            </PopUp>
        )
    }
}

export default ConfirmPaymentPopUp;