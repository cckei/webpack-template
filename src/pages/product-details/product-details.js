// JS
import App from '../../layouts/app';
import ComponentA from '../../components/product/component-A/component-A';
import ComponentB from '../../components/product/component-B/component-B';

// CSS
import './product-details.scss';


let componentA, componentB;

class ProductDetails extends App
{
    constructor()
    {
        super();
        console.log('ProductDetails');

        componentA = new ComponentA();
        componentB = new ComponentB();

        $(document).ready(() =>
        {
            console.log('ready');
        });
    }
}

window.addEventListener('DOMContentLoaded', e =>
{
    new ProductDetails();
});