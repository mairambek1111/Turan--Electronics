import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const AdminDetails = () => {
    const {id,category} = useParams()
    const [el,setEl] = useState([])
    const getData = async ()=>{
        const url = await axios(`http://localhost:3000/${category}/${id}`)
        const {data} = await url
        setEl(data)
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div id='adminDetails'>
            <div className="container">
                <div className="adminDetails">
                    <div className="adminDetails--card">
                        <img src={el.image} alt=""/>
                        <div className="adminDetails--card__description">
                            <h2>{el.title}</h2>
                            <div className="adminDetails--card__description--memory">
                                <p>{el?.memory?.junior} gb</p>
                                {
                                    el?.memory?.middle ? <p>{el?.memory?.middle} gb</p> : null
                                }
                                {
                                    el?.memory?.senior ? <p>{el?.memory?.senior} Tb</p> : null
                                }
                            </div>
                            <h2>{el.price} сом</h2>
                            <div className="aminDetails--card__description--all">
                                <h6>Характеристики:</h6>
                                <div className="aminDetails--card__description--all__about">
                                    <p>Гарантия </p>
                                    <span></span>
                                    {
                                        el?.characteristics?.guarantee?.day ||  el?.characteristics?.guarantee?.month || el?.characteristics?.guarantee.year ?
                                            (<>
                                                {el?.characteristics?.guarantee.day ? <p>{el?.characteristics?.guarantee.day}</p> : null}
                                                {el?.characteristics?.guarantee.month ? <p>{el?.characteristics?.guarantee.month}</p> : null}
                                                {el?.characteristics?.guarantee.year ? <p>{el?.characteristics?.guarantee.year}</p> : null}
                                            </>) :
                                            <p>не известно</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDetails;