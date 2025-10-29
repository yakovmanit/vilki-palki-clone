export const CloseIcon = ({ className = 'stroke-white' }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16px'
			height='16px'
			viewBox='0 0 34 34'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit={10}
				strokeWidth={6}
				d='m3 3 27.818 27.818M30.818 3 3 30.818'
			/>
		</svg>
	);
};
