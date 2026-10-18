import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 24, className = "", as = "div", ...rest }) {
    const Component = motion[as] ?? motion.div;
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </Component>
    );
}

export function RevealGroup({ children, className = "", as = "div" }) {
    const Component = motion[as] ?? motion.div;
    return (
        <Component
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
            }}
        >
            {children}
        </Component>
    );
}

export const revealItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function RevealItem({ children, className = "", ...rest }) {
    return (
        <motion.div className={className} variants={revealItemVariants} {...rest}>
            {children}
        </motion.div>
    );
}
