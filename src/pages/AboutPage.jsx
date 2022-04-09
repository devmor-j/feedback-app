import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

export default function AboutPage() {

  return (
    <Card>
      <div className="about">
        <h2>About this project</h2>
        <p>This is a react app for users to leave feedback and review our product and service</p>

        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}
