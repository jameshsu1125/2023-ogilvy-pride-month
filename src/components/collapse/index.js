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
