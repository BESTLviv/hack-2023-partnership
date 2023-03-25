import * as React from 'react';
import GradientBox from '../../../../components/GradientBox/GradientBox';
import styles from './SocialMediaCard.module.scss'
import Facebook from '../../../../assets/icons/Facebook.svg'
import StyledText from '../../../../components/StyledText';
import {In, Inst, Telegram} from '../../../../assets';


type Props = {
 icon: string;
 text: string;
};

const SocialMediaItem = ({icon, text}: Props) => {
    return (
        <div className={styles.socialMediaItemContainer}>
            <img src={icon} alt={'#'}/>
            <StyledText styles={{fontSize: 26}}>
                {text}
            </StyledText>
        </div>
    )
}

const data = [
    {
        image: Inst,
        text: '2400+'
    },
    {
        image: Facebook,
        text: '2100+'
    },
    {
        image: Telegram,
        text: '600+'
    },
    {
        image: In,
        text: '150+'
    },

]

const SocialMediaCard = () => {
    return (
        <div style={{flexShrink: 0}}>
            <GradientBox padding={20}>
                <>
                    {data.map(({image, text}) => (
                        <SocialMediaItem key={text} icon={image} text={text}/>
                    ))}
                </>

            </GradientBox>
        </div>

    );
};

export default SocialMediaCard
