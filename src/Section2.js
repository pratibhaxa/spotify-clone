import React,{Component} from "react";
import './Section2.css'
import Background from './Section2Background.png';

class Section2 extends Component{
    render(){
        return(
            <div className='section2div' style={{backgroundImage: `url(${Background})`}}>
                <br/><br/><br/>
                <table className='table2'>
                    <tr>
                        <td>
                            <h5>SPOTIFY FREE</h5>
                            <h1>Listening is everything</h1>
                            <h2>Millions of songs and podcasts. No credit card needed</h2><br/>
                            <button className='button2' type='button'>GET SPOTIFY FREE</button>
                        </td>
                    </tr>
                </table>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Section2;