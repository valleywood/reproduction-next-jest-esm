/** Add your relevant code here for the issue to reproduce */

import Swiper from "../components/Swiper";

export default function Home() {
  return (
  <Swiper>
    <div key={'swiperKey1'} style={{'backgroundColor': 'red'}}>Test</div>              
    <div key={'swiperKey2'} style={{'backgroundColor': 'blue'}}>Test 2</div>  
    <div key={'swiperKey3'} style={{'backgroundColor': 'cyan'}}>Test 3</div>  
    <div key={'swiperKey4'} style={{'backgroundColor': 'magenta'}}>Test 4</div>  
  </Swiper>);
}
