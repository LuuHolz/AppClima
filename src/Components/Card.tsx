import Sol from '../assets/sol.png'

const Card = () => {
    return (
        <div>
            <div className='cardContainer'>
                <p className='location'>Buenos Aires</p>
                <img src={Sol} alt="" className='imgSol'/>
                <div className='climaTemperatura'>
                    <p>31°</p>
                    <p>sunny</p>
                </div>
                <div className='climaToday'>
                    Today 31°/24°
                </div>
            </div>
        </div>
    )
}

export default Card
