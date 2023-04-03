import { useMemo } from 'react';
import styles from './OfferPopup.module.scss';

type Props = {
  offer: {
    title: string;
    text: string;
  }[];
  offerTitle: string;
}

const OfferPopup = ({offer, offerTitle}: Props) => {

  const contentForDesktop = useMemo(() => {
    return offer.reduce((acc, item) => {
      acc.push(item.title);
      acc.push(item.text);
      return acc;
    }
    , [] as string[]);
  }, [offer]);


  return (
  <div className={styles.popupWrapper}>
    <div className={styles.popupContent}>
      <div className={styles.offerTitle}>{offerTitle}</div>
      <div className={styles.desktopWrapper}>
        {contentForDesktop.map((content, index) => {
          return index % 2 === 0 ? (<div className={styles.boxTitle} key={index}>{content}</div>) : (<div className={styles.boxText} key={index}>{content}</div>)
        })}
      </div>
      {/* <div className={styles.mobileWrapper}>
        {offer.map((content, index) => (
          <>
           <div className={styles.mobileBoxTitle} key={index}>{content.title}</div>
           <div className={styles.mobileBoxText} key={index}>{content.text}</div>
          </>
        ))}
      </div> */}
    </div>
  </div>);
}

export default OfferPopup;