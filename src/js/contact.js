const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Contact = React.createClass({
  getInitialState: function() {
    return {
      items: ['/backgrounds/beach.png', '/backgrounds/field.png', '/backgrounds/market.png', '/backgrounds/railroad.png', '/backgrounds/water.png'],
      current: 0,
      intervalId: null
    }
  },
  componentWillMount: function() {
    this.state.intervalId = setInterval(function() {
      this.setState({current: (this.state.current + 1) % (this.state.items.length)});
    }.bind(this), 5000);
  },
  componentWillUnmount: function() {
    clearInterval(this.state.intervalId);
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div style={{backgroundImage: `url('https://chalees-min.imgix.net${item}?w=1000&fit=clip&auto=format,compress')`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='contact-background' key={i} />
      );
    }.bind(this));
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="contact" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          {items[this.state.current]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Contact;