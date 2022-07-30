import React,{Component} from "react";
import './NavigationBar.css'
import Premium from "./Premium";
import Logo1 from './SpotifyLogoWhite.png';
import { Link } from "react-router-dom";

class NavigationBar extends Component{
    render(){
        return(
            <div className='header'>
                <header>
                    <Link to='/'><img src={Logo1} alt='Spotify Logo' className='spotifyimage1'/></Link>
                    <div className='controls'>
                    <Link to='/premium' className='a'>Premium</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to='/support' className='a'>Support</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to='/download' className='a'>Download</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to='/signup' className='a'>Sign up</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to='/login' className='a'>Log in</Link>
                    {/* <Link to='/example' className='a'>Example</Link> */}
                    </div>
                </header>
            </div>
        )
    }
}

export default NavigationBar;