import React from 'react'
import Leftmain from '../components/kyc/leftmain'
import Rightmain from '../components/kyc/rightmain'

import "../styles/kyc.css"

const Kyc = () => {
    return (
        <div className="kyc-container">
            <div className="main-kyc">
                <Leftmain />
                <Rightmain />
            </div>
        </div>
    )
}

export default Kyc
