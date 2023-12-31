// JS
import $ from "jquery";
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';

// JSON
import Config from './config';

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