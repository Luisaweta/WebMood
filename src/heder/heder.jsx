import "./heder.css"
export default function Heder(){
    return(
      <header>

        <div id = "logotype">
          <img src="././public/Рисунок2.png" height={70}></img>
        </div>

        <div id = "menu">
          <ul >
            <li><button className="menubutton">Главная</button></li>
            <li><button className="menubutton">Услуги</button></li>
            <li><button className="menubutton">О нас</button></li>
            <li><button className="menubutton">Контакты</button></li>
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