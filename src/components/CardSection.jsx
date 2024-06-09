import Card from "./Card/Card"
import cardsData from "./Card/data"
const CardSection = () => {
    return (
        <div className="flex flex-wrap gap-2 2xl:gap-10 justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} img={card.img} title={card.title} body={card.body} />
            ))}
        </div>
    )
}

export default CardSection