// JS
import $ from "jquery";
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';

// CSS
import "../styles/tailwind.css";
import './app.scss';

// JSON
import Config from '../scripts/config';

// HOT MODULE
if (module.hot) module.hot.accept();

export default class App
{
    constructor()
    {
        // jQuery
        window.$ = window.jQuery = $;

        this.config = Config;
        this.env = process.env.NODE_ENV;
        this.header = new Header();
        this.footer = new Footer();
    }
}