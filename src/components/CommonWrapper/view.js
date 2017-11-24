import React, {Component} from 'react';
import { Link } from 'react-router';
import './style.css';
import axios from 'axios';


export default class CommonWrapper extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			list:[],
			lenglish:[],
			senglish:[],
			tenglish:[],
			isPlaying: false
		}
		this.handleGetHeaderDataSucc = this.handleGetHeaderDataSucc.bind(this);
		this.orderClick = this.orderClick.bind(this);
	}
	
	 render(){
	 	return(
	 	<div className="wrapper">
	 		<div className="wrapper-top">
	 				<ul className="wrapper-top-nav">
	 					<li>网站手机版</li>
	 					<li>学英语请加微信号:easyvoa2014</li>
	 					<li><input type="text"/></li>
	 					<li>搜索</li>
	 				</ul>
	 				<div className="wrapper-top-music">
	 				<span className="iconfont icon-bofang" id="music" ref={(music) => { this.music = music }} title="点击播放美国之声">
	 				</span>
	 				<span id="playRangeLong">
	 					<span id="playRange"></span>
	 				</span>
	 				<span id="playTime"></span>
	 					<audio id="audio" ref={(audioli) => { this.audioli = audioli}} title="点击播放美国之声"  src={require('../../statics/audio/2.m4a')}></audio>
	 				</div>
	 			</div>
	 			
	 		<div className="wrapper-list">
	 			<div className="wrapper-list-logo">
	 			<Link to='/'>
	 				<img src={require('../../statics/imgs/logo.png')} title="EasyVOA美国之音官方网站" alt="VOA在线学习"/>
	 			</Link>
	 			</div>
	 			
	 			<div className="wrapper-list-right">
	 				<ul>
	 					{
	 						this.state.list.map((item, index) => {
	 							return(
	 								
	 								<li key={item.id}>
	 								<Link to={item.url}>{item.title}</Link>
	 								</li>
	 								
	 								)
	 						})
	 					}
	 				</ul>
	 			</div>
	 		</div>
	 		
	 		
	 		<div className="wrapper-label">
	 			<div className="wrapper-label-left">
	 				<h2>常速英语</h2>
	 				<ul>
	 					{
	 						this.state.lenglish.map((item, index) => {
	 							return<li key={item.id}>{item.title}</li>
	 						})
	 					}
	 				</ul>
	 			</div>
	 			<div className="wrapper-label-center">
	 				<h2>慢速英语(中级)</h2>
	 				<ul>
	 					{
	 						this.state.senglish.map((item, index) => {
	 							return<li key={item.id}>{item.title}</li>
	 						})
	 					}
	 				</ul>
	 			</div>
	 			<div className="wrapper-label-right">
	 				<h2>英语教学(初级)</h2>
	 				<ul>
	 					{
	 						this.state.tenglish.map((item, index) => {
	 							return<li key={item.id}>{item.title}</li>
	 						})
	 					}
	 				</ul>
	 			</div>
	 		</div>
	 		
	 		<div className="wrapper-hottags">
	 			<h4>热门标签:</h4>
	 			<span>VOA常速英语</span>
	 			<span>VOA慢速英语</span>
	 			<span>VOA快速英语</span>
	 		</div>
	 		
	 			
	 		<div>
				{this.props.children}
			</div>
	 		
	 		
	 		<div className="wrapper-footer">
	 			<p>本网站由 <a href="http://www.easyvoa.com"><strong>EasyVOA</strong></a> 开发上线 © 2011-2014   <a href="http://m.easyvoa.com">手机版EasyVOA</a></p>
	 			<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
	 			<p>
	 				<img src={require('../../statics/imgs/footer.gif')} title="51.La 网站流量统计系统" alt="VOA在线学习"/>
	 				<img className="wrapper-footer-adobe" src={require('../../statics/imgs/adobe.png')} title="51.La 网站流量统计系统" alt="VOA在线学习"/>
	 			</p>
	 		</div>
	 		
	 		
	 	</div>
	 	)
	 }
	 
	componentDidMount(){
	 	axios.get('/api/header.json').then(this.handleGetHeaderDataSucc);
	 	this.music.addEventListener("click", this.orderClick);
	 	this.audioli.addEventListener("canplay", this.orderTime.bind(this));
	 	this.audioli.addEventListener("timeupdate", this.orderUpdateTime.bind(this));
	 }
	
	orderClick(e){
	  var music = document.querySelector("#music"),
			audio = document.querySelector("#audio"),
			playRange = document.querySelector("#playRange"),
			oldclass = music.getAttribute("class");
			if (this.state.isPlaying) {
				audio.pause();
				var newmusic = oldclass.replace("icon-zanting", "icon-bofang");
				music.setAttribute("class", newmusic);
				
			}else{
				audio.play();
				var i=0,max=90;
				function fn(){
				i++;
				if(i===max){
					clearInterval(timer);
				}
				playRange.style.width=i+"px";
			}
				var timer = setInterval(fn, 2000);
				newmusic = oldclass.replace("icon-bofang", "icon-zanting");
				music.setAttribute("class", newmusic);
		}
			this.state.isPlaying = !this.state.isPlaying;
			
			
	}
	
	orderTime(e){
		var playTime = document.querySelector("#playTime"),
			 audio = document.querySelector("#audio"),
			 second1 = Math.floor(audio.currentTime % 60).toFixed (2),
			 minute2 = Math.floor (audio.duration / 60),
			 second2 = Math.floor(audio.duration % 60);
			 playTime.innerHTML = second1 + ' / ' + minute2+':'+second2;
			  
	}
	
	orderUpdateTime(e){
		var playTime = document.querySelector("#playTime"),
			audio = document.querySelector("#audio"),
			
			 minute1 = Math.floor (audio.currentTime / 60),
			 second1 = Math.floor(audio.currentTime % 60),
			 minute2 = Math.floor (audio.duration / 60),
			 second2 = Math.floor(audio.duration % 60);
			 if(second1<10){
			 	second1 = "0" + second1;
			 }
			playTime.innerHTML = minute1+':'+second1 + ' / ' + minute2+':'+second2;
				

	}
	
	
	
	 handleGetHeaderDataSucc(response){
	 	const {list, lenglish, senglish, tenglish} = response.data.data;
	 	this.setState({
	 		list: list,
	 		lenglish: lenglish,
	 		senglish: senglish,
	 		tenglish: tenglish
	 	})
	 }
}
