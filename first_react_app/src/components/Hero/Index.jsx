import React from 'react'
import viteLogo from '../../assets/vite-logo.webp'

const Hero = ({title , thumbnail}) => {
  return (
    //props

    <div className="container">
        <div className="row m-3">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
                {/* public folder images */}
                {/* <img src="react-logo-new.jpg" alt="" width={545}/> */}

                {/* assets folder images */}
                <img src={thumbnail} alt="" width={445}/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6  my-5 py-5">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repellat a blanditiis earum omnis? Debitis quam blanditiis nulla, repellat recusandae voluptatum fugiat labore error obcaecati nisi illum tempore laborum impedit ut temporibus. Officia, iste eos. Cum omnis quo quis facilis, sed consequatur.</p>
                <button className='btn btn-primary btn-lg my-3'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
