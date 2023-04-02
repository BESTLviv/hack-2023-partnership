import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.scss';
import RoundWhiteCheckbox from './RoundWhiteCheckbox';
import {resetForm, togglePartner, updateCompanyName, updateEmail} from "../../redux/slices/formSlice/formSlice";
import {RootState} from "../../redux/store";


const CustomForm = () => {
    const { companyName, email, isPartner } = useSelector(
        (state: RootState) => state.form
    );

    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        dispatch(resetForm());
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <RoundWhiteCheckbox
                id="custom-checkbox"
                name="custom-checkbox"
                checked={isPartner}
                onChange={() => dispatch(togglePartner())}
                labelText="Постійний партнер"
            />
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
            <button type="submit" className={styles.formButton}>
                оформити
            </button>
        </form>
    );
};

export default CustomForm;
