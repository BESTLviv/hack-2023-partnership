// @flow
import * as React from 'react';
import HeaderText from "../../../../components/HeaderText";
import './Companies.module.scss'

type Props = {};
export const Companies = (props: Props) => {
    return (
        <div>
            <HeaderText text={'Нас підтримували'}/>
            <div className={'companiesWrapper'}>

            </div>
        </div>
    );
};
