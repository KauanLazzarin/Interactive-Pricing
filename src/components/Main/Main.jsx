import Input from './Input/Input';
import styles from './Main.module.css';
import Pricing from './Pricing/Pricing';

export default function Main () {
    return (
        <main className={styles.mainContainer}>
            <Input />  
            <Pricing />
        </main>
    );
};