import react from 'react'
export default class ReservationForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( <div className = "flex-container">
                <span className = "textinput flex-item-1"><input placeholder="Restaurant" type = "text"></input></span>
                <span className = "textinput flex-item"><input placeholder ="Name" type = "text"></input></span>
                <span className = "textinput flex-item"><input  placeholder= "Number of People" type = "text"></input></span>
                <span className = "textinput flex-item"><input placeholder= "Phone Number" type = "text"></input></span>
                <span className = "textinput flex-item"><input type = "radio" value="Breakfast"></input>Breakfast
                <input type = "radio" value="Lunch"></input>Lunch
                <input type = "radio" value="Dinner"></input>Dinner</span>
                <span className = "textinput flex-item"><input type = "time"></input></span>
                </div>
              )
    }
};     