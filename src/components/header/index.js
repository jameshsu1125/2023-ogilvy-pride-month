import { memo, useEffect } from 'react';
import './index.less';

const Header = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Header'>
			<div>
				<div className='context'>
					<div className='logo' />
					<div className='hashtag'>#PRIDE2023</div>
				</div>
			</div>
		</div>
	);
});
export default Header;
