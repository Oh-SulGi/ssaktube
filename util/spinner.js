import { motion } from 'framer-motion';

export default function Spinner({ width, height, margin }) {
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
				margin: margin,
				width: `${width}px`,
				height: `${height}px`,
				borderRadius: '50%',
				borderWidth: '5px',
				borderColor: 'lightblue transparent lightblue transparent',
				borderStyle: 'solid',
				boxSizing: 'border-box',
			}}
		/>
	);
}
