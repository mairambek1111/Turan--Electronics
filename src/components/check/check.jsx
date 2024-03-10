import check from "../../assets/check.png";
import "./check.scss";
import {useEffect, useRef} from "react";

function Check({oplata,setOplata}) {
  const refDetail = useRef(null)
  const refCheckBg = useRef(null)
  const refCard = useRef(null)

  useEffect(() => {
    if(oplata){
      refDetail.current.style.transform = 'translateY(0)'
      refCheckBg.current.style.display = 'block'
      setTimeout(()=>{
        refDetail.current.style.transform = 'translateY(-100%)'
        refCard.current.style.transform = 'translateY(0)'
        setTimeout(()=>{
          refCard.current.style.transform = 'translateY(-100%)'
          refCheckBg.current.style.display = 'none'
          setOplata(false)
        },3000)
      },3000)

    }
  }, [oplata]);
  return (
    <div>
      <div className="container">
        <div className="check">
          <div ref={refCard} className="check__card">
            <div className="check__card__all">
            <h1 className="check__card__all__title">Спасибо за покупку </h1>
            <img src={check} alt="" className="check__card__all__img" />
            <p className="check__card__all__desc">
              Наш менеджер свяжится с Вами в ближайшее время
            </p>
          </div>
          </div>
          <div ref={refDetail} className="check__detail">
            <div className="check__detail__all">
            <h1 className="check__detail__all__title">Детали заказа</h1>
            <p className="check__detail__all__text">
              Iphone 14 Pro max 256gb Gold <br /> <br />
              74500 сом
              <br /> <br />
              Самовывоз
            </p>
          </div>
          </div>
        </div>
      </div>
      <div ref={refCheckBg} className="checkBg"></div>
    </div>
  );
}

export default Check;
