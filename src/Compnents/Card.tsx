 const Card = () =>{
    return(
        <section className="card">
            <div className="card-thumb">
            <a href="#"><img src="https://images.unsplash.com/photo-1652159689167-1f1bf55a6abe?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM2NjgzNTc&ixlib=rb-1.2.1&q=80" alt="" /></a>
            </div>
            <div className="card-date">
            <span>January</span>
            <span>16</span>
            </div>
            <div className="card-body">
            <h2 className="card-title">A How to build a realtime Auction build a realtime Auction</h2>
            <p> A espécie está classificada como "vulnerável" pela      União Internacional para a Conservação da Natureza e        dos Recursos Naturais (IUCN).</p>

            </div>
            <div className="card-footer">
            <div className="card-time">
                <i className="material-icons">alarm</i><span>30 mins</span>
            </div>
            <div className="card-comment">
                <i className="material-icons">comment</i><span>6</span>
            </div>
            <div>
            </div>

            </div>
        </section>
    )
 }
 export default Card;