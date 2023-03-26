import { Box, Flex } from '@chakra-ui/react';

import style from '../ProjectOrganizator/BestData.module.scss';

export interface BestDataProps {
  count: number;
  subject: string;
}

// eslint-disable-next-line react/prop-types
const BestData: React.FC<BestDataProps> = ({count, subject}) => {
  return (
    <Flex flexDirection={'column'} width={160}>
      <Box className={style.bestdata_count}>{count}</Box>
      <Box className={style.bestdata_subject}>{subject}</Box>
    </Flex>
  );
}

export default BestData;