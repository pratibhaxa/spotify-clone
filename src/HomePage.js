import React,{Component} from "react";
import NavigationBar from "./NavigationBar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

class HomePage extends Component{
    render(){
        return(
            <div>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        )
    }
}

export default HomePage;