const data = {
  '1': {
    items: [{
      kind: 'video',
      time: 4,
      title: 'Where does food come from?',
      instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
      videoId: 'zHeWx_AifLs'
    }, {
      kind: 'textResponse',
      time: 10,
      title: 'Share what you have learned',
      instructions: 'Use a pencil and paper to draw a picture that shows what you have learned from this video. Then take a picture of it and share it here.'
    }, {
      kind: 'imageResponse',
      time: 6,
      title: 'Pick a question to investigate',
      instructions: dedent`
        At the end of the video, we present a few questions for you to think about. Here they are again:
          - Where does water come from?
          - Where does petrol come from?
          - Where does snot come from?
        
        Select a question you want to think about more. You can pick from the list above or think of a new question of your own.
        
        Then write it in the box below.`
    }, {
      kind: 'textResponse',
      time: 10,
      title: 'Conduct your own research',
      instructions: 'Spend a few minutes doing research on the question you selected above. Write down the summary of your research below.'
    }]
  },
  '7': {
    items: [{
      time: '?',
      kind: 'video',
      title: 'Why do plants produce flowers?',
      instructions: 'Why do plants produce flowers? Watch this video to find out.',
      videoId: 'EArZXsRXsj4'
    },
    {
      time: '?',
      kind: 'imageResponse',
      title: 'Reflect',
      instructions: 'Take a picture and drop it here'
    },
    {
      time: '?',
      kind: 'textResponse',
      title: 'Reflect',
      instructions: 'Write down your thoughts about flowers'
    },
    {
      time: '?',
      kind: 'image',
      title: 'Conduct your own experiment',
      instructions: 'Follow the instructions in the link on how to conduct your own experiment on flowers. [Click here for the instructions](https://goo.gl/cuf63n)',
      src: 'http://cdn.instructables.com/FA6/OOPP/I916FK0J/FA6OOPPI916FK0J.MEDIUM.jpg'
    }]
  },
  '13': {
    items: [{
      time: '?',
      kind: 'video',
      title: 'When do magnets misbehave?',
      instructions: 'Heat has something to do with magnets not behaving as usual. Watch this video to find out.',
      videoId: 'yjSNU62kxZo'
    }, {
      time: '?',
      kind: 'textResponse',
      title: 'Share what you have learned',
      instructions: 'What did you learn? Discuss your response with a friend and write it here.'
    }, {
      time: '?',
      kind: 'imageResponse',
      title: 'Pick question to investigate and share',
      instructions: dedent`
        1) Pick a question from the link that you want to learn more about from [here](http://goo.gl/e2acXh).
        2) Write it on a piece of paper; paste it on a wall.
        3) Take a picture and upload here.`
    }, {
      time: '?',
      kind: 'image',
      title: 'Conduct your own experiment',
      instructions: 'Follow the instructions in the link on how to conduct your own curie point experiment. [Click here for the instructions](http://goo.gl/LWKF9o).',
      src: 'https://d30su0b7sry5gh.cloudfront.net/repo/dyOJMXVz/images/S1gqnvfC.jpg'
    }]
  }  
};

export default data;
