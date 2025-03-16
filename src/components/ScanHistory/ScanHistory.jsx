import { SCAN_DATA } from '../../constans';
import { QRCodeSVG } from 'qrcode.react';

export default function GenerateHistory(){
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') 
    
    return(
        <div>
            {data.map((text) => (
                <p key={text}>{text}
                    <QRCodeSVG value={text} className='QR' size={100} />
                </p>
            ))}
        </div>
    )
}