import * as React from 'react';
import GradientBox from "../../../../components/GradientBox/GradientBox";
import styles from './SocialMediaCard.module.scss'
import Facebook from '../../../../assets/icons/Facebook.svg'
import StyledText from "../../../../components/StyledText";
import {In, Inst, Telegram} from "../../../../assets";


type Props = {};

const SocialMediaItem = ({Icon, text}) => {
    return (
        <div className={styles.socialMediaItemContainer}>
            <img src={Icon} alt={'#'}/>
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
                        <SocialMediaItem key={text} Icon={image} text={text}/>
                    ))}
                </>

            </GradientBox>
        </div>

    );
};

export default SocialMediaCard
