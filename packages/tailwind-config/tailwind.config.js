const plugin = require('tailwindcss/plugin');

const flippingPlugin = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-y-0': {
			transform: 'rotateY(0deg)',
		},
		'.rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
		'.preserve-3d': {
			transformStyle: 'preserve-3d',
		},
		'.perspective': {
			perspective: '1000px',
		},
		'.backface-visible': {
			backfaceVisibility: 'visible',
		},
		'.backface-hidden': {
			backfaceVisibility: 'hidden',
		},
	});
});

const colors = {
	// system
	primary: '#6C3AF6',
	secondary: '#FF645A',

	// TODO: review
	primaryHover: '#9774F9',
	secondaryHover: '#FF938C',
	error: '#E14F46',

	// primary color variation (creators)
	primaryD1: '#402294',
	primaryD2: '#562EC6',
	primaryL1: '#7A4DF8',
	primaryL2: '#9774F9',
	primaryL3: '#B59CFB',
	primaryL4: '#DDD1FF',
	primaryL5: '#F4F0FF',
	primaryL6: '#F7F4FF',

	// secondary color variation (fans)
	secondaryD1: '#993C36',
	secondaryD2: '#CC5048',
	secondaryL1: '#FF746B',
	secondaryL2: '#FF938C',
	secondaryL3: '#FFB2AD',
	secondaryL4: '#FFD8D6',
	secondaryL5: '#FFE1DF',
	secondaryL6: '#FFF1F0',

	// other colors
	green: '#21D272',
	gold: '#F9AB2D',
	blue: '#1574BD',

	// dark shades
	black: '#000',
	gray1: '#4F5660',
	gray2: '#7B7B7B',
	gray3: '#858585',
	gray4: '#B0B7C3',

	// light shades
	white: '#fff',
	lightGray1: '#DEE1E5',
	lightGray2: '#F3F3F3',
	lightGray3: '#F9F9F9',
	lightGray4: '#FAFBFC',
	lightGray5: '#FBFBFB',

	// TODO: component - cleanup later and try to reuse colors from above list after align with designer
	sidebarTopBg: '#FBE9EE',
	sidebarBottomBg: '#DECCFF',
	collapseBg: '#FAF8FF',

	// ------------------ below is for dark theme
	// black shades
	black2: '#191A1D',
	black3: '#1D1F22',
	black4: '#272A30',
	black5: '#30353E',
	black6: '#3A404A',
};

module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			spacing: {
				pinMessageBar: '54px',
				footerMobile: '67px',
				mainSideBarMobile: '70px',
				mainSideBar: '80px',
			},
			screens: {
				mobile: { max: '767px' },
				'3xl': '1440px',
				'4xl': '1920px',
			},
			colors: colors,
			backgroundImage: {
				mobileFanHeader: 'linear-gradient(177.37deg, #FFD9D7 9.13%, #FF8D86 97.64%)',
				mobileCreatorHeader: 'linear-gradient(181.12deg, #CDB4FF -7.39%, #9F6FFF 99.04%)',
				mobileGeneralHeader:
					'linear-gradient(249.89deg, #FFE3E2 0.78%, #EFCAE1 13.74%, #D8B4F1 24.46%, #C2A0FD 61.11%, #C19FFF 144.2%)',

				mainSideBar: 'linear-gradient(180deg, #E9DDFF 0%, #FFF1F1 100%)',
				mainSideBarDark: 'linear-gradient(181.08deg, #402395 3.04%, #B15C56 46.94%, #333339 97.42%);',

				shopBtnHover: 'linear-gradient(98.14deg, #FF645A -10.47%, #6C3AF6 116.98%)',
				shopBtn: 'linear-gradient(99.4deg, #FF645A -6.97%, #E484DB 50.46%, #6C3AF6 105.28%)',

				chatBoxBg: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 66.67%)',
				uploadBtn: 'linear-gradient(99.4deg, #FF645A -6.97%, #E484DB 50.46%, #6C3AF6 105.28%)',
				chatBidSummaryBg:
					'radial-gradient(27.23% 140.57% at -1.53% 0%, rgba(188, 152, 255, 0.2) 0%, rgba(223, 170, 253, 0) 100%), linear-gradient(267.05deg, rgba(252, 167, 162, 0.142) 1.24%, rgba(255, 255, 255, 0) 21.8%), radial-gradient(60.85% 359.28% at 99.68% 97.67%, rgba(150, 95, 255, 0.2) 0%, rgba(242, 228, 249, 0.2) 52.47%, rgba(255, 255, 255, 0.2) 100%)',
				chatBidSummaryBgDark:
					'linear-gradient(97.72deg, rgba(108, 58, 246, 0.2) -2.89%, rgba(85, 0, 246, 0) 13.78%), radial-gradient(26.98% 233.18% at 93.54% 153.99%, rgba(150, 95, 255, 0.2) 0%, rgba(150, 95, 255, 0.07) 39.22%, rgba(150, 95, 255, 0.0145833) 89.09%), radial-gradient(35.02% 83.4% at 90.31% -30.04%, rgba(252, 167, 162, 0.2) 0%, rgba(82, 79, 79, 0.0751882) 62.41%, rgba(0, 0, 0, 0) 100%)',
				onboardBg:
					'radial-gradient(55.02% 34.81% at 38.3% 113.1%, rgba(251, 15, 0, 0.156) 0%, rgba(254, 79, 68, 0.002) 75.2%, rgba(255, 100, 90, 0) 99.48%), radial-gradient(79.51% 61.57% at 100% 123.75%, rgba(115, 64, 255, 0.2) 0%, rgba(173, 0, 255, 0.2) 43.93%, rgba(143, 51, 253, 0.028) 86%, rgba(152, 49, 255, 0) 100%), radial-gradient(50.91% 44.4% at 41.28% -25.23%, rgba(255, 100, 90, 0.2) 0%, rgba(255, 100, 90, 0.078125) 65.11%, rgba(255, 100, 90, 0) 100%), radial-gradient(67.03% 69.44% at 8.3% -30.09%, rgba(128, 0, 255, 0.2) 0%, rgba(123, 54, 255, 0) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
				onboardBgDark:
					'linear-gradient(0deg, rgba(251, 15, 0, 0.156) -51.44%, rgba(254, 79, 68, 0.002) 1.2%, rgba(255, 100, 90, 0) 18.2%), linear-gradient(360deg, rgba(115, 64, 255, 0.2) -85.32%, rgba(173, 0, 255, 0.2) -31.23%, rgba(143, 51, 253, 0.028) 20.58%, rgba(152, 49, 255, 0) 37.82%), linear-gradient(180deg, rgba(255, 100, 90, 0.2) -69.63%, rgba(255, 100, 90, 0.078125) -11.81%, rgba(255, 100, 90, 0) 19.17%), linear-gradient(180deg, rgba(128, 0, 255, 0.2) -99.54%, rgba(123, 54, 255, 0) 39.35%)',
				onboardCreatorBtnBg: "url('/src/resources/illustrations/onboardCreatorBtnBg.svg')",
				onboardFanBtnBg: "url('/src/resources/illustrations/onboardFanBtnBg.svg')",

				welcomeBg: "url('/src/resources/illustrations/welcomeBg.svg')",
				welcomeBgDark:
					'radial-gradient(88.84% 88.84% at 61.84% 77.87%, rgba(153, 60, 54, 0.6) 0%, rgba(153, 60, 54, 0) 100%), radial-gradient(98.38% 98.38% at 18.58% 103.75%, #993C36 0%, rgba(153, 60, 54, 0.411541) 44.35%, rgba(153, 60, 54, 0) 100%)',
				fanProfileBanner: 'linear-gradient(0deg, #FF9690 -8.11%, #FFF1F0 100%)',
				fanProfileBannerDark:
					'linear-gradient(290.1deg, rgba(164, 52, 47, 0.45) 17.87%, rgba(164, 52, 47, 0) 70.31%), linear-gradient(71.18deg, rgba(164, 52, 47, 0.45) 17.17%, rgba(164, 52, 47, 0) 67.16%)',
				fanSettingsBg:
					'radial-gradient(100% 100% at 17.99% 100%, #FF918A 0%, #F8F3F3 98.85%), linear-gradient(270.86deg, #FFBFBB -1.14%, rgba(255, 59, 47, 0.07) 76.54%)',
				creatorProfileBanner:
					'linear-gradient(242.8deg, rgba(159, 109, 255, 0.2) 4.01%, rgba(111, 43, 240, 0) 50.92%), linear-gradient(166.54deg, #DFCEFF 5.78%, #9E6BFF 94.53%)',
				creatorProfileBannerDark:
					'linear-gradient(275.08deg, rgba(108, 58, 246, 0.2) 5.98%, rgba(108, 58, 246, 0) 60.02%), linear-gradient(60.81deg, rgba(108, 58, 246, 0.5) 18.76%, rgba(108, 58, 246, 0) 90.2%)',
				creatorPublicProfileBanner:
					'linear-gradient(242.8deg, rgba(159, 109, 255, 0.2) 4.01%, rgba(111, 43, 240, 0) 50.92%), linear-gradient(166.54deg, #DFCEFF 5.78%, #9E6BFF 94.53%)',
				creatorPublicProfileBannerDark:
					'linear-gradient(274.4deg, rgba(108, 58, 246, 0.2) 28.44%, rgba(53, 17, 122, 0) 51.73%), linear-gradient(36.87deg, rgba(108, 58, 246, 0.6) -4.25%, rgba(53, 17, 122, 0) 113.29%)',
				fanPublicProfileBanner: 'linear-gradient(0deg, #FF9690 -8.11%, #FFF1F0 100%)',
				fanPublicProfileBannerDark:
					'linear-gradient(74.8deg, rgba(164, 52, 47, 0.35) 19.19%, rgba(153, 60, 54, 0) 68.02%), linear-gradient(302.76deg, rgba(165, 52, 47, 0.35) 17.38%, rgba(153, 60, 54, 0) 73.99%)',
				creatorUploadBg: "url('/src/resources/illustrations/creatorUploadBg.svg')",
				creatorSettingsBg: 'radial-gradient(94.37% 381.65% at 97.25% 93.92%, #D7C1FF 0%, rgba(125, 55, 255, 0.76) 100%)',
				channelBannerBg: "url('/src/resources/illustrations/channelBannerBg.svg')",
				loginWelcomeBannerBg: "url('/src/resources/illustrations/loginWelcomeBanner.svg')",
				loginWelcomeBannerBgDark: "url('/src/resources/illustrations/loginWelcomeBannerDark.svg')",
				channelBannerBgDark:
					'linear-gradient(337.15deg, rgba(220, 137, 161, 0.2) 66.88%, rgba(192, 192, 192, 0) 136.68%), linear-gradient(268.07deg, #E690A9 12.31%, #7147EF 44.59%, #7449EE 87.13%)',
				channelNoAccessBg: 'linear-gradient(130.65deg, #FFF7FF 0%, #FFF4FF 10.77%, #FFFDFD 30.44%, #FFFBFE 49.17%, #FFF0F0 84.74%)',
				videoPlayerBanner: "url('/src/resources/illustrations/videoPlayerBanner.svg')",
				multipleShopStepperBg:
					'linear-gradient(283.39deg, rgba(219, 213, 245, 0.2) 0.99%, rgba(236, 236, 253, 0.2) 31.54%),radial-gradient(46.01% 782.27% at 1.65% 100%, rgba(146, 117, 255, 0.2) 0%, rgba(244, 241, 251, 0.2) 100%)',
				multipleShopStepperBgDark:
					'linear-gradient(270deg, rgba(32, 32, 41, 0.2) -13.26%, rgba(60, 60, 102, 0.2) 59.13%), linear-gradient(283.39deg, rgba(29, 31, 34, 0.2) 0.99%, rgba(29, 31, 34, 0.2) 31.54%), radial-gradient(46.01% 782.27% at 1.65% 100%, rgba(122, 77, 248, 0.2) 0%, rgba(29, 31, 34, 0.2) 100%)',
				multipleShopStepperModalBg: 'linear-gradient(338.36deg, #FFFFFF 1.93%, #BAA6F8 298.1%)',
				saleBuyModalBg:
					'linear-gradient(359.03deg, rgba(202, 173, 255, 0.2) 0.65%, rgba(255, 255, 255, 0.2) 19.58%), linear-gradient(187.98deg, #E8D7FA 0.72%, #FFFFFF 93.85%)',
				saleBuyModalBgDark:
					'radial-gradient(73.11% 98.98% at 49.94% -29.53%, rgba(255, 100, 90, 0.2) 0%, rgba(32, 34, 37, 0.0281715) 85.52%, rgba(32, 34, 37, 0) 100%), radial-gradient(71.55% 71.55% at 24.56% -2.57%, rgba(150, 95, 255, 0.16) 0%, rgba(32, 34, 37, 0) 100%), radial-gradient(59.64% 39.12% at 47.97% 113.72%, rgba(255, 100, 90, 0.2) 0%, rgba(32, 34, 37, 0.07) 90.08%, rgba(32, 34, 37, 0) 100%), radial-gradient(100.23% 65.75% at 91.06% 100%, rgba(150, 95, 255, 0.22) 0%, rgba(32, 34, 37, 0.066) 84.42%, rgba(32, 34, 37, 0) 100%), linear-gradient(325.09deg, rgba(32, 34, 37, 0) 40.84%, rgba(32, 34, 37, 0.0352) 49.79%, rgba(108, 58, 246, 0.16) 106.11%)',
				createCollectableBg:
					'linear-gradient(130.65deg, #FFF7FF 0%, #FFF4FF 10.77%, #FFFDFD 30.44%, #FFFBFE 49.17%, #FFF0F0 84.74%)',
				createCollectableBgDark:
					'linear-gradient(110.96deg, rgba(97, 24, 236, 0.2) -2.5%, rgba(0, 0, 0, 0) 50.7%), radial-gradient(46.67% 56.65% at 34.15% -27.37%, rgba(255, 26, 12, 0.2) 0%, rgba(255, 59, 47, 0.110896) 58.64%, rgba(33, 35, 40, 0.074) 100%), radial-gradient(55.48% 56.89% at 65.92% 120.2%, rgba(108, 58, 246, 0.2) 0%, rgba(82, 50, 176, 0.2) 31.26%, rgba(65, 44, 128, 0.2) 56.82%, rgba(32, 34, 38, 0.2) 100%), radial-gradient(35.37% 39.88% at 113.53% 58.06%, rgba(255, 255, 255, 0) 0%, rgba(255, 148, 148, 0.108742) 15.1%, rgba(255, 0, 0, 0.26) 25.52%, rgba(33, 34, 40, 0.4) 100%)',
				createCollectableSuccessBg: "url('/src/resources/illustrations/createCollectableSuccessModalBg.svg')",
				createCollectableSuccessBgDark:
					'radial-gradient(95.45% 62.61% at 4.55% 113.83%, rgba(255, 100, 90, 0.13) 0%, rgba(32, 34, 37, 0.0455) 72.32%, rgba(32, 34, 37, 0) 100%), radial-gradient(95.45% 62.61% at 2.63% 100%, rgba(150, 95, 255, 0.16) 0%, rgba(32, 34, 37, 0.048) 86.09%, rgba(32, 34, 37, 0) 100%), linear-gradient(204.02deg, rgba(108, 58, 246, 0.16) 3.08%, rgba(32, 34, 37, 0.0352) 34.47%, rgba(32, 34, 37, 0) 48.26%)',
				heartLike: "url('/src/resources/img/heart.png')",
				soPrivateModuleBg: 'radial-gradient(64.41% 193.68% at 97.03% 100%, #936BFF 0%, #8E66FB 42.36%, #A281FD 100%);',
				becomeCreatorBannerBg:
					'linear-gradient(346.29deg, rgba(0, 0, 0, 0.2) 8.23%, rgba(0, 0, 0, 0) 63.53%), linear-gradient(96.55deg, rgba(48, 13, 150, 0.2) 44.58%, rgba(0, 0, 0, 0) 64.01%), linear-gradient(95.33deg, rgba(39, 20, 96, 0.2) 65.68%, rgba(1, 0, 5, 0.2) 77.44%), linear-gradient(267.28deg, rgba(214, 17, 88, 0.2) 0%, rgba(57, 32, 97, 0.2) 14.02%), linear-gradient(90.64deg, #574CA5 0%, #3B3292 33.78%)',
				becomeCreatorModalBg:
					'radial-gradient(54.62% 54.62% at -1.66% 45.38%, rgba(58, 32, 137, 0.2) 0%, rgba(54, 26, 124, 0.2) 100%), radial-gradient(72.92% 72.92% at 33.03% 22.45%, #3B3091 0%, rgba(59, 48, 145, 0) 100%), radial-gradient(34.44% 44.72% at 89.4% 73.21%, #221252 0%, #221251 100%)',
				bidModalBg:
					'radial-gradient(57.59% 42.06% at 13.35% 96.95%, rgba(158, 35, 255, 0.2) 0%, rgba(231, 184, 251, 0.0958333) 62.5%, rgba(231, 184, 251, 0) 100%), radial-gradient(75.57% 40.82% at 139.44% 9.01%, rgba(233, 95, 255, 0.3) 0%, rgba(190, 156, 255, 0.252) 32.29%, rgba(255, 255, 255, 0.3) 100%)',
				bidModalBgDark:
					'radial-gradient(95.45% 62.61% at 4.55% 113.83%, rgba(255, 100, 90, 0.13) 0%, rgba(32, 34, 37, 0.0455) 72.32%, rgba(32, 34, 37, 0) 100%), radial-gradient(95.45% 62.61% at 2.63% 100%, rgba(150, 95, 255, 0.16) 0%, rgba(32, 34, 37, 0.048) 86.09%, rgba(32, 34, 37, 0) 100%), linear-gradient(204.02deg, rgba(108, 58, 246, 0.16) 3.08%, rgba(32, 34, 37, 0.0352) 34.47%, rgba(32, 34, 37, 0) 48.26%)',
				successToastIconBg: 'linear-gradient(360deg, #AAEEC9 0%, #F5FDF9 124.63%)',
				errorToastIconBg: 'linear-gradient(180deg, #F9DBD9 0%, #F5BFBC 100%)',
				warningToastIconBg: 'linear-gradient(360deg, #FFDEAB 0%, #FDEED9 100%, #FDEED9 100%)',
				infoToastIconBg: 'linear-gradient(180deg, #C8DFF0 0%, #9CC5E3 100%)',
			},
			boxShadow: {
				'chatbox-shadow': '0px 0px 16px rgba(70, 83, 107, 0.1), 0px 2px 3px rgba(70, 83, 107, 0.1)',
				'chatbox-shadow-dark': '0px 0px 16px rgba(10, 12, 16, 0.1), 0px 2px 3px rgba(5, 6, 9, 0.1)',
				'image-shadow': '5px 5px 3px rgba(0, 0, 0, 0.12)',
				'scroll-shadow': '0 6px 4px -4px rgba(136, 134, 134, 0.5)',
			},
		},
		// border-xxx color need to be specified again to be effective
		borderColor: (theme) => ({
			...colors,
		}),
		fontFamily: {
			kanit: 'Kanit, sans-serif',
		},
		keyframes: {
			fadeIn: {
				from: {
					opacity: 0,
				},
				to: {
					opacity: 1,
				},
			},
			ping: {
				to: {
					transform: 'scale(1.8)',
					opacity: 0,
				},
			},
			shimmer: {
				'100%': {
					transform: 'translateX(100%)',
				},
			},
			slide: {
				'0%': {
					transform: 'translateX(100%)',
				},
			},
			pop: {
				'0%': {
					transform: 'translateY(100%)',
				},
			},
			zoomIn: {
				'0%': {
					transform: 'scale(1)',
				},
				'50%': {
					transform: 'scale(1.5)',
				},
				'100%': {
					transform: 'scale(1)',
				},
			},
			scale: {
				'0%': {
					scale: 0,
				},
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
			visibility: ['group-hover'],
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: colors.primary,
					'primary-hover': colors.primaryL2,
					'primary-focus': colors.primaryL2,
					'primary-content': '#fff',
					secondary: colors.secondary,
					'secondary-hover': colors.secondaryL2,
					'secondary-focus': colors.secondaryL2,
					'secondary-content': '#fff',
				},
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: colors.primaryL2,
					'primary-hover': colors.primaryL3,
					'primary-focus': colors.primaryL3,
					'primary-content': '#fff',
					secondary: colors.secondaryL2,
					'secondary-hover': colors.secondaryL3,
					'secondary-focus': colors.secondaryL3,
					'secondary-content': '#fff',
				},
			},
		],
	},
	plugins: [require('daisyui'), require('@tailwindcss/line-clamp'), flippingPlugin],
};
