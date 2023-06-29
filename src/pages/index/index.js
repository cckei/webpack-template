// JS
import App from '../../layouts/app';

// CSS
import './index.scss';


class Index extends App
{
    constructor()
    {
        super();
        console.log('Index');
    }
}

window.addEventListener('DOMContentLoaded', e =>
{
    new Index();
});