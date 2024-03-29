import Header from "../components/header/header";
import Footer from "../components/footer/footer.jsx";
import './about.scss'
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function PagesAboutus() {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
    return (
        <>
            <Header/>
            <div id="about">
                <div className="container">
                    <div className="about">
                        <h6 className='aboutH6'>Главная / О нас</h6>
                        <h1>О нас</h1>
                        <div className="about--all">
                            <h2>Добро пожаловать в Turan Electronics!</h2>
                            <p>Мы - ваш надежный партнер в мире современных технологий и электроники.
                                В Turan Electronics мы стремимся предоставить вам лучший опыт покупок,
                                обеспечивая широкий ассортимент продукции, надежное качество и высокий уровень
                                обслуживания.
                            </p>
                            <h4>Наша миссия:</h4>
                            <p>Мы посвящаем себя созданию уникального пространства, где каждый клиент может найти
                                идеальное
                                сочетание инновационных технологий и стиля. Мы стремимся обеспечить доступность
                                последних
                                разработок в мире электроники, делая их доступными для каждого.
                            </p>
                            <h4>Что мы предлагаем:</h4>
                            <ul>
                                <li>Широкий ассортимент продукции: Мы предлагаем широкий выбор электроники, включая
                                    смартфоны,
                                    ноутбуки, планшеты, аксессуары и многое другое. Независимо от того, что вас
                                    интересует,
                                    у нас есть все необходимое для вашего цифрового образа жизни.
                                </li>
                                <li>Качество и надежность: Мы работаем только с проверенными производителями, гарантируя
                                    качество
                                    каждого продукта, который мы предлагаем. Все товары проходят строгий контроль
                                    качества,
                                    чтобы вы могли быть уверены в их надежности и долговечности.
                                </li>
                                <li>Профессиональное обслуживание: Наша команда состоит из опытных специалистов, готовых
                                    помочь вам с выбором, ответить на ваши вопросы и обеспечить высокий уровень сервиса
                                    на каждом этапе покупки.
                                </li>
                            </ul>
                            <h4>Почему выбирают нас:</h4>
                            <ul>
                                <li>Инновации: Мы всегда следим за последними технологическими тенденциями и
                                    обновлениями,
                                    чтобы предложить вам самое передовое и актуальное.
                                </li>
                                <li>Доверие: Мы гордимся нашей репутацией надежного поставщика электроники,
                                    который всегда ставит интересы клиентов на первое место.
                                </li>
                                <li>Удобство: Наш веб-сайт предлагает интуитивно понятный интерфейс и удобную навигацию,
                                    чтобы сделать ваше онлайн-покупки максимально приятными и удобными.
                                </li>
                            </ul>
                            <h4>Присоединяйтесь к Turan Electronics сегодня и обнаружьте мир бесконечных возможностей в
                                сфере электроники и технологий!</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PagesAboutus;

