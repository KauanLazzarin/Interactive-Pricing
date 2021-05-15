import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.headerContainer}>
            <h1>Simple, traffic-based pricing</h1>
            <p>
                Sign up for our 30-day trial. <br />
                No credit card required 
            </p>
        </header>
    );
};