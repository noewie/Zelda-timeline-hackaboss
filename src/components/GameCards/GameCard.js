import "./GameCardStyle.css"
import { CardBand } from "../CardBand/cardBand"

export function GameCard({game}){
    return(
        <article className="gameCard">
        <img src={game.image} alt={game.title}
        />
        <h2>{game.title}({game.date})({game.platform})</h2>
        <p>{game.text}</p>
       <CardBand condition={game.goty} className="goldText" children="GOTY"/>
      </article>
    )
}
