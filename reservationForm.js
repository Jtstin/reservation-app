import react from 'react'
export default class ReservationForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( <div>
                <p>Name <input type = "text"></input></p>
                <p>Number Of People <input type = "text"></input></p>
                <p>Phone Number <input type = "text"></input></p>
                <p>Session <input type = "radio" value="Breakfast"></input>Breakfast
                <input type = "radio" value="Lunch"></input>Lunch
                <input type = "radio" value="Dinner"></input>Dinner</p>
                <p>Time <input type = "time"></input></p>
                </div>
              )
    }
};      