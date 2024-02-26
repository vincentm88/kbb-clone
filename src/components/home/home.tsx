import { Hero } from './hero';
import { ShopSmart } from '../shopsections/shopsmart'
import { ShopCatagories } from '../shopsections/shopcatagories';
import { ShopMakes } from '../shopsections/shopmakes';

export const Home = () => {
    return  <>
            <Hero />
            <ShopSmart />
            <ShopCatagories />
            <ShopMakes />
            </>
}