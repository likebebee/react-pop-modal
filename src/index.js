import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PopModal from './components/PopModal';

class BtnShowPop extends Component{
	constructor(props){
		super(props);
		this.handlePopBtn = this.handlePopBtn.bind(this);
		this.state = {
			showPop: false,
			popBody: <h2>hello,pop!</h2>
		}
	}

	handlePopBtn(){
		this.setState({
			showPop: !this.state.showPop
		})
	}

	render() {
		return (<div>
				<button onClick={this.handlePopBtn}>弹窗</button>
				<PopModal title="我的弹窗" 
						  body={this.state.popBody} 
						  show={this.state.showPop}
						  onClose={this.handlePopBtn}
				/>
				</div>);
	}
}

ReactDom.render(
	<BtnShowPop />,
	document.getElementById("root")
)