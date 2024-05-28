import { Link } from "react-router-dom"
import "./heder.css"
export default function Heder(){
    return(
      <header>

        <div id = "logotype">
          <img src="././public/Рисунок2.png" height={70}></img>
        </div>

        <div id = "menu">
          <ul >
            <li><Link to="/"><button className="menubutton">Главная</button></Link></li>
            <li><Link to="/UslugiPage"><button className="menubutton">Услуги</button></Link></li>
            <li><Link to="/OnasPage"><button className="menubutton">О нас</button></Link></li>
            <li><Link to="/KontaktPage"><button className="menubutton">Контакты</button></Link></li>
          </ul>
        </div>

        <div id = "contakt">
            <ul>
                <li>Контактный номер:</li>
                <li>+7 918-386-32-24</li>
            </ul>
        </div>
      </header>
    )

}