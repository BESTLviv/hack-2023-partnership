import { Flex } from '@chakra-ui/react';

import style from '../team/Teammate.module.scss';

interface TeammateProps {
  avatarSrc: string,
  name: string;
  position: string;
  number: string;
  email: string
}

const Teammate: React.FC<TeammateProps> = ({
  // eslint-disable-next-line react/prop-types
  avatarSrc, name, position, number, email
}) => {
  return (
    <Flex className={style.teammate} flexDirection={'column'} alignItems={'center'}>
      <img src={avatarSrc} alt="teammate" className={style.teammate_avatar} width={275}/>
      <Flex flexDirection={'column'}>
        <span className={style.teammate_name}>{name}</span>
        <span className={style.teammate_position}>{position}</span>
        <Flex className={style.teammate_contacts} flexDirection={'column'}>
          <span className={style.teammate_number}>{number}</span>
          <span className={style.teammate_email}>{email}</span>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Teammate;