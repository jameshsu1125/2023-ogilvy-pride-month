import { memo, useEffect } from 'react';
import './index.less';
import Hr from '../hr';

const Blockquote = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Blockquote'>
			<div className='logo'>{children}</div>
			<Hr />
		</div>
	);
});
export default Blockquote;
