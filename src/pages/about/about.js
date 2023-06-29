// JS
import App from '../../layouts/app';

// CSS
import './about.scss';


class About extends App
{
    constructor()
    {
        super();
        console.log('About');
    }
}

window.addEventListener('DOMContentLoaded', e =>
{
    new About();
});