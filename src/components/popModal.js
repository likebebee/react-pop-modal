/*
*弹窗组件
*配置属性: title弹窗标题，
*show弹窗显示隐藏状态，
*onClose设置弹窗显示隐藏状态的函数
*body弹窗主体内容
*使用示例：
*<PopModal title="我的弹窗" 
	body={this.state.popBody} 
	show={this.state.showPop}  //必需
	onClose={this.handlePopBtn}  //必需
/>
*
*/
import React ,{Component} from 'react';
import './pop.less';

class CloseBtn extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.onClose();
	}

	render(){
		return <a onClick={this.handleClick}><img src=".\/src\/components\/inclose.png" /></a>;
	}
}

class PopModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
					<div className="shadow" style={{display:this.props.show?'block':'none'}}></div>
					<div className="pop-modal" style={{display:this.props.show?'block':'none'}}>
						<div className="pop-title clearfix">
							<h2>{this.props.title||'弹窗'}</h2>
							<CloseBtn onClose={this.props.onClose} />
						</div>
						<div className="pop-body">
							{this.props.body}
						</div>
					</div>
				</div>
	}
}

export default PopModal;