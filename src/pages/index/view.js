import React, {Component} from 'react';
import { Link } from 'react-router';
import '../../statics/icon/iconfont.css';
import './style.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getIndexAction } from './actionCreator';
import Swiper from 'swiper';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const IScroll = require('../../statics/iscroll/iscroll-probe.js');
class Index extends Component{
	 
	 render(){
	 	const repeat = this.props.content.map((item, index) => {
	 						return (<li key={item.id}>
	 						<Link to={item.url}>
	 							<span>[ {item.title} ]</span>
	 							<span>{item.text}</span>
	 							<span>( {item.time} )</span>
	 						</Link>
	 						</li>)
	 					})
	 	
	 	const footnavRepeat = this.props.footnav.map((item, index2) => {
							return(
								<li key={item.id}>
									<a>{item.content}</a>
								</li>
							)
						})
	 	
	 	return(
	 	<div className="index">
	 	<div className="swiper-container">
				    <div className="swiper-wrapper" ref={(wrapper)=>{this.wrapper=wrapper}} >
				      <div className="swiper-slide"><img src={require('../../statics/imgs/1.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				      <div className="swiper-slide"><img src={require('../../statics/imgs/8.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				      <div className="swiper-slide"><img src={require('../../statics/imgs/3.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				      <div className="swiper-slide"><img src={require('../../statics/imgs/4.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				      <div className="swiper-slide"><img src={require('../../statics/imgs/5.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				      <div className="swiper-slide"><img src={require('../../statics/imgs/6.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/></div>
				    </div>
				    <div className="swiper-pagination"></div>
    
				    <div className="swiper-button-prev swiperButton1 ref={(dispare)=>{this.dispare=dispare}} swiper-button-white"></div>
				    <div className="swiper-button-next swiperButton2 ref={(dispare)=>{this.dispare=dispare}} swiper-button-white"></div>
    
	 			</div>
	 		<div className="index-content">
	 			<h1>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h1>
	 			<div className="index-content-left">
	 				<div id="scrolled" ref={(scroller)=>{this.scroller=scroller}}>
		 				<div id="scroller">
		 				<div className="index-content-left-top" ref={(scrollertop)=>{this.scrollertop=scrollertop}}>数据刷新中...</div>
				 			<ul>
				 				{	
				 					repeat
				 				}
				 				{	
				 					repeat
				 				}
				 				{	
				 					repeat
				 				}
				 				{	
				 					repeat
				 				}
			 				</ul>
		 				</div>
		 			</div>
	 			</div>
	 			<div id="main" className="index-content-right">
	 				
	 			</div>
	 			
	 		</div>
	 		
	 		<div className="index-fixleft">
	 			<img src={require('../../statics/imgs/weixin.jpg')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/>
	 		</div>
	 		
	 		
	 		<div className="index-friends">
	 			<h2>VOA友情链接</h2>
	 			<ul>
					{
						footnavRepeat
					}
					{
						footnavRepeat
					}
					
				</ul>
	 		</div>
	 		
	 	</div>
	 	)
	 }
	 componentDidUpdate(){
	 	this.myScroll = new IScroll('#scrolled', { mouseWheel: true });
	 	this.myScroll.on("scroll", ()=>{
	 		if(this.myScroll.y>=10){
	 			
	 		}
	 		
	 	});
	 }
	 componentDidMount(){
	 	var myChart = echarts.init(document.getElementById('main'));
	 	this.myScroll = new IScroll('#scrolled', { mouseWheel: true });
	 	console.log(1);
	 	this.myScroll.on("scroll", ()=>{
	 			console.log(2);
	 		if(this.myScroll.y>=10){
	 			console.log(3);
	 		}
	 			console.log(4);
	 	});
	 			console.log(5);
		myChart.setOption({
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {           
		            type : 'shadow'        
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 200, 334, 390, 330, 220]
		        }
		    ]
		});

	 	
	 	if(!this.props.content.length){
	 		this.getIndexData();
	 	}
	 	new Swiper('.swiper-container', {
	 		effect : 'fade',
		    spaceBetween: 30,
		    centeredSlides: true,
		    autoplay: {
		    delay: 2500,
		    },
		    navigation: {
		    nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
    		hideOnClick: true,
    		
    		hiddenClass: 'my-button-hidden',
		  },
		  pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		    clickable :true,
		  },
		});
		
		this.wrapper.addEventListener("mouseenter", this.allowwrapper.bind(this));
		this.wrapper.addEventListener("mouseleave", this.allownowrapper.bind(this));
	 }
	
	allowwrapper(e){
		const swiperButton1 = document.querySelector(".swiperButton1");
		const swiperButton2 = document.querySelector(".swiperButton2");
		swiperButton1.style.display = "block";
		swiperButton2.style.display = "block";
	}
	allownowrapper(e){
		const swiperButton1 = document.querySelector(".swiperButton1");
		const swiperButton2 = document.querySelector(".swiperButton2");
		swiperButton1.style.display = "none";
		swiperButton2.style.display = "none";
	}
	
	getIndexData(){
		axios.get('/api/index.json').then(this.props.handleGetIndexDataSucc.bind(this));
	}
	
}

const mapStateToProps = (state) => ({
	content: state.index.content,
	footnav: state.index.footnav
})

const mapDispatchToProps = (dispatch) => ({
	handleGetIndexDataSucc: (response) => {
		const {content, footnav} = response.data.data;
	 	dispatch(getIndexAction(content, footnav));
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Index);
