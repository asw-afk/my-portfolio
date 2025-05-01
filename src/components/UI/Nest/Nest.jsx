import Card from "../card/card"
import Portfolio from "../card/Portfolio"
import './Nest.css'

export default function Nest (){
    return (
        <ul className="mainNest">
           <Card></Card>
           <Portfolio></Portfolio>
        </ul>
    )
}