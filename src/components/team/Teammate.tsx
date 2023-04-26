import AnnaHukSvg from '../../assets/images/team/anna_huk.png';
import BohdanVivcharSvg from '../../assets/images/team/bohdan_vivchar.png';
import SofiaLevSvg from '../../assets/images/team/sofia_lev.png';

import style from '../team/Teammate.module.scss';

interface TeammateProps {
    name: string;
    position: string;
    number: string;
    email: string
}

const getImage = (email: string) => {
    switch (email) {
        case "anna.huk.best@gmail.com": return AnnaHukSvg;
        case "levsophia11@gmail.com": return SofiaLevSvg;
        case "bohdanvivchar.best@gmail.com": return BohdanVivcharSvg;
    }
}
const Teammate: React.FC<TeammateProps> = ({
    // eslint-disable-next-line react/prop-types
    name, position, number, email
}) => {

    return (
        <div className={style.teammate}>

            <img src={getImage(email)} alt="teammate" className={style.teammate_avatar} width={275} />
            <div className={style.contactBody}>
                <div>
                    <p className={style.teammate_name}>{name}</p>
                    <p className={style.teammate_position}>{position}</p>
                </div>

                <div className={style.teammate_contacts}>
                    <p className={style.teammate_number}>{number}</p>
                    <p className={style.teammate_email}>{email}</p>
                </div>
            </div>
        </div>
    );
}

export default Teammate;
