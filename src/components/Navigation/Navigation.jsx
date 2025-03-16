import { Link } from "react-router-dom";
import s from './Navigation.module.css'
export default function Navigations() {
    return (
        <nav className={s.container}>
            <Link to="/generate" className={s.link}>Генерировать QR код</Link>
            <Link to="/scaner" className={s.link}>Сканировать QR код</Link>
            <Link to="/generateHistory" className={s.link}>История генерирования</Link>
            <Link to="/scanHistory" className={s.link}>История сканирования</Link>
        </nav>
    );
}
