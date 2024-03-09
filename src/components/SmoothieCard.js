const SmoothieCard = ({Smoothies}) => {
    return (
        <div className="smoothie-card">
            <h3>{Smoothies.title}</h3>
            <p>{Smoothies.method}</p>
            <div className="rating">{Smoothies.rating}</div>
        </div>
    )


}
export default SmoothieCard