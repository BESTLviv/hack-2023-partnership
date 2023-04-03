import {motion} from "framer-motion";

function SelectableCard({children, onClick, className,isSelected, ...rest}: any) {

    return (
        <motion.div
            {...rest}
            className={`${isSelected} ? "card selected" : "card" ${className}`}
            onClick={() => onClick()}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            animate={{opacity: isSelected ? 1 : 0.65, scale: isSelected ? 1.1 : 1}}
        >
            {children}
        </motion.div>
    );
}

export default SelectableCard;
