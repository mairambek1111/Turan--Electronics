import Filter from "./Filter.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import FilterCard from "./FilterCard.jsx";
import './filterCard.scss'
import {useParams} from "react-router-dom";

const FilterApple = () => {
    const {brandName} = useParams()
    const [filterData, setFilterData] = useState([])
    const [brend, setBrend] = useState(brandName)
    const [color, setColor] = useState('')
    const [model, setModel] = useState('')
    const [memory, setMemory] = useState('')
    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(100000)
    const getFilter = async () => {
        const res = await axios(`http://127.0.0.1:8000/product`)
        const data = await res.data
        setFilterData(data)
    }
    useEffect(() => {
        getFilter()
    }, []);
    const unikFilter = filterData.filter((el) => {
        const brandFilter = brend !== '' ? el.brand === brend : true;
        const colorFilter = color !== '' ? el.color.includes(color) : true;
        const modelFilter = model !== '' ? el.model === model : true;
        const memoryFilter = memory !== '' ? el.characteristics.memory === memory : true;
        const priceFilter = (startPrice !== 0 || endPrice !== 0) ?
            ((startPrice !== 0 ? Number(el.price) >= startPrice : true) && (endPrice !== 0 ? Number(el.price) <= endPrice : true)) : true;

        return brandFilter && colorFilter && modelFilter && priceFilter && memoryFilter;
    });
    return (
        <>
            <Filter setBrand={setBrend} brend={brend} filterData={filterData} setMemory={setMemory} setColor={setColor} setModel={setModel} setStartPrice={setStartPrice} setEndPrice={setEndPrice}/>
            <div id="filterAll">
                <div className="container">
                    <div className="filterAll">
                        {
                            unikFilter.length > 0 ? unikFilter.map((el)=><FilterCard el={el} key={el.id}/>)
                            : <h1 className='filterAll--h1'>Ничего не найдено</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterApple;