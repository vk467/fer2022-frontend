import Slideview from '../Components/Slideview/Slideview';
import Sidebar from '../Components/sidebar/Sidebar';
import Topbar from '../Components/topbar/Topbar';

export default function Mainpage() {
  return (
    <div>
        <Topbar/>
        <Sidebar/>
        <Slideview/>
    </div>
  )
}
