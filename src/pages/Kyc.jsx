import React from 'react'
import Leftmain from '../components/kyc/leftmain'
import Rightmain from '../components/kyc/rightmain'

import "../styles/kyc.css"

const Kyc = () => {
    return (
        <div className="main">
            <Leftmain />
            <Rightmain />
        </div>
    )
}

export default Kyc
