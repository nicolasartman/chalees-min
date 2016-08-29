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
    this.state.intervalId = setInterval(() => {
      this.setState({current: (this.state.current + 1) % (this.state.items.length)});
    }, 5000);
  },
  componentWillUnmount: function() {
    clearInterval(this.state.intervalId);
  },
  render: function() {
    var items = this.state.items.map((item, i) => {
      return (
        <div style={{backgroundImage: `url('https://chalees-min.imgix.net${item}?w=1000&fit=clip&auto=format,compress')`, backgroundPosition: 'center', backgroundSize: 'cover'}} className='contact-background' key={i} />
      );
    });
    return (
      <div>
        <div className="contact-message">
          Chalees was made with love all around the world. Please reach out and tell us about your journey in the world. Or ask any question you may have.
          <br />
          <br />
          <span className="contact-email">hi@chaleesmin.school</span>
          </div>
        <ReactCSSTransitionGroup component="div" transitionName="contact" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          {items[this.state.current]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Contact;