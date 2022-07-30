import React,{Component} from "react";
import './Premium.css';
import Girl from './Girl.png';
import { Link } from "react-router-dom";
import Section3 from "./Section3";

class Premium extends Component{
    render(){
        return(
            <div>
                <table className='premiumstickytable'>
                    <tr>
                        <td>
                            &#x20DD; ! &nbsp;&nbsp;<Link to='/login' className='signuplogin3'>Log in</Link> to see if you're eligible for any other special offers from Spotify.
                        </td>
                    </tr>
                </table>
            <div className='premiumsection1div'>
                <table className='premiumtable1'>
                    <tr>
                        <td className='premiumleft'>
                            <br/><br/><br/>
                            <h1>Get 3 months of Premium for free</h1>
                            <h2>Enjoy ad-free music listening, offline playback, and more.</h2>
                            <h2>Cancel anytime. </h2><br/>
                            <button className='premiumbutton1' type='button'>GET 3 MONTHS FREE</button> &nbsp;
                            <button className='premiumbutton2' type='button'>VIEW PLANS</button><br/><br/><br/>
                            <p className='premiumtnc'>Monthly subscription fee applies after. Open only to users who haven't already tried Premium. Offer excludes<br/> Family and Duo plans. <a href='https://www.spotify.com/us/legal/end-user-agreement/'>Terms and conditions apply</a>. Offer ends 30 September 2021.</p>
                            <br/><br/><br/>
                        </td>
                        <td className='premiumright'>
                            <br/><br/><br/>
                            <img className='girlimage' src={Girl} alt='Girl Image'/>
                        </td>
                    </tr>
                </table><br/>
            </div>
            <Section3 />
            </div>
        )
    }
}

export default Premium;