import PricingContext from '../../contexts/PricingContext';
import Input from './Input/Input';
import styles from './Main.module.css';
import Pricing from './Pricing/Pricing';

export default function Main () {
    return (
        <PricingContext>
            <main className={styles.mainContainer}>
                <Input />  
                <Pricing />
            </main>
        </PricingContext>
    );
};