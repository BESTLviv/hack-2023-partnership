import style from './Button.module.scss'

interface props{
    linkTo: string,
    text: string
}

const Button = ({linkTo,text }: props) => {
    return <a href={linkTo} className={style.become_partner_btn}>{ text }</a>
}

export default Button;