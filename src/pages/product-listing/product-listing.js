// JS
import App from '../../scripts/app';

// CSS
import './product-listing.scss';


class ProductListing extends App
{
    constructor()
    {
        super();
        console.log('ProductListing');
    }
}

window.addEventListener('DOMContentLoaded', e =>
{
    new ProductListing();
});