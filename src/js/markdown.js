import Markdown from 'react-markdown';

// Render all links from markdown so they open in a new window so the learner
// doesn't potentially lose progress
const linkRenderer = (linkNode) => {
  return <a href={linkNode.href} title={linkNode.title}
            target="_blank" children={linkNode.children} />;
};

const MarkdownCustomized = (props) => (
  <Markdown className="markdown" source={props.source || ''} renderers={{'Link': linkRenderer}}/>
);

export default MarkdownCustomized;