import React from 'react'
import "./feature.css"
import image_1 from "../../assets/1.png"
import image_2 from "../../assets/2.png"
import image_3 from "../../assets/3.png"
import image_4 from "../../assets/4.png"
import image_5 from "../../assets/5.png"
import image_6 from "../../assets/6.png"
const Feature = () => {
    return (
        <div className='feature_wrapper'>

            <div className='feature_items'>
                <div>
                    <div className='feature_items_div'>
                        <img src={image_1} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                    <div className='feature_items_div'>
                        <img src={image_2} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                    <div className='feature_items_div'>
                        <img src={image_3} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='feature_items_div'>
                        <img src={image_4} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                    <div className='feature_items_div'>
                        <img src={image_5} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                    <div className='feature_items_div'>
                        <img src={image_6} alt="" />
                        <div>
                            <h2 className='feature_items_header'>Using Abstract</h2>
                            <p className='feature_items_p'>Abstract lets you manage, version, and <br /> document  your designs in one place.</p>
                            <p className='feature_items_btn'>Learn More →
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature