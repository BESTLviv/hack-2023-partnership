type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
import InfoButtonIcon from '../../../../../../assets/images/icons/infoButton.svg';
import styles from './InfoButton.module.scss';

const InfoButton = ({ onClick }: Props) => {
  return (
    <img
      src={InfoButtonIcon}
      className={styles.image}
      onClick={onClick}
    ></img>
  );
};

export default InfoButton;
