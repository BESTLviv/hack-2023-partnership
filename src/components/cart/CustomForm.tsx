/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.scss';
import RoundWhiteCheckbox from './RoundWhiteCheckbox';
import { resetForm, togglePartner, updateCompanyName, updateEmail } from "../../redux/slices/formSlice/formSlice";
import { RootState } from "../../redux/store";
import Button from "../button/Button";
import emailjs from '@emailjs/browser';
import { getTotalPrice } from '../../redux/slices/formSlice/utils/getTotalPrice';
import { useTranslation } from 'react-i18next';

const CustomForm = () => {
    const { t } = useTranslation();
    const { companyName, email, isPartner } = useSelector(
        (state: RootState) => state.form
    );

    const selectedOrders = useSelector((state: RootState) => state.order.selectedOrders);
    const price = getTotalPrice();
    const dispatch = useDispatch();


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = {
            company_name: companyName,
            company_email: email,
            isPartner: isPartner,
            price: price + '$',
            options: selectedOrders.map((order) => order.id).join('; '),
            message: 'some message',
        }
        //  @ts-ignore:next-line
        emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, params, process.env.REACT_APP_EMAIL_USER_ID)
            .then((response) => console.log(response)).catch((error) => console.log(error));

        dispatch(resetForm());
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <RoundWhiteCheckbox
                id="custom-checkbox"
                name="custom-checkbox"
                checked={isPartner}
                onChange={() => dispatch(togglePartner())}
                labelText={t('cart.regular_partner').toString()}
            />
            <input
                required
                type="text"
                className={styles.formInput}
                placeholder={t('cart.name').toString()}
                value={companyName}
                onChange={(event) =>
                    dispatch(updateCompanyName(event.target.value))
                }
            />
            <input
                required
                type="email"
                className={styles.formInput}
                placeholder={t('cart.email').toString()}
                value={email}
                onChange={(event) => dispatch(updateEmail(event.target.value))}
            />
            <Button text={t('cart.submit')} type="submit" className={styles.formButton} />

        </form>
    );
};

export default CustomForm;
