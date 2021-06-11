import React, { Component } from 'react';
import chart from '../../assets/Mask.png';
import Select from '../../ui/Select/Select';
import StockAlgoItem from '../../components/StockAlgoItem/StockAlgoItem';
import './MyAlgosPage.scss';
import mask from '../../assets/Mask Group 1.png';
import HeaderSideBar from '../../components/HeaderSideBar/HeaderSideBar';

class MyAlgosPage extends Component {
    render() {
        return (
            <HeaderSideBar className='__My-Algos-Page' title='My Algos'>
                <div className='__flex-stretch'>
                    <div className='__left'>
                        <Select value='New' title='Sort by'>
                            <option value='Relevancy'>Relevancy</option>
                            <option value='BestSelling'>BestSelling</option>
                            <option value='Top Rated'>Top Rated</option>
                            <option value='New'>New</option>
                            <option value='Price High to Low'>Price High to Low</option>
                            <option value='Price Low To High'>Price Low To High</option>
                        </Select>
                        <div className='__wrap __my-algos __not-pending __mt-15'>
                            <StockAlgoItem to='/my-algos/1'
                                chart={chart}
                                title='Stock Algo D'
                                username='@johnsmith123'
                                price='350.00'
                                ratings={4}
                                approvedDate='May 20, 2020'
                                purchases={10}
                                myalgo={true}
                                tags={['#forex', '#screener']}
                            />
                            <StockAlgoItem to='/my-algos/2'
                                chart={chart}
                                title='Stock Algo D'
                                username='@johnsmith123'
                                price='350.00'
                                ratings={4}
                                approvedDate='May 14, 2020'
                                purchases={13}
                                myalgo={true}
                                tags={['#forex', '#screener', '#ETF']}
                            />
                            <StockAlgoItem to='/my-algos/1'
                                chart={chart}
                                title='Stock Algo D'
                                username='@johnsmith123'
                                price='350.00'
                                ratings={4}
                                approvedDate='May 20, 2020'
                                purchases={10}
                                myalgo={true}
                                tags={['#forex', '#screener']}
                            />
                        </div>
                    </div>
                    <div className='__lightgrey-2 __f1 __myalgo-pending-box'>
                        <div className='__h3 __mb-15 __bold __primary-text'>Pending Approval</div>
                        <div className='__my-pending-algos __wrap'>
                            <StockAlgoItem to='/my-algos/2'
                                chart={mask}
                                title='Stock Algo D'
                                username='@johnsmith123'
                                price='350.00'
                                ratings={4}
                                approvedDate='May 14, 2020'
                                purchases={13}
                                myalgo={true}
                                tags={['#forex', '#screener']}
                                pending={true}
                                submittedDate='June 15, 2020'
                            />
                            <StockAlgoItem to='/my-algos/2'
                                chart={mask}
                                title='Stock Algo D'
                                username='@johnsmith123'
                                price='350.00'
                                ratings={4}
                                approvedDate='May 14, 2020'
                                purchases={13}
                                myalgo={true}
                                tags={['#forex', '#screener']}
                                pending={true}
                            />
                        </div>
                    </div>
                </div>
            </HeaderSideBar>
        )
    }
}

export default MyAlgosPage;