import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Logo1 from './SpotifyLogoWhite.png';
import './Signup.css'

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

class Signup extends Component{
    constructor(){
        super();
        this.state={
            email1:null,
            email1action:null,
            email2:null,
            email2action:null,
            password:null,
            passwordaction:null,
            name:null,
            nameaction:null,
            month:null,
            day:null,
            year:null,
            monthaction:null,
            dayaction:null,
            yearaction:null,
            gender:null,
            genderaction:null,
            errors: 
            {
                fullName: '',
                email: '',
                password: ''
            }
        }
    }
    submitUserDetails(){
        let userObject={
            email1:this.refs.Email1.value,
            email2:this.refs.Email2.value,
            password:this.refs.Password.value,
            name:this.refs.Name.value,
            month:this.refs.Month.value,
            day:this.refs.Day.value,
            year:this.refs.Year.value,
            gender:this.refs.Gender.value
        }
        axios.post('http://localhost:3001/addUser',userObject)
            .then((response)=>{
                console.log('response = '+JSON.stringify(response.data));
            })
            .catch((error)=>{
                console.log(error);
            })
        this.setState({
            email1:null,
            email1action:'Email Added',
            email2:null,
            email2action:'Email Added',
            password:null,
            passwordaction:'Password Added',
            name:null,
            nameaction:'Name Added',
            month:null,
            day:null,
            year:null,
            monthaction:'Month Added',
            dayaction:'Day Added',
            yearaction:'Year Added',
            gender:null,
            genderaction:'Gender Added'
        })
    }

    render(){
        return(
            <div>
                {/* <Link to='/'><img src={Logo1} alt='Spotify Logo' className='spotifyimage2'/></Link> */}
                <h1 style={{textAlign:'center'}}>Sign up for free to start listening.</h1>
                <a href='https://www.facebook.com/login/'><button className='button3' type='button'>Sign up with Facebook</button></a>
                <p className='or'>━━━━━━━━━━━ &nbsp;&nbsp; or &nbsp;&nbsp; ━━━━━━━━━━━</p>
                <h3 style={{textAlign:'center'}}>Sign up with your email address</h3>
                <form>
                    <table className='table5'>
                        <br/>
                        <tr>
                            <td><h4>What's your email?</h4></td>
                        </tr>
                        <tr>
                            <td><input type='text' ref='Email1' className='ans' placeholder='Enter your email.'/></td>
                        </tr>
                        <tr>{this.state.email1action}</tr>
                        <tr>
                            <td><h4>Confirm your email</h4></td>
                        </tr>
                        <tr>
                            <td><input type='text' ref='Email2' className='ans' placeholder='Enter your email again.'/></td>
                        </tr>
                        <tr>{this.state.email2action}</tr>
                        <tr>
                            <td><h4>Create a password</h4></td>
                        </tr>
                        <tr>
                            <td><input type='password' ref='Password' className='ans' placeholder='Create a password.'/></td>
                        </tr>
                        <tr>{this.state.passwordaction}</tr>
                        <tr>
                            <td><h4>What should we call you?</h4></td>
                        </tr>
                        <tr>
                            <td><input type='text' ref='Name' className='ans' placeholder='Enter a profile name.'/></td>
                        </tr>
                        {/* <tr>{errors.fullName.length > 0 && <span className='error'>{errors.fullName}</span>}</tr> */}
                        <tr>{this.state.nameaction}</tr>
                        <tr>
                            <td><h4>What's your date of birth?</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <label for='monthd'>Month</label>
                                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</span>
                                <label for='dayd'>Day</label>
                                <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                                <label for='yeard'>Year</label><br/>
                                <select name='monthd' className='monthd' ref='Month'>
                                    <option value="none" selected disabled>Month</option>
                                    <option value='January'>January</option>
                                    <option value='February'>February</option>
                                    <option value='March'>March</option>
                                    <option value='April'>April</option>
                                    <option value='May'>May</option>
                                    <option value='June'>June</option>
                                    <option value='July'>July</option>
                                    <option value='August'>August</option>
                                    <option value='September'>September</option>
                                    <option value='October'>October</option>
                                    <option value='November'>November</option>
                                    <option value='December'>December</option>
                                </select><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type='text' ref='Day' placeholder='DD' className='dayd'/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type='text' ref='Year' placeholder='YYYY' className='yeard'/>
                            </td>
                        </tr>
                        <tr>{this.state.monthaction}</tr>
                        <tr>{this.state.dayaction}</tr>
                        <tr>{this.state.yearaction}</tr>
                        <tr>
                            <td><h4>What's your gender?</h4>
                                <label><input type='radio' name='gender' ref='Gender'/>Male</label>
                                <label><input type='radio' name='gender' ref='Gender'/>Female</label>
                                <label><input type='radio' name='gender' ref='Gender'/>Non-binary</label>
                            </td>
                        </tr>
                        <br/>
                        <tr>
                            <td>
                                <input type='checkbox'/>&nbsp; Share my registration data with Spotify's content providers for marketing purposes.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='signuptnc'>By clicking on sign-up, you agree to Spotify's <a href='https://www.spotify.com/us/legal/end-user-agreement/' className='tnc'>Terms and Conditions of Use</a>.</p>
                                <p className='signuptnc'>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href='https://www.spotify.com/us/legal/privacy-policy/' className='tnc'>Spotify's Privacy Policy</a>.</p>
                            </td>
                        </tr>
                    </table>
                    <button className='button4' type='button' onClick={()=>this.submitUserDetails()}>Sign up</button>
                    <br/>
                    <p className='signuplogin1'>Have an account? <Link to='/login' className='signuplogin2'>Log in.</Link></p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </form>
            </div>
        )
    }
}

export default Signup;