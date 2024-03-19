import "./order.scss";
import OrderCard from "./OrderCard.jsx";
import axios from "axios";

function Order({setUserData,basket}) {
  const delAll =  () =>{
    basket.forEach( async (item)=>{
      await axios.delete(`http://127.0.0.1:8000/basket/${item.id}`)
    })
    setUserData(false)
  }
  return (
    <div>
      <div className="container">
        <div className="container-link">
          <h1>Корзина</h1>

          <button onClick={delAll} className='linkBtn'>удалить все</button>
        </div>
        {
          basket.map((item)=> <OrderCard item={item} key={item.id}/>)
        }
        <button onClick={() => setUserData(true)} className="order__btn">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Order;
