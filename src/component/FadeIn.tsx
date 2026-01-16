import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const FadeIn = ({ children}: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.5 }}
        >
            {children}
        </motion.div>
    );
};