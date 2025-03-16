import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './qrCodeGenerator.css'

import { GENERATE_DATA } from '../../constans';

export default function QrCodeGenerator() {
    const [value, setValue] = useState("sdf")
    const [result, setResult] = useState('')

    function onClickHandler(){
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') 
        if (value !== '') {
            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))
        }


        setResult(value)
        setValue('')
    }  
    
    function onChangeHandler(event){
        setValue(event.target.value)
        setResult('')
    }

    return(
        <div className='main'>
            {result != "" ? <QRCodeSVG value={result} className='QR' /> : null}
            
            <input type="text" value={value} onChange={onChangeHandler} className='inputText'/>
            <button onClick={onClickHandler} className="generate">сгенерировать</button>
        </div>
    )
}
