// JS
import App from '../../scripts/app';
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