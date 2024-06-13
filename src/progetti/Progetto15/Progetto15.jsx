

import FrameProgetto15 from './FrameProgetto15';

import "../../indexProgetto15.css"
function Progetto15() {
  
  return (
  <div id="progetto15">
    <FrameProgetto15 social="facebook" follower={12500} caption="Facebook Fans"/>
    <FrameProgetto15 social="twitter" follower={15100} caption="Twitter Followers"/>
    <FrameProgetto15 social="youtube" follower={17200} caption="Youtube Subscribers"/>
  </div>
  )
}

export default Progetto15;
