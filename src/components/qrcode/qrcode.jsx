import "./qrcode.scss";
import qrcode from "../../assets/qrcode.png";
import {useEffect} from "react";

function Qrcode({setActive, validation, setOplata, modal, activeModal, setModal,SendData}) {
    function btnActive() {
        setActive(true)
        validation()
        if (activeModal) {
            setModal(true)
        }
    }

    useEffect(() => {
        if (modal) {
            setOplata(true)
            SendData()
        }
    }, [modal, activeModal]);
    return (
        <div>
            <div className="container">
                <div className="qrcode">
                    <h1 className="qrcode__title">
                        Отсканируйте QR код с вашего электронного кошелька
                    </h1>
                    <img src={qrcode} alt="" className="qrcode__image"/>
                    <button onClick={btnActive} className="code__btn">Оплатить</button>
                </div>

                <button onClick={btnActive} className="qrcode__btn">Оплатить</button>
            </div>
        </div>
    );
}

export default Qrcode;
