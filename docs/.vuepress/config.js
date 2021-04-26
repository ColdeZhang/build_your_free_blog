module.exports = {
	title: '这个是大标题',					// 大标题与导航栏主页按钮文字
	description: '这个是副标题',			// 副标题
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		author: "你希望展示的作者名",		// 全局作者设置
		mode: 'auto',
		nodePicker: true,
		base: './',
		subSidebar: 'auto',	
		noFoundPageByTencent: false,
		authorAvatar: 'your_image_url',		// 作者头像
		valineConfig: {						// 留言板服务器id配置
			appId: 'your_Id',
			appKey: 'your_key', 
		},
		blogConfig: {
			category: {
				icon: 'reco-category',
				location: 1,
				text: '分类'
			},
			tag: {
				icon: 'reco-tag',
				location: 2,
				text: '标签'
				},
			socialLinks: [
				// 个人信息下方社交链接设置（不需要的话可以删除）
				{ icon: 'reco-github', link: 'your_url' },
				{ icon: 'reco-bilibili', link: 'your_url' },
				{ icon: 'reco-zhihu', link: 'your_url' },
				{ icon: 'reco-qq', link: 'your_url' }
			]
		},
		nav: [
			{ text: '时间轴', link: '/timeline/', icon: 'reco-date' },
			{ text: '留言板', link: '/suggestion/', icon: 'reco-suggestion' }
		],
		smoothScroll: true,
		lastUpdated: '最后修改于'
	},
	plugins: [
		'flowchart'
	],
	markdown: {
		lineNumbers: true
	},
}
