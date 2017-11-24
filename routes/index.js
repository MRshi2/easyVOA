var express = require('express');
var router = express.Router();


router.get('/api/header.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"list":[{
			"id":1,
			"title":"大家说英语",
			"url":"/list/1"
		},{
			"id":2,
			"title":"空中英语教室",
			"url":"/list/2"
		},{
			"id":3,
			"title":"彭蒙惠英语",
			"url":"/list/3"
		},{
			"id":4,
			"title":"科学美国人",
			"url":"/list/4"
		},{
			"id":5,
			"title":"冬吴相对论",
			"url":"/list/5"
		},{
			"id":6,
			"title":"走遍美国",
			"url":"/list/6"
		},{
			"id":7,
			"title":"英文名著",
			"url":"/list/7"
		},{
			"id":8,
			"title":"托福考试",
			"url":"/list/8"
		},{
			"id":9,
			"title":"美国脱口秀",
			"url":"/list/9"
		},{
			"id":10,
			"title":"BBC听力资料",
			"url":"/list/10"
		},{
			"id":11,
			"title":"外教课堂",
			"url":"/list/11"
		}],
	
	
		"lenglish":[{
			"id":1,
			"title":"音频",
			"url":"/list/1"
		},{
			"id":2,
			"title":"视频",
			"url":"/list/2"
		},{
			"id":3,
			"title":"翻译",
			"url":"/list/3"
		}],
		
		
		"senglish":[{
			"id":1,
			"title":"科技报道",
			"url":"/list/1"
		},{
			"id":2,
			"title":"词汇掌故",
			"url":"/list/2"
		},{
			"id":3,
			"title":"美国故事",
			"url":"/list/3"
		},{
			"id":4,
			"title":"时事新闻",
			"url":"/list/4"
		},{
			"id":5,
			"title":"经济报道",
			"url":"/list/5"
		},{
			"id":6,
			"title":"建国史话",
			"url":"/list/6"
		},{
			"id":7,
			"title":"教育报道",
			"url":"/list/7"
		},{
			"id":8,
			"title":"自然探索",
			"url":"/list/8"
		},{
			"id":9,
			"title":"健康报道",
			"url":"/list/9"
		},{
			"id":10,
			"title":"美国万花筒",
			"url":"/list/10"
		},{
			"id":11,
			"title":"科学动态",
			"url":"/list/11"
		},{
			"id":12,
			"title":"农业报道",
			"url":"/list/12"
		},{
			"id":13,
			"title":"美国专栏",
			"url":"/list/13"
		},{
			"id":14,
			"title":"美国人物",
			"url":"/list/14"
		}],
		
		"tenglish":[{
			"id":1,
			"title":"流行美语",
			"url":"/list/1"
		},{
			"id":2,
			"title":"英语三级跳",
			"url":"/list/2"
		},{
			"id":3,
			"title":"美国习惯用语",
			"url":"/list/3"
		},{
			"id":4,
			"title":"学个词",
			"url":"/list/4"
		},{
			"id":5,
			"title":"AS IT IS",
			"url":"/list/5"
		},{
			"id":6,
			"title":"体育美语",
			"url":"/list/6"
		},{
			"id":7,
			"title":"美语怎么说",
			"url":"/list/7"
		},{
			"id":8,
			"title":"商务礼节美语",
			"url":"/list/8"
		},{
			"id":9,
			"title":"双语新闻",
			"url":"/list/9"
		},{
			"id":10,
			"title":"美语咖啡屋",
			"url":"/list/10"
		},{
			"id":11,
			"title":"中级美语",
			"url":"/list/11"
		},{
			"id":12,
			"title":"美语训练班",
			"url":"/list/12"
		},{
			"id":13,
			"title":"VOA每日一课",
			"url":"/list/13"
		},{
			"id":14,
			"title":"OMG美语",
			"url":"/list/14"
		},{
			"id":15,
			"title":"VOA相关资料",
			"url":"/list/15"
		}]
	}
})
});


router.get('/api/index.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"content":[{
			"id":1,
			"title":"暖湾",
			"text":"宠物鱼品牌推广～",
			"time":"2017-11-17",
			"url":"/detail/1"
		},{
			"id":2,
			"title":"空中英语教室",
			"text":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
			"time":"2017-11-17",
			"url":"/detail/2"
		},{
			"id":3,
			"title":"AS IT IS",
			"text":"Leonardo da Vinci Painting Sells for Record $450 Million",
			"time":"2017-11-17",
			"url":"/detail/3"
		},{
			"id":4,
			"title":"AS IT IS",
			"text":"Small Montana City Elects Former Refugee as Mayor",
			"time":"2017-11-17",
			"url":"/detail/4"
		},{
			"id":5,
			"title":"AS IT IS",
			"text":"Small Indian Hindus Attacking Muslims, Stealing Their Cows",
			"time":"2017-11-17",
			"url":"/detail/5"
		},{
			"id":6,
			"title":"VOA常速英语",
			"text":"Clearing Explosive Remnants of War in the West Bank",
			"time":"2017-11-17",
			"url":"/detail/6"
		},{
			"id":7,
			"title":"AS IT IS",
			"text":"Japan Seeks to Expand Influence in Southeast Asia",
			"time":"2017-11-16",
			"url":"/detail/7"
		},{
			"id":8,
			"title":"科技报道",
			"text":"Distant Star Refuses to Die",
			"time":"2017-11-16",
			"url":"/detail/8"
		},{
			"id":9,
			"title":"科技报道",
			"text":"5 Reasons to Try Firefox ‘Quantum’ Browser",
			"time":"2017-11-16",
			"url":"/detail/9"
		},{
			"id":10,
			"title":"VOA常速英语",
			"text":"President Trump at ASEAN Summit",
			"time":"2017-11-16",
			"url":"/detail/10"
		},{
			"id":11,
			"title":"VOA常速英语",
			"text":"U.S. Supports Safe Return of Rohingya to Burma",
			"time":"2017-11-16",
			"url":"/detail/11"
		},{
			"id":12,
			"title":"AS IT IS",
			"text":"Richard Nixon: Resigned",
			"time":"2017-11-13",
			"url":"/detail/12"
		},{
			"id":13,
			"title":"AS IT IS",
			"text":"Many North Koreans Depend on Informal Markets",
			"time":"2017-11-13",
			"url":"/detail/13"
		},{
			"id":14,
			"title":"AS IT IS",
			"text":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
			"time":"2017-11-13",
			"url":"/detail/14"
		},{
			"id":15,
			"title":"科技报道",
			"text":"New Orangutan Species Discovered in Indonesia",
			"time":"2017-11-13",
			"url":"/detail/15"
		},{
			"id":16,
			"title":"AS IT IS",
			"text":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
			"time":"2017-11-07",
			"url":"/detail/16"
		},{
			"id":17,
			"title":"AS IT IS",
			"text":"Saudi Crown Prince Detains Opponents, Expands Power",
			"time":"2017-11-07",
			"url":"/detail/17"
		},{
			"id":18,
			"title":"健康报道",
			"text":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
			"time":"2017-11-07",
			"url":"/detail/18"
		},{
			"id":19,
			"title":"AS IT IS",
			"text":"Vietnam Tech Startups Seek Next Step Forward",
			"time":"2017-11-06",
			"url":"/detail/19"
		},{
			"id":20,
			"title":"AS IT IS",
			"text":"Lyndon Johnson: Complicated",
			"time":"2017-11-06",
			"url":"/detail/20"
		},{
			"id":21,
			"title":"AS IT IS",
			"text":"Saudi Arabia Is First Country to Give Citizenship to Robot",
			"time":"2017-11-06",
			"url":"/detail/21"
		}],
		"footnav":[{
			"id":1,
			"content":"小马过河"
		},{
			"id":2,
			"content":"雅思培训"
		},{
			"id":3,
			"content":"留学机构"
		},{
			"id":4,
			"content":"出国语言培训"
		},{
			"id":5,
			"content":"大学生"
		},{
			"id":6,
			"content":"人人听力网"
		},{
			"id":7,
			"content":"英语口语"
		},{
			"id":8,
			"content":"英文小说网"
		},{
			"id":9,
			"content":"口译"
		},{
			"id":10,
			"content":"美国之音"
		},{
			"id":11,
			"content":"给力英语网"
		},{
			"id":12,
			"content":"中小学教育"
		},{
			"id":13,
			"content":"翻译资格考试"
		},{
			"id":14,
			"content":"GCT"
		}]
	}
})
});


router.get('/api/list.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"list":[{
			"id":1,
			"content":"Salty Skin Boosts Mouse Wound Healing",
			"time":"2015-03-10"
		},{
			"id":2,
			"content":"Whale Grandmas' Longevity Linked to Knowledge",
			"time":"2015-03-10"
		},{
			"id":3,
			"content":"Titan Could Host Life 'Not As We Know It'",
			"time":"2015-03-09"
		},{
			"id":4,
			"content":"Climate Skeptic Senator Burned After Snowball Stunt",
			"time":"2015-03-09"
		},{
			"id":5,
			"content":"Contact Lens Binoculars Are In Sight",
			"time":"2015-03-06"
		},{
			"id":6,
			"content":"Pot Munchies Explained By Re-Tasked Neurons",
			"time":"2015-03-06"
		}]
	}
}
)
});


router.get('/api/detail.json', function(req, res, next) {
  res.json({
	"ret": true,
	"data": {
		"detail": {
			"title": req.query.id + "Leonardo da Vinci Painting Sells for Record $450 Million",
			"content": "<div class='detail-left-main-words'><span>点击即可启用 Adobe Flash Player</span><span>下载音频</span><p>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p>The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.</p><p>Before Wednesday, the highest-known sale price for any artwork had been $300 million for Willem de Kooning’s painting “Interchange.” Businessman Kenneth C. Griffin bought it in a private sale in 2015.</p><div class='detail-left-main-words-img'><img src='http://www.easyvoa.com/uploads/allimg/171117/1H91V549-0.jpg'/></div><div class='detail-left-main-words-words'><p>A Pablo Picasso’s painting “Les femmes D’Alger” held the previous record for artwork sold at auction. It was sold in 2015 for over $179 million.</p><p>The sale of the da Vinci painting took place at Christie’s auction house in New York City. Bidding for the piece opened at $75 million. The bidding lasted 19 minutes.</p></div></div><div class='detail-left-main-img'><img src='https://tpc.googlesyndication.com/simgad/14014558693765152622'/></div><p>People inside Christie’s cheered as the hammer came down to mark the end of bidding. The record sale price includes money that the unnamed winner must pay to the auction house.</p><p>Jussi Pylkkänen was the auctioneer and is Global president of Christie's. He told the Reuters news agency, “It was a moment when all the stars were aligned, and I think Leonardo would be very pleased.”</p><p>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p>The painting was in a private collection of King Charles I of England. It disappeared from view until 1900, when a British collector bought it. At that time, it was thought to have been painted by a student of Leonardo rather than the master himself.</p><p>In 2005, a group of art dealers paid less than $10,000 for the artwork. It was badly damaged and partly painted over. They restored the work and proved that the painting was done by Leonardo da Vinci himself.</p><p>Russian billionaire Dmitry Rybolovlev bought the restored painting in 2013 for $127.5 million.</p><p>Christie’s said most experts agree the painting is a work of Leonardo da Vinci. But critics say the restoration of the piece affects the work’s authorship.</p><p>I'm Caty Weaver.</p><p>Hai Do adapted this story for Learning English based on Reuters and Associated Press news reports. Ashley Thompson was the editor.</p>",
			"img":"<img src='https://tpc.googlesyndication.com/simgad/13143424205018353333'/>"
			
		}
	}
}
)
});
module.exports = router;
