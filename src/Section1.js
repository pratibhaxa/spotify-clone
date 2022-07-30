import React,{Component} from "react";
import './Section1.css';
import Girl from './Girl.png';

class Section1 extends Component{
    render(){
        return(
            <div className='section1div'>
                <table className='table1'>
                    <tr>
                        <td className='left'>
                            <br/><br/><br/>
                            <h5>SPOTIFY PREMIUM</h5>
                            <h1>Get 3 months of Premium for free</h1>
                            <h2>Enjoy ad-free music listening, offline playback, and more.</h2>
                            <h2>Cancel anytime.</h2><br/>
                            <button className='button1' type='button'>GET 3 MONTHS FREE</button><br/><br/><br/>
                        </td>
                        <td className='right'>
                            <br/><br/><br/>
                            <img className='girlimage' src={Girl} alt='Girl Image'/>
                        </td>
                    </tr>
                </table><br/>
            </div>
        )
    }
}

export default Section1;