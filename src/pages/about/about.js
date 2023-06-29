// JS
import App from '../../scripts/app';

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