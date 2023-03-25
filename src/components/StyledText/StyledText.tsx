// @flow
import * as React from 'react';
import styles from './StyledText.module.scss'
import {CSSProperties, FC} from "react";

interface IStyledText {
    children: string | number
    styles?: CSSProperties

}


const StyledText: FC<IStyledText> = ({children, styles:extraStyles}) => {
    return (
        <p style={extraStyles} className={styles.styledText}>{children}</p>

    );
};

export default StyledText
