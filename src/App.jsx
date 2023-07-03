import Emails from "./components/emails"
import Card from 'react-bootstrap/Card';


function App(){


  return(
      <div className="container mt-3">
        <Card style={{ width: '18rem' }} >
          <Emails/>
        </Card>
      </div>    
  )
}

export default App