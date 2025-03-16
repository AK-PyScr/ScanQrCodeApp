import { Scanner } from '@yudiel/react-qr-scanner';
import './qrCodeScaner.css'
import { useState } from 'react';

import { SCAN_DATA } from '../../constans';

export default function QRCodeScaner(){
    const [scaned, setScaned] = useState()
    function HandleScan(result){
        setScaned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') 
        if (result[0].rawValue !== '') {
            localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
        }
        
    }

    const settings = {
        audio: false,
    };


    return(
    <div className='Scaner-conteiner'>
        <p>{scaned}</p>
      <Scanner 
        allowMultiple
        onScan={HandleScan}
        components={settings}
        styles={{ container: { width: 350 } }}
        />
    </div>
    ) 
}