import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext } from 'react';
import { LandingContext, LandingSteps } from '../../pages/landing/config';
import './index.less';

const Container = memo(({ children }) => {
	const [state] = useContext(LandingContext);
	const { steps } = state;

	return (
		<div className='Container'>
			<div>
				{children}
				<div className='ribbon-l'>
					{[...new Array(6).keys()].map((e, i) => (
						<TweenProvider
							key={e}
							initStyle={{ opacity: 0, marginLeft: '100px' }}
							tweenStyle={
								steps === LandingSteps.fadeIn ? { opacity: 1, marginLeft: '0px' } : undefined
							}
							options={{ delay: i * 100 }}
						>
							<div />
						</TweenProvider>
					))}
				</div>
				<div className='ribbon-r'>
					{[...new Array(5).keys()].map((e, i) => (
						<TweenProvider
							key={e}
							initStyle={{ opacity: 0, marginLeft: '-100px' }}
							tweenStyle={
								steps === LandingSteps.fadeIn ? { opacity: 1, marginLeft: '0px' } : undefined
							}
							options={{ delay: 50 + i * 200 }}
						>
							<div key={e} />
						</TweenProvider>
					))}
				</div>
			</div>
		</div>
	);
});
export default Container;
