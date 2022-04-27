import Home from '../Components/Home/Home';
import Sidebar from '../Components/sidebar/Sidebar';
import Topbar from '../Components/topbar/Topbar';

export default function Mainpage() {
  return (
    <div>
      <Topbar/>
      <Sidebar/>
       <Home/>
    </div>
  )
}
