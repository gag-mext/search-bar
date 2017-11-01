import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src';
import WingBlank  from '@gag/wing-blank';
import Button  from '@gag/button';
import WhiteSpace  from '@gag/white-space';
class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
  };
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<div>
      <WingBlank><div className="sub-title">普通</div></WingBlank>
      <SearchBar placeholder="搜索" />
      <WhiteSpace />
      <WingBlank><div className="sub-title">自动获取光标</div></WingBlank>
      <SearchBar placeholder="自动获取光标" autoFocus />
      <WhiteSpace />
      <WingBlank><div className="sub-title">手动获取获取光标</div></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
          type="primary"
        >点击获取光标</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><div className="sub-title">显示取消按钮</div></WingBlank>
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}

ReactDOM.render(<SearchBarExample />, document.getElementById('sk-root'));
