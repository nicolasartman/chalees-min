
const TimerOverlay = React.createClass({
  render: function () {
    return (
      <div>
        <div style={{position: 'relative'}}>
          {this.props.show ? <div className="timer-overlay" onClick={this.props.startClick}>
                                      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>{this.props.label}</div>
                                    </div> : null}
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default TimerOverlay;
