import './App.css';
import { ExternalLink } from 'react-external-link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BJ Rutledge</h1>
        <p>Hello! Welcome to my resume. I've created this little app to share my resume with Plaid. If you've stumbled on this by happenstance, you can reach me on <ExternalLink href="https://www.linkedin.com/in/bj-rutledge"><span>LinkedIn</span></ExternalLink></p>

        <p>Please see my <a href='BJRutledgeSoftwareEngineerResume.pdf'>resume</a>.</p>
        <p>The source for this app can be found on <ExternalLink href='https://www.github.com/bj-rutledge'><span>GitHub</span></ExternalLink></p>
        <h2>Have a great day!</h2> 
      </header>
    </div>
  );
}

export default App;
