import React,{Component} from "react";
import './Section3.css';
import Logo2 from './SpotifyLogoWhite.png';

class Section3 extends Component{
    render(){
        return(
            <div className='footer'>
                <a href='#'><img src={Logo2} alt='Spotify Logo' className='spotifyimage2'/></a>
                <br/><br/><br/><br/><br/>
                <table className='table3'>
                    <tr>
                        <th>COMPANY</th>
                        <th>COMMUNITIES</th>
                        <th>USEFUL LINKS</th>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td>For Artists</td>
                        <td>Support</td>
                    </tr>
                    <tr>
                        <td>Jobs</td>
                        <td>Developers</td>
                        <td>Web Player</td>
                    </tr>
                    <tr>
                        <td>For the Record</td>
                        <td>Advertising</td>
                        <td>Free Mobile App</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Investors</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Vendors</td>
                        <td></td>
                    </tr>
                </table>
                <footer>
                    <table className='table4'>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='footer2'>🌐 USA</td>
                        </tr>
                        <tr>
                            <td>Legal</td>
                            <td>Privacy Center</td>
                            <td>Privacy Policy</td>
                            <td>Cookies</td>
                            <td>About Ads</td>
                            <td>Additional CA Privacy Disclosures</td>
                            <td className='footer2'>© 2021 Spotify AB</td>
                        </tr>
                    </table>
                </footer>
            </div>
        )
    }
}

export default Section3;