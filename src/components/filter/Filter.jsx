import {FaAngleDown, FaAngleUp, FaApple} from "react-icons/fa";
import '../filter/filter.scss'
import {useRef, useState} from "react";
import {IoClose} from "react-icons/io5";

const Filter = ({setColor,setEndPrice,setStartPrice,setModel,filterData,brend,setMemory,setBrand,startPrice}) => {
    const refOption = useRef(null)
    const iChecked = useRef(null)
    const iChecked2 = useRef(null)
    const refOptionModel = useRef(null)
    const refOptionObem = useRef(null)
    const refOptionPrice = useRef(null)
    const refOptionColor = useRef(null)
    const refClose = useRef(null)
    const refCloseBg = useRef(null)
    const [down,setDown] = useState(false)
    const [downM,setDownM] = useState(false)
    const [downO,setDownO] = useState(false)
    const [downP,setDownP] = useState(false)
    const [downC,setDownC] = useState(false)

    const refAllOption = useRef(null)
    const refAllOptionModel = useRef(null)
    const refAllOptionObem = useRef(null)
    const refAllOptionPrice = useRef(null)
    const refAllOptionColor = useRef(null)

    const [allDown,setAllDown] = useState(true)
    const [allDownM,setAllDownM] = useState(false)
    const [allDownO,setAllDownO] = useState(false)
    const [allDownP,setAllDownP] = useState(true)
    const [allDownC,setAllDownC] = useState(false)


    function hoverOption(){
        setDown(true)
        refOption.current.style.display = 'block'
        hoverOptionModel2()
        hoverOptionColor2()
        hoverOptionPrice2()
        hoverOptionObem2()
    }
    function hoverOption2(){
        setDown(false)
        refOption.current.style.display = 'none'
    }
    function hoverOptionModel(){
        setDownM(true)
        refOptionModel.current.style.display = 'block'
        hoverOption2()
        hoverOptionColor2()
        hoverOptionPrice2()
        hoverOptionObem2()
    }
    function hoverOptionModel2(){
        setDownM(false)
        refOptionModel.current.style.display = 'none'
    }
    function hoverOptionObem(){
        setDownO(true)
        refOptionObem.current.style.display = 'block'
        hoverOptionModel2()
        hoverOptionColor2()
        hoverOptionPrice2()
        hoverOption2()
    }
    function hoverOptionObem2(){
        setDownO(false)
        refOptionObem.current.style.display = 'none'
    }
    function hoverOptionPrice(){
        setDownP(true)
        refOptionPrice.current.style.display = 'block'
        hoverOptionModel2()
        hoverOptionColor2()
        hoverOption2()
        hoverOptionObem2()
    }
    function hoverOptionPrice2(){
        setDownP(false)
        refOptionPrice.current.style.display = 'none'
    }
    function hoverOptionColor(){
        setDownC(true)
        refOptionColor.current.style.display = 'block'
        hoverOptionModel2()
        hoverOption2()
        hoverOptionObem2()
        hoverOptionPrice2()
    }
    function hoverOptionColor2(){
        setDownC(false)
        refOptionColor.current.style.display = 'none'
    }
    function hoverOptionAll(){
        const body = document.querySelector('body')
        refClose.current.style.transform = 'translateX(0)'
        refCloseBg.current.style.display = 'block'
        body.style.overflow = 'hidden'
        hoverOptionModel2()
        hoverOption2()
        hoverOptionObem2()
        hoverOptionPrice2()
        hoverOptionColor2()
    }

    function clickOption(){
        setAllDown(!allDown)
        if(allDown){
            refAllOption.current.style.display = 'none'
        }else {
            refAllOption.current.style.display = 'block'
        }
    }
    function clickOptionModel(){
        setAllDownM(!allDownM)
        if(allDownM){
            refAllOptionModel.current.style.display = 'none'
        }else {
            refAllOptionModel.current.style.display = 'block'
        }
    }
    function clickOptionObem(){
        setAllDownO(!allDownO)
        if(allDownO){
            refAllOptionObem.current.style.display = 'none'
        }else {
            refAllOptionObem.current.style.display = 'block'
        }
    }
    function clickOptionPrice(){
        setAllDownP(!allDownP)
        if(allDownP){
            refAllOptionPrice.current.style.display = 'none'
        }else {
            refAllOptionPrice.current.style.display = 'block'
        }

    }
    function clickOptionColor(){
        setAllDownC(!allDownC)
        if(allDownC){
            refAllOptionColor.current.style.display = 'none'
        }else {
            refAllOptionColor.current.style.display = 'block'
        }
    }
    function clickClose(){
        const body = document.querySelector('body')
        refClose.current.style.transform = 'translateX(100%)'
        refCloseBg.current.style.display = 'none'
        body.style.overflow = 'auto'
    }
    const brand = filterData.filter((el)=> el.brand === brend)
    const allColors = brand.flatMap(el => el.color)
    const uniqueColors = [...new Set(allColors)]
    const allMemory = brand.flatMap(el => el.characteristics.memory)
    const uniqueMemory = [...new Set(allMemory)]
    const allBrands = filterData.flatMap(el => el.brand)
    const uniqueBrand = [...new Set(allBrands)]
    const colorStop = (e,color)=>{
        setColor(color)
        e.stopPropagation()
        iChecked.current.checked = false;
    }
    const colorStop2 = (e,color)=>{
        setColor(color)
        e.stopPropagation()
        iChecked2.current.checked = false;
    }
    function handleRangeChange(e) {
        setStartPrice(e.target.value);
    }
    function handleStartPriceChange(e) {
        setStartPrice(e.target.value);
    }
    return (
        <div id='filter'>
            <div className="container">
                <div className="filter">
                    <div className="filter--all">
                        <div onMouseEnter={hoverOption} className="filter--all__select">
                            <h1><FaApple/> {brend !== '' ? brend : 'Все'} {down ? <FaAngleUp className='selectUp'/> :
                                <FaAngleDown className='selectDown'/>}  </h1>
                            <div onMouseLeave={hoverOption2} ref={refOption} className="filter--all__select--option">
                                <div className="filter--all__select--option__inp">
                                    <label onClick={() => setBrand('')}>
                                        <input name='Apple' type="radio"/>
                                        <p>Все</p>
                                    </label>
                                </div>
                                {
                                    uniqueBrand.map((el, inx) => (
                                        <div key={inx} className="filter--all__select--option__inp">
                                            <label onClick={() => setBrand(el)}>
                                                <input name='Apple' type="radio"/>
                                                <p>{el}</p>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div onMouseEnter={hoverOptionModel} className="filter--all__select">
                            <h4>Модель {downM ? <FaAngleUp className='selectUp'/> :
                                <FaAngleDown className='selectDown'/>}</h4>
                            <div onMouseLeave={hoverOptionModel2} ref={refOptionModel}
                                 className="filter--all__select--optionModel">
                                <div className="filter--all__select--optionModel__inp">
                                    <label onClick={() => setModel('')}>
                                        <input name='Модель' type="radio"/>
                                        <p>Все</p>
                                    </label>
                                </div>
                                {
                                    brand.map((el,inx) => (
                                        <div key={inx} className="filter--all__select--optionModel__inp">
                                            <label onClick={() => setModel(el.model)}>
                                                <input name='Модель' type="radio"/>
                                                <p>{el.model}</p>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div onMouseEnter={hoverOptionObem} className="filter--all__select">
                            <h4>Обьем {downO ? <FaAngleUp className='selectUp'/> :
                                <FaAngleDown className='selectDown'/>}</h4>
                            <div onMouseLeave={hoverOptionObem2} ref={refOptionObem}
                                 className="filter--all__select--optionObem">
                                <div className="filter--all__select--optionObem__inp">
                                    <label onClick={() => setMemory('')}>
                                        <input name='Обьем' type="radio"/>
                                        <p>Все</p>
                                    </label>
                                </div>
                                {
                                    uniqueMemory.map((el, inx) => (
                                        <div key={inx} className="filter--all__select--optionObem__inp">
                                            <label>
                                                <input name='Обьем' type="radio" onClick={() => setMemory(el)}/>
                                                <p>{el}</p>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div onMouseEnter={hoverOptionPrice} className="filter--all__select">
                            <h4>Цена, Сом {downP ? <FaAngleUp className='selectUp'/> :
                                <FaAngleDown className='selectDown'/>}</h4>
                            <div onMouseLeave={hoverOptionPrice2} ref={refOptionPrice}
                                 className="filter--all__select--optionPrice">
                                <div className="filter--all__select--optionPrice__inp">
                                    <input value={startPrice} min={0} placeholder={'от'} onInput={(e) => setStartPrice(e.target.value)} name='Цена' type="number"/>
                                    <input
                                        placeholder={'до'}
                                        onInput={(e) => e.target.value !== '' ? setEndPrice(e.target.value) : setEndPrice('200000')}
                                        name='Цена' type="number"/>
                                </div>
                                <div className="filter--all__select--optionPrice__inp">
                                    <input onChange={(e)=>handleRangeChange(e)} value={startPrice} min={0} max={200000} className='inpRange' name='Цена' type="range"/>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={hoverOptionColor} className="filter--all__select">
                            <h4>Цвет {downC ? <FaAngleUp className='selectUp'/> :
                                <FaAngleDown className='selectDown'/>}</h4>
                            <div onMouseLeave={hoverOptionColor2} ref={refOptionColor}
                                 className="filter--all__select--optionColor">
                                <div className="filter--all__select--optionColor__inp">
                                    <label onClick={() => setColor('')}>
                                        <input ref={iChecked} name='Цвет' type="radio"/>
                                        <p>Все</p>
                                    </label>
                                </div>
                                <div className="filter--all__select--optionColor__inp">
                                    {
                                        uniqueColors.map((color, index) => (
                                            <canvas onClick={(e) => colorStop(e,color)} key={index}
                                                    style={{background: color}} color={color}></canvas>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div onClick={hoverOptionAll} className="filter--all__select">
                            <h4>Все фильтры
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M26.5625 15H11.1188M5.6675 15H3.4375M5.6675 15C5.6675 14.2773 5.9546 13.5842 6.46563 13.0731C6.97667 12.5621 7.66979 12.275 8.3925 12.275C9.11522 12.275 9.80833 12.5621 10.3194 13.0731C10.8304 13.5842 11.1175 14.2773 11.1175 15C11.1175 15.7227 10.8304 16.4158 10.3194 16.9269C9.80833 17.4379 9.11522 17.725 8.3925 17.725C7.66979 17.725 6.97667 17.4379 6.46563 16.9269C5.9546 16.4158 5.6675 15.7227 5.6675 15ZM26.5625 23.2587H19.3775M19.3775 23.2587C19.3775 23.9816 19.0897 24.6755 18.5786 25.1867C18.0674 25.6978 17.3741 25.985 16.6513 25.985C15.9285 25.985 15.2354 25.6966 14.7244 25.1856C14.2133 24.6746 13.9262 23.9815 13.9262 23.2587M19.3775 23.2587C19.3775 22.5359 19.0897 21.8432 18.5786 21.3321C18.0674 20.8209 17.3741 20.5337 16.6513 20.5337C15.9285 20.5337 15.2354 20.8208 14.7244 21.3319C14.2133 21.8429 13.9262 22.536 13.9262 23.2587M13.9262 23.2587H3.4375M26.5625 6.74124H22.6813M17.23 6.74124H3.4375M17.23 6.74124C17.23 6.01852 17.5171 5.32541 18.0281 4.81437C18.5392 4.30333 19.2323 4.01624 19.955 4.01624C20.3129 4.01624 20.6672 4.08672 20.9978 4.22366C21.3284 4.36061 21.6288 4.56133 21.8819 4.81437C22.1349 5.06741 22.3356 5.36781 22.4726 5.69842C22.6095 6.02904 22.68 6.38338 22.68 6.74124C22.68 7.09909 22.6095 7.45344 22.4726 7.78405C22.3356 8.11466 22.1349 8.41506 21.8819 8.6681C21.6288 8.92114 21.3284 9.12186 20.9978 9.25881C20.6672 9.39575 20.3129 9.46623 19.955 9.46623C19.2323 9.46623 18.5392 9.17914 18.0281 8.6681C17.5171 8.15706 17.23 7.46395 17.23 6.74124Z"
                                        stroke="#525252" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10"
                                        strokeLinecap="round"/>
                                </svg>
                            </h4>
                        </div>
                    </div>
                    <div onClick={hoverOptionAll} className="mobFilter filter--all__select">
                        <h4>Все фильтры
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M26.5625 15H11.1188M5.6675 15H3.4375M5.6675 15C5.6675 14.2773 5.9546 13.5842 6.46563 13.0731C6.97667 12.5621 7.66979 12.275 8.3925 12.275C9.11522 12.275 9.80833 12.5621 10.3194 13.0731C10.8304 13.5842 11.1175 14.2773 11.1175 15C11.1175 15.7227 10.8304 16.4158 10.3194 16.9269C9.80833 17.4379 9.11522 17.725 8.3925 17.725C7.66979 17.725 6.97667 17.4379 6.46563 16.9269C5.9546 16.4158 5.6675 15.7227 5.6675 15ZM26.5625 23.2587H19.3775M19.3775 23.2587C19.3775 23.9816 19.0897 24.6755 18.5786 25.1867C18.0674 25.6978 17.3741 25.985 16.6513 25.985C15.9285 25.985 15.2354 25.6966 14.7244 25.1856C14.2133 24.6746 13.9262 23.9815 13.9262 23.2587M19.3775 23.2587C19.3775 22.5359 19.0897 21.8432 18.5786 21.3321C18.0674 20.8209 17.3741 20.5337 16.6513 20.5337C15.9285 20.5337 15.2354 20.8208 14.7244 21.3319C14.2133 21.8429 13.9262 22.536 13.9262 23.2587M13.9262 23.2587H3.4375M26.5625 6.74124H22.6813M17.23 6.74124H3.4375M17.23 6.74124C17.23 6.01852 17.5171 5.32541 18.0281 4.81437C18.5392 4.30333 19.2323 4.01624 19.955 4.01624C20.3129 4.01624 20.6672 4.08672 20.9978 4.22366C21.3284 4.36061 21.6288 4.56133 21.8819 4.81437C22.1349 5.06741 22.3356 5.36781 22.4726 5.69842C22.6095 6.02904 22.68 6.38338 22.68 6.74124C22.68 7.09909 22.6095 7.45344 22.4726 7.78405C22.3356 8.11466 22.1349 8.41506 21.8819 8.6681C21.6288 8.92114 21.3284 9.12186 20.9978 9.25881C20.6672 9.39575 20.3129 9.46623 19.955 9.46623C19.2323 9.46623 18.5392 9.17914 18.0281 8.6681C17.5171 8.15706 17.23 7.46395 17.23 6.74124Z"
                                    stroke="#525252" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round"/>
                            </svg>
                        </h4>
                    </div>
                </div>
            </div>
            <div ref={refClose} className="filterAll">
                <div className="filterAll--card">
                    <h1>Фильтры <IoClose onClick={clickClose} className='filterAll--card__close'/></h1>
                    <div onClick={clickOptionPrice} className="filterAll--card__select">
                        <h4>Цена, Сом {allDownP ? <FaAngleUp className='selectUp'/> :
                            <FaAngleDown className='selectDown'/>}</h4>
                        <div ref={refAllOptionPrice} className="filterAll--card__select--optionPrice">
                            <div className="filterAll--card__select--optionPrice__inp">
                                <input value={startPrice} placeholder={'от'} onClick={(e)=>e.stopPropagation()} onInput={(e) => setStartPrice(e.target.value)} name='Цена' type="number"/>
                                <input
                                    placeholder={'до'}
                                    onClick={(e)=>e.stopPropagation()}
                                    onInput={(e) => e.target.value !== '' ? setEndPrice(e.target.value) : setEndPrice('200000')}
                                    name='Цена' type="number"/>
                            </div>
                            <div className="filterAll--card__select--optionPrice__inp">
                                <input onChange={(e)=>handleRangeChange(e)} value={startPrice} min={0} max={200000} className='inpRange' name='Цена' type="range"/>
                            </div>
                        </div>
                    </div>
                    <div onClick={clickOption} className="filterAll--card__select">
                        <h4>Бренд {allDown ? <FaAngleUp className='selectUp'/> :
                            <FaAngleDown className='selectDown'/>}  </h4>
                        <div ref={refAllOption} className="filterAll--card__select--option">
                            <div className="filterAll--card__select--option__inp">
                                <label onClick={() => setBrand('')}>
                                    <input name='Apple' type="radio"/>
                                    <p>Все</p>
                                </label>
                            </div>
                            {
                                uniqueBrand.map((el,inx)=> (
                                    <div key={inx} className="filterAll--card__select--option__inp">
                                        <label onClick={()=>setBrand(el)}>
                                            <input name='Apple' type="radio"/>
                                            <p>{el}</p>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div onClick={clickOptionModel} className="filterAll--card__select">
                        <h4>Модель {allDownM ? <FaAngleUp className='selectUp'/> :
                            <FaAngleDown className='selectDown'/>}</h4>
                        <div ref={refAllOptionModel} className="filterAll--card__select--optionModel">
                            <div className="filterAll--card__select--optionModel__inp">
                                <label onClick={()=>setModel('')}>
                                    <input name='Модель' type="radio"/>
                                    <p>Все</p>
                                </label>
                            </div>
                            {
                                brand.map((el,inx)=> (
                                    <div key={inx} className="filterAll--card__select--optionModel__inp">
                                        <label onClick={() => setModel(el.model)}>
                                            <input name='Модель' type="radio"/>
                                            <p>{el.model}</p>
                                        </label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div onClick={clickOptionObem} className="filterAll--card__select">
                        <h4>Обьем {allDownO ? <FaAngleUp className='selectUp'/> :
                            <FaAngleDown className='selectDown'/>}</h4>
                        <div ref={refAllOptionObem} className="filterAll--card__select--optionObem">
                            <div className="filterAll--card__select--optionObem__inp">
                                <label onClick={()=>setMemory('')}>
                                    <input name='Обьем' type="radio"/>
                                    <p>Все</p>
                                </label>
                            </div>
                            {
                                uniqueMemory.map((el,inx)=> (
                                    <div key={inx} className="filterAll--card__select--optionObem__inp">
                                        <label onClick={()=>setMemory(el)}>
                                            <input name='Обьем' type="radio"/>
                                            <p>{el}</p>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div onClick={clickOptionColor} className="filterAll--card__select">
                        <h4>Цвет {allDownC ? <FaAngleUp className='selectUp'/> :
                            <FaAngleDown className='selectDown'/>}</h4>
                        <div ref={refAllOptionColor} className="filterAll--card__select--optionColor">
                            <div className="filterAll--card__select--optionColor__inp">
                                <label onClick={() => setColor('')}>
                                    <input ref={iChecked2} name='Цвет' type="radio"/>
                                    <p>Все</p>
                                </label>
                            </div>
                            <div className="filterAll--card__select--optionColor__inp">
                                {
                                    uniqueColors.map((color, index) => (
                                        <canvas onClick={(e)=> colorStop2(e,color)} key={index} style={{ background: color }} color={color}></canvas>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={clickClose} ref={refCloseBg} className="filterAllBg"></div>
        </div>
    );
};

export default Filter;