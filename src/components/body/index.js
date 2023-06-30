import { memo, useEffect } from 'react';
import './index.less';

const Body = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Body'>
			<div className='context'>{children}</div>
		</div>
	);
});
export default Body;
