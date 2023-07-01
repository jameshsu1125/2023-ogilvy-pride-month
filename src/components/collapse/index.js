import { useMemo, useState } from 'react';
import './index.less';

const Collapse = ({ children, height = '315px', symbol = false, index = 0 }) => {
	const [state, setState] = useState(false);

	const maxHeight = useMemo(() => {
		if (state) return 'none';
		return height;
	}, [state, height]);

	const className = useMemo(() => {
		const classes = ['Collapse'];
		if (state && symbol) classes.push(index === 0 ? 'active' : 'active2');
		return classes.join(' ');
	}, [symbol, index, state]);

	return (
		<div className={className}>
			<div className='w-full overflow-hidden' style={{ maxHeight }}>
				{children}
			</div>
			{!state && (
				<div className='mt-3 flex w-full justify-center md:mt-2'>
					<button type='button' onClick={() => setState(true)}>
						顯示更多
						<div />
					</button>
				</div>
			)}
		</div>
	);
};
export default Collapse;
