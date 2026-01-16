import { motion} from "framer-motion";
import type {Variants} from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    variant?: Variants; // 独自のアニメーションを指定可能にする
    delay?: number;     // タイミングをずらす用
    direction?: "up" | "down" | "left" | "right"; // 方向を簡易指定可能にする
}

export const ScrollReveal = ({ children, variant, delay = 0, direction = "up" }: Props) => {
    // デフォルトのアニメーション設定
    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 1.5, delay, ease: "easeOut" }
        }
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={variant || defaultVariants}
            style={{ position: 'relative', zIndex: 10 }}
        >
            {children}
        </motion.div>
    );
};