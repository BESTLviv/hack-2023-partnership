// @flow
import * as React from 'react';
import styles from './ChartInfo.module.scss'
import RangeElement from "./RangeElement";

const ChartInfo = () => {
    return (
        <div className={styles.chartInfoContainer}>
            <div className={styles.chartInfoBorder}/>
            <div className={styles.rangesWrapper}>
                <RangeElement
                    data={{title: 'Кількість користувачів у Tg-боті', isTitleOnTop: true, number: 842, width: 356}}/>
                <RangeElement
                    data={{
                        title: 'Кількість користувачів, що пройшли повну реєстрацію',
                        isTitleOnTop: false,
                        number: 175,
                        width: 88
                    }}/>
                <RangeElement
                    data={{title: 'Кількість команд, що пройшли відбір', isTitleOnTop: false, number: 15, width: 197}}/>

            </div>

        </div>
    );
};

export default ChartInfo
