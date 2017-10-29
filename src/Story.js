import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.story.img} />
      <div className='story-info'>
        <div className='story-right'>
          <h3>{props.story.title}</h3>
          <p>{props.story.desc}</p>
          <Author story={props.story} />
        </div>




        {/* create an Author component and add it here */}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
