// @flow
import * as React from 'react';
import {CSSProperties, FC} from "react";
import styles from './RangeElement.module.scss'

interface IRangeElementProps {
    data: {
        title: string
        isTitleOnTop: boolean
        number: number;
        width: number
    }


}

interface IStyledText {
    children: string | number
    styles?: CSSProperties

}


const StyledText: FC<IStyledText> = ({children}) => <p className={styles.styledText}>{children}</p>

const RangeElement: FC<IRangeElementProps> = ({data: {isTitleOnTop, title, width, number}}) => {
    return (
        <div className={styles.rangeElementContainer}>
            {isTitleOnTop &&
              <div className={styles.topTitleContainer}>
                <StyledText>{title}</StyledText>
              </div>
            }
            <div className={styles.rangeBoxWrapper}>
                <div className={styles.rangeBox} style={{width: width}}>
                    <StyledText>{number}</StyledText>
                </div>
                {!isTitleOnTop &&
                  <div className={styles.rightTitleContainer}>
                    <StyledText>{title}</StyledText>
                  </div>
                }
            </div>

        </div>
    );
};
export default RangeElement
