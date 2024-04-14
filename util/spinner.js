import { motion } from 'framer-motion';

export default function Spinner({ width, height }) {
	const spinnerAnimation = {
		rotate: 360,
	};

	const transition = {
		repeat: Infinity,
		ease: 'linear',
		duration: 1,
	};

	return (
		<motion.div
			animate={spinnerAnimation}
			transition={transition}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				borderRadius: '50%',
				borderWidth: '5px',
				borderColor: 'var(--color-theme-01) transparent transparent transparent',
				borderStyle: 'solid',
				boxSizing: 'border-box',
			}}
		/>
	);
}
