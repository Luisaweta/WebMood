import "./fotter.css"
export default function Footer(){
    return(
        <footer>
            <div className="divfooternorm">
                <h3>
                    Web Mood
                </h3>
                <p>
                    Компания по веб-разработке, специализирующаяса на создании и разработке пользовательских веб-сайтов для бизнеса.
                </p>
            </div>
            <div className="divfooter" />
            <div className="divfooternorm">
                <img src="../../public/телефон.png" height={150}/>
                <p>
                    <ul>
                         <li>Контактный номер:</li>
                         <li>+7 918-386-32-24</li>
                    </ul>
                </p>
            </div>
            <div className="divfooter" />
            <div className="divfooternorm">
                 <img src="../../public/почта.png" height={150}/>
                <p>
                    <ul>
                         <li>Контактная почта:</li>
                         <li>WEBMOOD@milo.RU</li>
                    </ul>
                </p>
            </div>
            <div className="divfooter" />
            <div className="divfooternorm">
                <img src="../../public/адрес.png" height={150}/>
                <p>
                    <ul>
                         <li>Адрес офиса:</li>
                         <li>Большая Садовая ул., 105/42</li>
                    </ul>
                </p>
            </div>
        </footer>
    )
}