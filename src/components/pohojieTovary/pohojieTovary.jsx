import '../newPostupleniya/newPostupleniya.scss'
import NewPostupleniyaCard from "../newPostupleniya/newPostupleniyaCard.jsx";
import NewPosupleniyaMob from "../newPostupleniya/newPosupleniyaMob.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const PohojieTovary = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scroll(0,0)
    }, [pathname]);
    const [product,setProduct] = useState([])
    const {brandName} = useParams()
    const getData = async ()=>{
        const url = await axios(`https://oceanbackend.pythonanywhere.com/product/`)
        const {data} = await url
        setProduct(data.filter(el => el.brand === brandName))
    }
    useEffect(() => {
        getData();
    }, [brandName]);
    return (
        <>
            <Header/>
        <div id='newPostopleniya'>
            <div className="container">
                <div className="newPostopleniya">
                    <div className='newPostopleniya--title'>
                        <h1>Похожие товары</h1>
                        {/*<button className='newPostopleniya--title__btn'>Смотреть все <GrLinkNext className='btnNext'/>*/}
                        {/*</button>*/}
                    </div>

                    <div className="newPostopleniya--all">
                        {
                            product.length > 0 ?
                                product.map((el) => (
                                    <NewPostupleniyaCard key={el.id} el={el} />
                                ))
                                : <div className='newPostopleniya--all__none'><h4>Нету похожих товаров</h4></div>
                        }
                    </div>
                    <div className="newPostopleniya--allMobile">
                        {
                            product.length > 0 ?
                                product.map((el) => (
                                    <NewPosupleniyaMob key={el.id} el={el} />
                                ))
                                : <div className='newPostopleniya--allMobile__none'><h4>Нету похожих товаров</h4></div>
                        }
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default PohojieTovary;