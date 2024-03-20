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
<<<<<<< Updated upstream
        {
          basket.map((item)=> <OrderCard item={item} key={item.id}/>)
        }
=======
        {basket.map((item, index) => (
          <div className="order" key={item.id || index}>
            <div className="order-wrap">
              <div className="order-wrap__image">
                <img src={item.first_photo} alt="iPhone" />
              </div>
              <div className="order-wrap__info info">
                <p>{item.name}</p>
                <div className="info__button">
                  <button>-</button>
                  <h1>1</h1>
                  <button onClick={addOne}>+</button>
                </div>
              </div>
              <div className="order-wrap__price">
                <h1>{item.price}</h1>
                <h2>81000с</h2>
              </div>
              <div className="order-wrap__stars">
                {star} {star} {star} {star} {star}
              </div>
            </div>
          </div>
        ))}

>>>>>>> Stashed changes
        <button onClick={() => setUserData(true)} className="order__btn">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Order;
