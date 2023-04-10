/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.scss';
import {resetForm, togglePartner, updateCompanyName, updateEmail} from "../../redux/slices/formSlice/formSlice";
import {RootState} from "../../redux/store";
import Button from "../button/Button";
import emailjs from '@emailjs/browser';

const CustomForm = () => {
    const { companyName, email, isPartner } = useSelector(
        (state: RootState) => state.form
    );

    const selectedOrders  = useSelector((state: RootState) => state.order.selectedOrders);
    const dispatch = useDispatch();


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = {
            company_name: companyName,
            company_email: email,
            isPartner: isPartner,
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
            <input
                required
                type="text"
                className={styles.formInput}
                placeholder="назва компанії"
                value={companyName}
                onChange={(event) =>
                    dispatch(updateCompanyName(event.target.value))
                }
            />
            <input
                required
                type="email"
                className={styles.formInput}
                placeholder="пошта"
                value={email}
                onChange={(event) => dispatch(updateEmail(event.target.value))}
            />
            <Button text={'оформити'} type="submit" className={styles.formButton}/>

        </form>
    );
};

export default CustomForm;
