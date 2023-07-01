import OnloadProvider from 'lesca-react-onload';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, TRANSITION } from '../../settings/constant';
import './index.less';

const Background = () => (
	<div className='absolute top-0 h-full w-full bg-backgroundColor opacity-95' />
);
const Text = ({ children }) => <span className='relative text-textColor'>{children}</span>;

const Angle = ({ data, setContext, steps }) => {
	const { fadeOut } = data;
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.3, opacity: 0 });

	useEffect(() => {
		if (!steps) return;
		if (fadeOut) {
			setStyle(
				{ y: 0 - window.innerHeight * 0.3 - 300, opacity: 1 },
				{
					easing: Bezier.inBack,
					onEnd: () => {
						setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
						data.onEnd?.();
					},
				},
			);
		} else {
			setStyle({ y: 0, opacity: 1 });
		}
	}, [steps, fadeOut]);

	return (
		<div style={style}>
			<div ref={ref} className='angle swing' />
		</div>
	);
};

const LoadingProcess = memo(() => {
	const [context, setContext] = useContext(Context);
	const data = context[ACTION.LoadingProcess];
	const [steps, setSteps] = useState(TRANSITION.unset);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);
	return (
		<OnloadProvider
			onload={() => {
				setSteps(TRANSITION.fadeIn);
			}}
		>
			<div className='LoadingProcess fixed top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-3'>
				<Background />
				<Angle data={data} setContext={setContext} steps={steps} />
				{data.body && <Text>{data.body}</Text>}
			</div>
		</OnloadProvider>
	);
});
export default LoadingProcess;
