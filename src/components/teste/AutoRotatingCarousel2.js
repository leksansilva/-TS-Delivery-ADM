import React from 'react';
const AutoRotatingCarousel = require('./AutoRotatingCarousel').default
const Slide = require('./Slide').default;
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

export default function teste(){
  
return(


  <div>
  <Button >Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div>

)

}
