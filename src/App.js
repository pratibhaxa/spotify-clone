import logo from './logo.svg';
import './App.css';
import Logo1 from './SpotifyLogoWhite.png';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='header'>
      <header>
        <Link to='/home'><img src={Logo1} alt='Spotify Logo' className='spotifyimage1'/></Link>
        <div className='controls'>
          <Link to='/premium' className='a'>Premium</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/support' className='a'>Support</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/download' className='a'>Download</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/signup' className='a'>Sign up</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/login' className='a'>Log in</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
