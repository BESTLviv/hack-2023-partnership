// @flow
import * as React from 'react';
import styles from './GradientBox.module.scss'
import {CSSProperties, FC} from "react";

type GradientBoxProps = {
    children: JSX.Element,
    styles?: CSSProperties
    padding?: number
};
const GradientBox: FC<GradientBoxProps> = ({children, padding}) => {
    return (
        <div style={{padding: padding}} className={styles.gradientBoxContainer}>
            {children}
        </div>
    );
};

export default GradientBox
