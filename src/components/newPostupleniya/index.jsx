import "./newPostupleniya.scss";
import {useEffect, useState} from "react";
import NewPostupleniyaCard from "./newPostupleniyaCard.jsx";
import axios from "axios";
import NewPosupleniyaMob from "./newPosupleniyaMob.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {useLocation} from "react-router-dom";
const NewPostopleniya = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);
  const [product,setProduct] = useState([])
  const today = new Date().toLocaleDateString()
  const getData = async ()=>{
    const url = await axios('https://oceanbackend.pythonanywhere.com/product/')
    const {data} = await url
   setProduct(data.filter((el)=> new Date(el.data).toLocaleDateString() === today))
  }
  useEffect(() => {
    getData();
  }, []);
  return (
      <>
        <Header/>
    <div id="newPostopleniya">
      <div className="container">
        <div className="newPostopleniya">
          <div
            className="newPostopleniya--title"
            data-aos="zoom-in-up"
            data-aos-duration="1100"
          >
            <h1 data-aos="zoom-in-up" data-aos-duration="1100">
              Новое поступление
            </h1>
            {/*<button className="newPostopleniya--title__btn">*/}
            {/*  Смотреть все <GrLinkNext className="btnNext" />*/}
            {/*</button>*/}
          </div>
          <div className="newPostopleniya--all">
            {product.length > 0 ? (
              product.map((el) => <NewPostupleniyaCard key={el.id} el={el} />)
            ) : (
              <div className="newPostopleniya--all__none">
                <h4>Нету новых поступлений</h4>
              </div>
            )}
          </div>
          <div className="newPostopleniya--allMobile">
            {product.map((el) => (
              <NewPosupleniyaMob key={el.id} el={el} />
            ))}
            {product.length > 0 ? (
              product.map((el) => <NewPosupleniyaMob key={el.id} el={el} />)
            ) : (
              <div className="newPostopleniya--allMobile__none">
                <h4>Нету новых поступлений</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </>
  );
};

export default NewPostopleniya;
