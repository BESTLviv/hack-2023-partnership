// @flow
import * as React from 'react';
import HeaderText from "../../../../components/HeaderText";
import AnimationWrapper from "../../../../Animations";

export const Topic = () => {
    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>


            <HeaderText text={"тема"}/>
            <div style={{height: '50px'}}/>
            <HeaderText text={"волонтерство"}/>
        </AnimationWrapper>


    );
};

export default Topic
