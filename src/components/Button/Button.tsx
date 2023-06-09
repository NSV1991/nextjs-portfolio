import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    text: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            type={props.type || 'button'}
            className={styles.button}>
            {props.children}
        </button>
    );
};
