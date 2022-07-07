import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from "./LivingRoom"
import Bedroom from './Bedroom'
import Bath from './Bath'

function App() {
  return (
    <div className="FloorPlan">
        <div>
        <Bedroom bedNum={1}/>
      </div>
      <div>
        <h3>Kitchen</h3>
        <Kitchen />
      </div>
      <div>
        <Bath size={'Full'}/>
      </div>
      <div>
        <Bedroom bedNum={2}/>
      </div>
        <LivingRoom />
      <div>
        <Bath size={'Half'}/>
      </div>
      <div>
        <Bedroom bedNum={3}/>
      </div>
    </div>
  )
}

export default App
