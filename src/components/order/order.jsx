/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./order.scss";
// eslint-disable-next-line no-unused-vars
import OrderCard from "./OrderCard.jsx";
import axios from "axios";

function Order({setUserData,basket}) {
  const delAll =  () =>{
    basket.forEach( async (item)=>{
      await axios.delete(`https://oceanbackend.pythonanywhere.com/basket/${item.id}`)
    })
    setUserData(false)
  }
  return (
    <div>
      <div className="container">
        <div className="container-link">
          <h1>Корзина</h1>

          <button onClick={delAll} className="linkBtn">
            удалить все
          </button>
        </div>
        {basket.map((item => <OrderCard key={item.id} item={item}/>))}
        <button onClick={() => setUserData(true)} className="order__btn">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Order;
