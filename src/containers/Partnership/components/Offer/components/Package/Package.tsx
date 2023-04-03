import styles from './Package.module.scss';
import InfoButton from '../InfoButton';
import SelectableCard from "../../../../../../components/SelectedCard/SelectedCard";
import {IOffer, ordersId, setPopupTitle} from "../../../../../../redux/slices/orderSlice/orderSlice";
import { useDispatch } from 'react-redux';


type Props = {
    title: string;
    id: ordersId;
    list: string[];
    price: number;
    isMain?: boolean;
    isSelected: boolean;
    onClick: (id: IOffer) => void
};

const Package = ({title, id, isSelected, list, price, isMain, onClick}: Props) => {
    const dispatch = useDispatch();

    const handleInfo = (e:  React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        document.body.style.overflow = 'hidden';
        dispatch(setPopupTitle(id));
    }

    return (
        <>

            <SelectableCard isSelected={isSelected} onClick={onClick} style={{pointerEvents: 'all'}}
                            className={`${styles.package_wrapper} ${isMain && styles.package_wrapper_main}`}>
                <p className={styles.package_title}>{title}</p>
                <div className={styles.package_info_button}>
                    <InfoButton onClick={handleInfo} />
                </div>
                <div className={styles.package_list_wrapper}>
                    <ul>
                        {list.map((item, index) => <li key={index}
                                                       className={styles.package_list_text}>{item}</li>)}
                    </ul>
                </div>
                <p className={styles.package_pick}></p>
                <div className={styles.package_price}>
                    <p className={styles.package_price_text}>{price}$</p>
                </div>
            </SelectableCard>
        </>


    );
};

export default Package;
