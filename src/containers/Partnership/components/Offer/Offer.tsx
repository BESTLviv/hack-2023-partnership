import Package from './components/Package';
import HeaderText from '../../../../components/HeaderText';
import styles from './Offer.module.scss';
import AnimationWrapper from '../../../../Animations';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { IOffer, selectOrder } from '../../../../redux/slices/orderSlice/orderSlice';
import { useTranslation } from 'react-i18next';

const Offer = () => {
    const { t } = useTranslation();
    const Offers: Array<IOffer> = t('service_packages.Offers', { returnObjects: true });
    const offerObj: IOffer = Offers[0];
    const optionalPackages: Array<IOffer> = Offers.slice(1, 4);

    const dispatch = useAppDispatch();
    const selectedOrders = useAppSelector((state) => state.order.selectedOrders);

    const handleSelectChange = (orderObj: IOffer) => {
        dispatch(selectOrder(orderObj));
    };

    const isOfferSelected = (offer: IOffer) => {
        return !!selectedOrders.find((order) => order.id === offer.id);
    };
    return (
        <AnimationWrapper
            id={'orders'}
            animationType={'fadeIn'}
            duration={1}
            delay={0.5}
            className={styles.offer_wrapper}
        >
            <HeaderText text={t('service_packages.Offer')} />
            <div className={styles.offer_empty_space} />
            <Package
                isSelected={isOfferSelected(offerObj)}
                onClick={() => handleSelectChange(offerObj)}
                title={offerObj.title}
                id={offerObj.id}
                list={offerObj.list}
                price={offerObj.price}
                isMain
            />

            <div className={styles.offer_options_wrapper}>
                {optionalPackages.map((packageItem, index) => (
                    <Package
                        isSelected={isOfferSelected(packageItem)}
                        id={packageItem.id}
                        onClick={() => handleSelectChange(packageItem)}
                        key={index}
                        title={packageItem.title}
                        list={packageItem.list}
                        price={packageItem.price}
                        isLimited={packageItem.isLimited}
                    />
                ))}
            </div>
            <div className={styles.additionalInfoContainer}>
                <div>
                    <div className={styles.feedback_container}>
                        <div className={styles.additionalInfo_container}>
                            <p>
                                {t('service_packages.charitable_collection')}
                            </p>

                            <p>{t('service_packages.NBU_course')}</p>
                            <p>{t('service_packages.previous_partners')}</p>
                            <p>{t('service_packages.2_opts')}</p>
                            <p>{t('service_packages.3_opts')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default Offer;
