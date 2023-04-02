import {motion} from 'framer-motion';
import styles from './Button.module.scss'

const buttonVariants = {
    initial: {
        scale: 1,
        boxShadow: 'none',
    },
    hover: {
        scale: 1.05,
        boxShadow: '0px 0px 12px 7px rgb(45, 171, 102)',
        transition: {
            duration: 0.2,
            stiffness: 400,
        },
    },
    active: {
        scale: 0.95,
        boxShadow:
            'inset 0px 55px 25px -30px rgba(45, 171, 102, 1), 0px 0px 20px 7px rgb(45, 171, 102)',
        transition: {
            duration: 1,
            type: 'all'
        },

    },
};

const Button = ({text}: any) => {
    return (
        <motion.button
            className={styles.become_partner_btn}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="active"
        >
            {text}
        </motion.button>
    );
};

export default Button;
