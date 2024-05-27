import Heder from "./heder/heder"
import Footer from "./fotter/fotter"
import "./app.css"

export default function App() {
  return (
    <div>
      <Heder />

      <main id = "main">
        <div id = "baner" > 
          {/* <img src = "../public/постер-1.png" height={500} width={1230}/> */}
        </div>
        <div id = "content">
          <ul>
            <li>
              <h3>
                Описание компании.
              </h3>
              <p>
              Наша компания по веб-разработке предлагает услуги как для бизнеса 
              (B2B), так и для конечных потребителей (B2C). Мы специализируемся на 
              создании и разработке пользовательских веб-сайтов, электронной коммерции, приложений и других решений для веба.
              </p>
            </li>
            <li>
              <h3>
                Наши преимущества.
              </h3>
              <p>
              1. Опыт в разработке потребительских веб-сайтов;<br/> 2. Понимание потребностей клиентов; <br/>3. Эффективная пользовательская навигация; <br/>4. Интеграция социальных сетей; <br/>5. Мультиязычность и международная поддержка. 
              </p>
            </li>
            <li>
              <h3>
                Целевая аудитория для компании по веб-разработке для бизнеса.
              </h3>
              <p>
              1. Малый и средний бизнес;<br/>2. Интернет-магазины и электронные розничные компании;<br/>3. Стартапы и новые предприятия;<br/>4. Физических лица.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>

  )
}

