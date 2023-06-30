/* eslint-disable max-len */
import { memo, useEffect, useState } from 'react';
import Blockquote from '../../components/blockquote';
import Body from '../../components/body';
import Container from '../../components/container';
import Header from '../../components/header';
import Section from '../../components/section';
import { LandingContext, LandingSteps } from './config';
import './index.less';
import Collapse from '../../components/collapse';
import { AudioPlayer } from './misc';

const Landing = memo(() => {
	const value = useState(LandingSteps);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const resize = () => {
			const { innerWidth } = window;
			if (innerWidth <= 768) setWidth(0);
			else if (innerWidth > 768 && innerWidth <= 1024) setWidth(1);
			else if (innerWidth > 1024) setWidth(2);
			else setWidth(3);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<LandingContext.Provider value={value}>
			<div className='Landing'>
				<Container>
					<Header />
					<Body>
						<Section>
							<Collapse height={['200px', '259px', '200px', '200px'][width]}>
								<p>
									在台灣奧美，Ogilvy
									#Pride2023不僅是一種價值觀的展示，更有別於其他辦公室的是，我們用2支影片真真實實地參與了『婚姻平權法』這場運動，甚至扮演了推波助瀾的角色。
								</p>
								<p>
									2019/5/24
									立法院三讀通過同性婚姻合法，台灣成為亞洲第1個、世界第27個實行同性婚姻的國家的前5年，2014的10月，我們為伊莎貝爾結婚喜餅策劃的『他他』篇正式上映。
								</p>
								<p>
									這在當時的社會氛圍，無疑是一個大膽的舉動，從來沒有一個商業品牌敢直接對婚姻平權公開表態，而原本一支單純的商業廣告（當然也不是），卻像朝著平靜無波的湖面丟下一塊石頭，激起了一圈又一圈的漣漪，直到不斷擴大成無法忽視的浪潮。隨著網路上湧起的言論、隨著正反兩方從互不對話到互相叫囂、隨著衛道人士直接打爆伊莎貝爾的總機威脅停播、隨著PTT發起『一人一信救他他』鼓勵伊莎貝爾繼續播放，所有的社會力量，所有的網路聲音，都在進行一場前所未有的思想攻防。他他篇讓同性婚姻議題浮上檯面，大眾越激辯，此議題越難以迴避，也為之後的合法化做暖身。
								</p>
								<p>
									這一切當然不是無心插柳，而是信念、直覺與膽識的綜合成果，但成就這些結果的關鍵在於：一個勇敢的客戶。We’re
									nothing without brave clients，以前是、現在是、未來也是如此。
								</p>
							</Collapse>
							<Blockquote>#LovelsLove</Blockquote>
							<Collapse height={['419px', '439px', '372px', '372px'][width]}>
								<h1>他他篇</h1>
								<p>
									『愛不是花一天時間在海邊山上穿著白紗跑來跑去,愛是三十年。』 -Quote from 2014/10/3
									他他篇YouTube 網友留言-
								</p>
								<p>
									前來試鏡的同志伴侶不乏年輕俊俏的組合，最終，我們選擇了王天明與何祥，他們從年輕到頭髮灰白，從贏得家庭（其中一人有妻兒）諒解、接納一戰，接續要贏得社會支持，法律保障這一戰，他們用30年青春歲月和相互扶持去證明一件事：愛是生而為人的權利，不是哪個性別的特權。每一對相愛的人都是ㄧ樣的，都有永結同心成為眷屬的想望。我們無須加工任何情感，只需將他們尋常的一天流水帳似的展露在大眾眼前，就已足夠。
								</p>
								<p>
									影片造成的炫風，讓王天明、何祥成為之後同性平權婚姻活動指標性人物。2015年，他們寄來伊莎貝爾喜餅，從影片到真實世界，他們宣告：我們結婚了。
								</p>
								<p>
									（影片傳播期間，意外收到音樂創作人Emily
									Blumenthal留言感謝，因為一下子有太多人到itunes下載這首主題曲）
								</p>
								<div
									className='player'
									dangerouslySetInnerHTML={{ __html: AudioPlayer('music1.mp3') }}
								/>
								<div className='ytPlayer'>
									<iframe
										width='560'
										height='315'
										src='https://www.youtube.com/embed/wSlXra0fJuU?controls=0'
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowFullScreen
									/>
								</div>
							</Collapse>
							<Collapse height={['419px', '439px', '344px', '344px'][width]}>
								<h1>彩虹蛋糕</h1>
								<p>
									#LoveWins
									<br />
									#用愛擁抱恨
								</p>
								<p>
									此片預算為0，從發想到上片時間為9天，趕在2016/12/26立法院將排審婚姻平權法案，也就是全台灣社會對婚姻平權法案敵對撕裂言論升到最高點的前3天，12/23凌晨4點上片。
									<br />
									上線隔日募資到40萬左右的媒體贊助費，全數用於本片網路媒體擴散上。影片參與全為真實同志伴侶，其中一組為本公司已離職策略部同事。彩虹蛋糕由左道咖啡館免費製作提供。
								</p>
								<div
									className='player'
									dangerouslySetInnerHTML={{ __html: AudioPlayer('music2.mp3') }}
								/>
								<div className='ytPlayer'>
									<iframe
										width='560'
										height='315'
										src='https://www.youtube.com/embed/O1gh0ieTsws?controls=0'
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowFullScreen
									/>
								</div>
							</Collapse>
							<Blockquote>#LGBTQRights</Blockquote>
						</Section>
					</Body>
				</Container>
			</div>
		</LandingContext.Provider>
	);
});
export default Landing;
