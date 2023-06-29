// JS
import App from '../../layouts/app';

// CSS
import './about-overview.scss';


class AboutOverview extends App
{
    constructor()
    {
        super();
        console.log('AboutOverview');
    }
}

window.addEventListener('DOMContentLoaded', e =>
{
    new AboutOverview();
});