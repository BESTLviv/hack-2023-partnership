import  { useState, FormEvent } from 'react';
import styles from './Form.module.scss';
import RoundWhiteCheckbox from './RoundWhiteCheckbox';

const CustomForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <RoundWhiteCheckbox
        id="custom-checkbox"
        name="custom-checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        labelText="постійний партнер"
      />
      <input
        type="text"
        className={styles.formInput}
        placeholder="назва компанії"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <input
        type="email"
        className={styles.formInput}
        placeholder="пошта"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit" className={styles.formButton}>
        оформити
      </button>
    </form>
  );
};

export default CustomForm;
