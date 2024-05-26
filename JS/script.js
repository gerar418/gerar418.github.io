// Start JS for JSON

const listEl1 = document.getElementById('1'); // I create a variable for the first team "Mad Lions KOI"
const listEl2 = document.getElementById('2'); // I create a variable for the first team "Movistar KOI"

fetch('../JSON/players.json')
    .then(res => res.json())
    .then(data => {
        const teamName = "Mad Lions KOI"; // I choose to only take what belongs to the selected team

        const team = data.teams.find(team => team.name === teamName);  /* This part was put by ChatGPT, but what it does is check if the selected name exists, and if it doesn't, 
        it notifies you of the error via console */
        if (!team) {                                                    
            console.error('Team not found');
            return;
        }

        
        const teamContainer = document.createElement('div'); // Create a container for the team with its name
        teamContainer.classList.add('row',  'm-4') // I add a class to the div with those elements
        teamContainer.innerHTML = `<h2 class="col-12 text-center fs-1">${team.name}</h2>`; // I add a class to the h2 and instruct it to display the team name
        listEl1.appendChild(teamContainer);

        
        const playersContainer = document.createElement('div'); // Create a container for each player
        playersContainer.classList.add('row'); // I add a class to the div with those elements
        team.players.forEach(player => { 
            playersContainer.innerHTML += // Inside the div with ID 1, insert the following HTML while maintaining all classes. Each element within '${}' will be searched for in the JSON by JavaScript
                `<div class="col-xs-12 col-sm-4 col-lg-2 bg-body-tertiary m-3 shadow rounded-3  border border-2 border-warning-subtle p-2" style="--bs-bg-opacity: .85;">
                    <div class="col-8 w-100 text-center d-flex-column">
                        <p class="text-center"> ${player.name}</p> 
                        <p  class="fw-bold fs-4 text-uppercase">${player.nick}</p>
                        <p> ${player.position}</p>
                        <p>${player.nationality}</p>
                        <p>Age: ${player.age}</p>
                    </div>
                    <div class="col-12">
                        <img src="${player.photo}" alt="${player.name}" class="border border-warning-subtle border-2 rounded-3 shadow w-100" >
                    </div>
                </div>
            `;
        });
        teamContainer.appendChild(playersContainer);

        
        const coachesContainer = document.createElement('div'); // The same as the players but with the coaches to differentiate them
        coachesContainer.classList.add('row');
        team.coaches.forEach(coach => {
            coachesContainer.innerHTML += `
            <div class="col-xs-12 col-sm-3 col-lg-3 bg-body-tertiary m-3 shadow rounded-3  border border-2 border-warning-subtle p-2" style="--bs-bg-opacity: .85;">
                <div class="text-center ">
                    <p>${coach.name}</p>
                    <p  class="fw-bold fs-4 text-uppercase">${coach.nick}</p>
                    <p>${coach.rol}</p>
                    <p>${coach.nationality}</p>
                    <p>Age: ${coach.age}</p>
                </div>
                <div class="col-12">
                    <img src="${coach.photo}" alt="${coach.name}" class=" border border-warning-subtle border-2 rounded-3 shadow w-100" >
            </div>
            `;
        });
        teamContainer.appendChild(coachesContainer);
    })
    .catch(error => console.error('Error fetching JSON:', error)); //  If there were any errors, it would notify us via console


    // Here I do the same as before but with the second team

    fetch('../JSON/players.json')
    .then(res => res.json())
    .then(data => {
        const teamName = "Movistar KOI"; 

        const team = data.teams.find(team => team.name === teamName);
        if (!team) {
            console.error('Team not found');
            return;
        }

        
        const teamContainer = document.createElement('div');
        teamContainer.classList.add('row','m-4')
        teamContainer.innerHTML = `<h2 class="col-12 text-center fs-1">${team.name}</h2>`;
        listEl2.appendChild(teamContainer);

        
        const playersContainer = document.createElement('div');
        playersContainer.classList.add('row');
        team.players.forEach(player => {
            playersContainer.innerHTML +=
                `<div class="col-xs-12 col-sm-4 col-lg-2 bg-body-tertiary m-3 shadow rounded-3  border border-2 border-warning-subtle p-2" style="--bs-bg-opacity: .85;">
                    <div class="col-8 w-100 text-center d-flex-column">
                        <p class="text-center"> ${player.name}</p>
                        <p  class="fw-bold fs-4 text-uppercase">${player.nick}</p>
                        <p> ${player.position}</p>
                        <p>${player.nationality}</p>
                        <p>Age: ${player.age}</p>
                    </div>
                    <div class="col-12">
                        <img src="${player.photo}" alt="${player.name}" class="border border-warning-subtle border-2 rounded-3 shadow w-100" >
                    </div>
                </div>
            `;
        });
        teamContainer.appendChild(playersContainer);

        
        const coachesContainer = document.createElement('div');
        coachesContainer.classList.add('row');
        team.coaches.forEach(coach => {
            coachesContainer.innerHTML += `
            <div class="col-xs-12 col-sm-3 col-lg-3 wrap bg-body-tertiary m-3 shadow rounded-3  border border-2 border-warning-subtle p-2" style="--bs-bg-opacity: .85;">
                <div class="text-center ">
                    <p>${coach.name}</p>
                    <p  class="fw-bold fs-4 text-uppercase">${coach.nick}</p>
                    <p>${coach.rol}</p>
                    <p>${coach.nationality}</p>
                    <p>Age: ${coach.age}</p>
                </div>
                <div class="col-12">
                    <img src="${coach.photo}" alt="${coach.name}" class=" border border-warning-subtle border-2 rounded-3 shadow w-100" >
            </div>
            `;
        });
        teamContainer.appendChild(coachesContainer);
    })
    .catch(error => console.error('Error fetching JSON:', error));

// End JS for JSON



//Start JS for Form

  // Select the button by its ID and add an event listener
  document.getElementById('send').addEventListener('click', send);

  function send() { // I declare the variables
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      if (name.trim() === '' || email.trim() === '' || !email.includes('@') || !email.includes('.') ) {  // If any value is missing or the email doesn't contain '@' or '.', an error message will be displayed
          alert('Please fill out all required fields.');
          return;
      }
  
      document.getElementById('sendResult').innerHTML = '<p class="text-center">You have successfully subscribed</p>'; // I place the selected HTML inside the div
      
      document.getElementById('name').value = '';     // For both the name and email, once they are successfully sent, I clear the content
      document.getElementById('email').value = '';
  }

  //End JS for Form