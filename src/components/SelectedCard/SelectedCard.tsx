import {motion} from "framer-motion";
import {useState} from "react";

function SelectableCard({children, className, ...rest}: any) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <motion.div
            {...rest}
            className={`${isSelected} ? "card selected" : "card" ${className}` }
            onClick={() => setIsSelected(!isSelected)}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            animate={{opacity: isSelected ? 1 : 0.5, scale: isSelected ? 1.1 : 1}}
        >
            {children}
        </motion.div>
    );
}

export default SelectableCard;
