import React from "react";

const CoinBar = ({ ticker,percentage,total_investment }) =>{
    const calculateAmount = (percentage,total_investment) => {
        return (percentage * total_investment) / 100;
    }
    return (
        <div>
                <div className="bg-success coin-holding flex-wrap">
                    <div className="mb-2">
                        <div className="d-flex align-items-center">
                            <div className="coin-bx-one">
                                <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="4.71425" height="34.5712" rx="2.35713" transform="matrix(-1 0 0 1 33 0)" fill="white"/>
                                    <rect width="4.71425" height="25.1427" rx="2.35713" transform="matrix(-1 0 0 1 23.5713 9.42853)" fill="white"/>
                                    <rect width="4.71425" height="10.9999" rx="2.35713" transform="matrix(-1 0 0 1 14.1436 23.5713)" fill="white"/>
                                    <rect width="5.31864" height="21.2746" rx="2.65932" transform="matrix(-1 0 0 1 5.31836 13.2966)" fill="white"/>
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h2 className="mb-0 text-white coin-font-1">{calculateAmount(percentage,total_investment)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="d-flex align-items-center">
                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1" stroke="#2BC155" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <p className="mb-0 ml-2 text-success">45%</p>
                            <p className="mb-0 ml-2 font-w400 text-white">This Week</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default CoinBar;