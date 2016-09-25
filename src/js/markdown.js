import Markdown from 'react-markdown';

// Render all links from markdown so they open in a new window so the learner
// doesn't potentially lose progress
const linkRenderer = (linkNode) => {
  return <a href={linkNode.href} title={linkNode.title}
            target="_blank" children={linkNode.children} />;
};

// Render images through imgix if their paths start with a / so we can
// serve optimized images inside markdown regions. 
const imgixBase = 'https://chalees-min.imgix.net';
const imgixParameters = 'w=800&fit=max&auto=format,compress';
const imageRenderer = (imageNode) => {
  const imageSource = imageNode.src.startsWith('/')
    ? `${imgixBase}${imageNode.src}?${imgixParameters}`
    : imageNode.src;
  return <img src={imageSource} alt={imageNode.alt} title={imageNode.title} />
};

const MarkdownCustomized = (props) => (
  <Markdown 
    className={'markdown ' + (props.className || '')}
    source={props.source || ''}
    renderers={{
      'Link': linkRenderer,
      'Image': imageRenderer,
    }} />
);

export default MarkdownCustomized;