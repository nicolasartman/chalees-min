import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';

import chapter6Data from './chapter6Data'
import chapter7Data from './chapter7Data'

// validate that all data items have ids that are unique
const learningItems = [...chapter6Data, ...chapter7Data].map(chapter => {
  if (!chapter.items) {
    alert(`Catastrophic error in chapter-data.js: chapter ${chapter.id} lacks an items list`);
    throw new Error();
  }

  const chapterItemIds = chapter.items.map(item => item.id);
  if (uniq(chapterItemIds).length !== chapterItemIds.length) {
    alert('Catastrophic error in chapter-data.js: there are two or more ' +
      'learning items with the same ids within a single chapter! Ids in this chapter: \n' +
      chapterItemIds.join('\n'));
    throw new Error();
  }

  chapter.items.map(item => {
    if (!item.id) {
      alert('Catastrophic error in chapter-data.js: the learning item printed below lack an id. ' +
        'It must have a unique id:\n' + JSON.stringify(item, null, 2));
      throw new Error();
    } else if (!/^[\w\d-]+$/.test(item.id)) {
      alert(`Catastrophic error in chapter-data.js: item id ${item.id} ` +
        'should only contain letters, numbers, and hyphens');
      throw new Error();
    }
  })
});

export {
  chapter6Data,
  chapter7Data
}

// TODO: add automaticResponses id validation too
