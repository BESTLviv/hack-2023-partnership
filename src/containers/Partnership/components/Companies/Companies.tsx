// @flow
import * as React from 'react';
import HeaderText from "../../../../components/HeaderText";
import styles from './Companies.module.scss'

import QsfDitigatl from '../../../../assets/icons/companies/OsfIidigital.svg';
import Sombra from '../../../../assets/icons/companies/Sombra.svg';
import Tsukat from '../../../../assets/icons/companies/Tsukat.svg';
import Computools from '../../../../assets/icons/companies/Computools.svg';
import Clover from '../../../../assets/icons/companies/Clover.svg';
import Keepit from '../../../../assets/icons/companies/keepit.svg';
import Qubstudio from '../../../../assets/icons/companies/Qubstudio.svg';
import Infineon from '../../../../assets/icons/companies/Infineon.svg';
import Lynksen from '../../../../assets/icons/companies/lynksen.svg';
import AbtoSoftware from '../../../../assets/icons/companies/AbtoSoftware.svg';
import Ukeess from '../../../../assets/icons/companies/Ukeess.svg';
import WiseGuys from '../../../../assets/icons/companies/WiseGuys.svg';
import Dataart from '../../../../assets/icons/companies/Dataart.svg';
import Leobit from '../../../../assets/icons/companies/Leobit.svg';
import SoftServe from '../../../../assets/icons/companies/SoftServe.svg';
import AnimationWrapper from '../../../../Animations';


const Companies = () => {
    return (
        <AnimationWrapper id={'companies'} animationType={'fadeIn'} duration={1} delay={0.5}>
        <div style={{display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
            <HeaderText text={'Нас підтримували'}/>
            <div className={styles.companiesWrapper}>
                <img className={styles.logo} src={QsfDitigatl} />
                <img className={styles.logo} src={Sombra} />
                <img className={styles.logo} src={Tsukat} />
                <img className={styles.logo} src={Computools} />
                <img className={styles.logo} src={Clover} />
                <img className={styles.logo} src={Keepit} />
                <img className={styles.logo} src={Qubstudio} />
                <img className={styles.logo} src={SoftServe} />
                <img className={styles.logo} src={Lynksen} />
                <img className={styles.logo} src={AbtoSoftware} />
                <img className={styles.logo} src={Ukeess} />
                <img className={styles.logo} src={WiseGuys} />
                <img className={styles.logo} src={Dataart} />
                <img className={styles.logo} src={Leobit} />
                <img className={styles.logo} src={Infineon} />
            </div>
        </div>
        </ AnimationWrapper>
    );
};

export default Companies;
