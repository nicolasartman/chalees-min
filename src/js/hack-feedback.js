import cond from 'lodash/fp/cond';

const createFakePeerResponses = (fakePeerResponses) => (
  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
    {fakePeerResponses.map((fakeResponse, index) => (
      <li key={index} style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
        <div style={{minWidth: '3em', marginRight: '0.75em'}}>
          <img src={'https://chalees-min.imgix.net' + fakeResponse.imagePath + '?w=34&h=34&auto=format&mask=ellipse'} className="pure-img"/>
        </div>
        <div>
          <span style={{fontStyle: 'italic'}}>{fakeResponse.response}</span>
          <br />
          &mdash;{fakeResponse.studentName}
        </div>
      </li>
    ))}
  </ul>
);

const HackFeedback = ({data}) => (
  <div className="hack-feedback learning-item-section">
    <div>{data.preface}</div>
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