import { memo } from 'react';
import './index.less';

const Section = memo(({ children }) => (
	<section className='Section'>
		<div className='w-full overflow-hidden'>{children}</div>
	</section>
));
export default Section;
