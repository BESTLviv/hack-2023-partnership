// @flow
import * as React from 'react';
import styles from './ChartInfo.module.scss';
import RangeElement from './RangeElement';
import { useTranslation } from 'react-i18next';
const ChartInfo = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.chartInfoContainer}>
            <div className={styles.chartInfoBorder} />
            <div className={styles.rangesWrapper}>
                <RangeElement
                    data={{
                        title: t('statistics.tg_bot_users'),
                        isTitleOnTop: true,
                        number: 842,
                        width: 356,
                    }}
                />
                <RangeElement
                    data={{
                        title: t('statistics.registered_users'),
                        isTitleOnTop: false,
                        number: 175,
                        width: 88,
                    }}
                />
                <RangeElement
                    data={{
                        title: t('statistics.selected_teams'),
                        isTitleOnTop: false,
                        number: 15,
                        width: 197,
                    }}
                />
            </div>
        </div>
    );
};

export default ChartInfo;
