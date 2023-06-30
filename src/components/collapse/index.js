import { useMemo, useState } from 'react';
import './index.less';

const Collapse = ({ children, height = '315px' }) => {
	const [state, setState] = useState(false);

	const maxHeight = useMemo(() => {
		if (state) return 'none';
		return height;
	}, [state, height]);

	return (
		<div className='Collapse'>
			<div className='w-full overflow-hidden' style={{ maxHeight }}>
				{children}
			</div>
			{!state && (
				<div className='flex w-full justify-end'>
					<button
						type='button'
						className='py-2 text-primary hover:text-secondary'
						onClick={() => setState(true)}
					>
						...顯示更多
					</button>
				</div>
			)}
		</div>
	);
};
export default Collapse;
