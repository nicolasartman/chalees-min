import classNames from "classnames";

import ImageContent from "./image-content";
import buzz from "../sounds/buzz.mp3";
import chime from "../sounds/chime.mp3";

const ANIMATION_DURATION = 500;

const ImageSelect = React.createClass({
  getInitialState: () => ({
    currentIndex: 0
  }),

  handleSelect(id, answer) {
    const { selected } = this.state;

    this.setState({ selected: id, wordShow: false }, () => {
      if (id === answer) {
        this.playSound("chime");

        window.setTimeout(this.proceedToNext, ANIMATION_DURATION);
      } else {
        this.playSound("buzz");
        window.setTimeout(
          () => this.setState({ selected: null }),
          ANIMATION_DURATION
        );
      }
    });
  },

  playSound(name) {
    this[name].currentTime = 0;
    this[name].volume = 0.6;
    this[name].play();
  },

  proceedToNext() {
    const { state: { currentIndex }, props: { questions } } = this;

    this.setState({ selected: null }, () => {
      if (currentIndex < questions.length - 1) {
        this.setState({ currentIndex: currentIndex + 1, wordShow: true });
      } else {
        this.setState({
          hideOverlay: false,
          currentIndex: 0,
          repeat: true
        });
      }
    });
  },

  componentDidMount() {},

  render() {
    const {
      props: { questions },
      state: { hideOverlay, showTick, currentIndex, selected, repeat, wordShow }
    } = this;
    const question = questions[currentIndex];

    return (
      <div className="image-select">
        {!hideOverlay && (
          <div className="overlay">
            <div>
              {repeat && <p>Well Done!</p>}
              <button
                className="pure-button"
                children={`Play${repeat ? " Again" : ""}`}
                onClick={() =>
                  this.setState({ hideOverlay: true, wordShow: true })}
              />
            </div>
          </div>
        )}
        <p>Select the picture that is connected to the word below.</p>
        <div className="word-ctr">
          <p className={classNames("word", { "word-show": wordShow })}>
            {question.word}
          </p>
        </div>
        <div className="pure-g image-strip">
          {question.images.map(image => (
            <div
              key={image.id}
              className={classNames(
                "pure-u-1-2 pure-u-sm-1-4",
                "image",
                {
                  "image-approve":
                    selected === image.id && question.answer === image.id
                },
                {
                  "image-error":
                    selected === image.id && question.answer !== image.id
                }
              )}
              onClick={() => this.handleSelect(image.id, question.answer)}
            >
              <img src={image.path} />
            </div>
          ))}
        </div>
        <div className="audio">
          <audio src={buzz} ref={n => (this.buzz = n)} />
          <audio src={chime} ref={n => (this.chime = n)} />
        </div>
      </div>
    );
  }
});

export default ImageSelect;
