import { memo } from 'react';
import './index.less';

const Container = memo(({ children }) => (
	<div className='Container'>
		<div>
			{children}
			<div className='ribbon-l'>
				{[...new Array(6).keys()].map((e) => (
					<div key={e} />
				))}
			</div>
			<div className='ribbon-r'>
				{[...new Array(5).keys()].map((e) => (
					<div key={e} />
				))}
			</div>
		</div>
	</div>
));
export default Container;
