# Background

I created this repository to help me learn html, javascript and react. The sample I am going to build is a table reservation application.

# Basic HTML and JavaScript
Basic html has a body. The approach is to build all html elements using react, in order to do this, the body needs to have an element where the JavaScript code can render the dynamic html components for the app to run eg. 

     <body>
        <div id="app"></div>
    </body>
    <script src="app.js"></script>   

In the example above is the div that has the id 'app'. Notice how the script tag occurs after the body, the reason for this is because html runs sequentially. The div needs to already be rendered before the Java script code accesses it.  

#React
I made a react file called search bar, in that file I used render and return to produce the desired input type. One thing I always forgot was to use a parenthesis after the return statement. 

    render(){
        return(
            <input type="text" ></input>
        )
    }

I used the example above to create the reservation form which allows users to input their name, phone number, number of people, session and time. For the fisr three parts of the form, I used the input type 'text'. I then used 'radio' and 'time' for session and time respectively. For radio I had to add identify a value attribute as it wasn't going to run without it. 

I then imported both my react component files into app.js to make it available for use.

    import SearchBar from './searchbar';
    import ReservationForm from './reservationForm';

To use these components, I included in the app component. 

  render() {
    return <div>
        <SearchBar></SearchBar>
        <ReservationForm></ReservationForm>
      </div>
  
  }

I used npm start to compile and serve out the compiled app.js via a web server. To access the developer console in the browser, use command+alt+'i'.