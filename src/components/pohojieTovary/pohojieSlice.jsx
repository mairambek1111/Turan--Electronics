import {GrLinkNext} from "react-icons/gr";
import '../newPostupleniya/newPostupleniya.scss'
import NewPostupleniyaCard from "../newPostupleniya/newPostupleniyaCard.jsx";
import NewPosupleniyaMob from "../newPostupleniya/newPosupleniyaMob.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PohojieSlice = ({brand}) => {
    const [product,setProduct] = useState([])
    const getData = async ()=>{
        const url = await axios(`https://oceanbackend.pythonanywhere.com/product/`)
        const {data} = await url
        setProduct(data.filter(el => el.brand === brand))
    }
    useEffect(() => {
        getData();
    }, [brand]);
    return (
        <div id='newPostopleniya'>
            <div className="container">
                <div className="newPostopleniya">
                    <div className='newPostopleniya--title'>
                        <h1>Похожие товары</h1>
                        <Link to={`/pohojie-tovary/${brand}`}><button className='newPostopleniya--title__btn'>Смотреть все <GrLinkNext className='btnNext'/>
                        </button></Link>
                    </div>

                    <div className="newPostopleniya--all">
                        {
                            product.length > 0 ?
                                product?.slice(0,4)?.map((el) => (
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
    );
};

export default PohojieSlice;