
import { useParams } from 'react-router-dom'

function Profile() {
  const { nickname } = useParams();


  return (
    <div>
      <h1>Profile { nickname } </h1>
    </div>
  )
}

export default Profile