import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: "正在加载中...",
			content: "正在加载中...",
			img: "正在加载中..."
		}
		this.handelGetInfoSucc = this.handelGetInfoSucc.bind(this);
		
	}
	
	render(){
	 	return (
	 		<div className="detail">
	 			<div className="detail-left">
	 				<div className="detail-left-banner">
						<a href="http://www.easyvoa.com/">VOA</a> &gt;
						<a href="/voa-english-learning/index.html">VOA英语教学</a> &gt;
						<a href="/AS_IT_IS/index.html">AS IT IS</a> &gt;
	 				</div>
	 				<div className="detail-left-title">
	 					<h1>{this.state.title}</h1>
	 					<p>
	 						<span>时间 : 2017-11-17 06:26</span>
	 						<span>来源 : VOA官网</span>
	 						<span>收听下载次数 : 106次</span>
	 					</p>
	 				</div>
	 				<div className="detail-left-main" dangerouslySetInnerHTML={{__html: this.state.content}}>
	 				
	 				</div>
	 				
	 			</div>
	 			
	 			<div className="detail-right" ref={(aside) => { this.aside = aside }} dangerouslySetInnerHTML={{__html: this.state.img}}>
	 				
	 				</div>
	 		</div>
	 		)
	 }
	
	componentDidMount(){
		this.getDetailInfo();
		window.addEventListener('scroll', this.orderScroll);
	}
	
	getDetailInfo(){
		const id = this.props.params.id;
		axios.get("/api/detail.json?id=" + id)
		.then(this.handelGetInfoSucc);
	}
	
	orderScroll(e){
		console.log(123);
	}
	
	handelGetInfoSucc(response){
		
		const {detail} = response.data.data;
		this.setState({
			title: detail.title,
			content: detail.content,
			img: detail.img
		})
		
	}
	
}


