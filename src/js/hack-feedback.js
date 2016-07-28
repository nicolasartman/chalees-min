import cond from 'lodash/fp/cond';

const createFakePeerResponses = (fakePeerResponses) => (
  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
    {fakePeerResponses.map((fakeResponse, index) => (
      <li key={index} className="peer-response">
        <div style={{minWidth: '3em', marginRight: '0.75em'}}>
          <img src={'https://chalees-min.imgix.net' + fakeResponse.imagePath + '?w=34&h=34&auto=format&mask=ellipse'} className="pure-img"/>
        </div>
        <div>
          <span style={{fontStyle: 'italic', whiteSpace: 'pre-line'}}>{fakeResponse.response}</span>
          <br />
          &mdash;{fakeResponse.studentName}
        </div>
      </li>
    ))}
  </ul>
);

const HackFeedback = ({data}) => (
  <div className="hack-feedback learning-item-section">
    <div className="hack-feedback-preface">
      <div style={{minWidth: '42px'}}>
        <img className="pure-img" src='https://chalees-min.imgix.net/multiple-choice-feedback-instructor.png?w=34&h=34&auto=format&mask=ellipse' />
      </div>
      <div>{data.preface}</div>
    </div>
    {cond([
      [() => data.fakePeerResponses, () => createFakePeerResponses(data.fakePeerResponses)],
      [() => data.feedbackImagePath, () => (
        <img
          style={{margin: '0.75em auto 0 auto'}}
          src={`https://chalees-min.imgix.net${data.feedbackImagePath}?w=726&h=408&fit=clip&auto=format,compress`}
          className='pure-img' />
      )],
    ])()}
  </div>
)


export default HackFeedback;