

const Hero = () =>{

    return (
        <section className="headline">
            <h1 className="BigTitle">DEV BLOG</h1>
            <div className="Radnoom_Article">
                    <div className="Radnoom_Article_left">
                        <img src={require('../Style/Img/Image_1.jpg')} alt="" />
                        <h5 className="Radnoom_ArtPosted in icle_date">Posted in Aug 10th 22 </h5>
                        <h2>How to build a realtime Auction system  Connecting Socket.io With React </h2>
                        <p>
                        Like an actual auction, if you bid for a product, you get counterbids from other bidders. The auction runs on the "fast" decision bid, where somebody else will win or outbid you if you don't bid fast enough.
                        Like an actual auction, if you bid for a product, you get counterbids from other bidders. The auction runs on the "fast" decision bid, where somebody else will win or outbid you if you don't bid fast enough.
                        Like an actual auction, if you bid for a product, you get counterbids from other bidders. The auction runs on the "fast" decision bid, where somebody else will win or outbid you if you don't bid fast enough.
                        Like an actual auction, if you bid for a product, you get counterbids from other bidders. The auction runs on the "fast" decision bid, where somebody else will win or outbid you if you don't bid fast enough.
                        Like an actual auction, if you bid for a product, you get counterbids from other bidders. The auction runs on the "fast" decision bid, where somebody else will win or outbid you if you don't bid fast enough.</p>
                    </div>
                    <div className="Radnoom_Article_right">
                        <div  className="Radnoom_Article_right_articl" >
                                <img src={require('../Style/Img/Image_2.jpg')} alt="" />
                            <div>
                                <h5 className="Radnoom_Article_date"> Posted in Aug 10th 22 </h5>
                                <h2>How to build a realtime Auction system  Connecting Socket.io With React </h2>
                            </div>
                        </div>
                        <div  className="Radnoom_Article_right_articl" >
                                <img src={require('../Style/Img/Image_3.jpg')} alt="" />
                            <div>
                                <h5 className="Radnoom_Article_date"> Posted in Aug 10th 22 </h5>
                                <h2>How to build a realtime Auction system  Connecting Socket.io With React </h2>
                            </div>
                        </div>
                        <div  className="Radnoom_Article_right_articl" >
                                <img src={require('../Style/Img/Image_4.jpg')} alt="" />
                            <div>
                                <h5 className="Radnoom_Article_date"> Posted in Aug 10th 22 </h5>
                                <h2>How to build a realtime Auction system  Connecting Socket.io With React </h2>
                            </div>
                        </div>

                    </div>
            </div>
        </section>
    )
}

export default Hero;