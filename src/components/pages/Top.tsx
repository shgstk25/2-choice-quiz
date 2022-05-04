import { VFC } from "react";
import { Link } from "react-router-dom";

const Top: VFC = () => (
    <>
        <h1>メニュー</h1>
        <ul>
            <li><Link to="/exam">試験ページ</Link></li>
            <li><Link to="/list">問題管理ページ</Link></li>
        </ul>
    </>
)

export default Top;
