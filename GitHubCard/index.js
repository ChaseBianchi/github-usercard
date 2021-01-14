import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/chasebianchi')
  .then(data => {
      const cardsDiv = document.querySelector('.cards');
      const newCard = cardCreator(data)
      console.log(cardCreator(data));
      cardsDiv.appendChild(newCard);
      
    })
  .catch(err=>{
    console.log('error');
    debugger
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardCreator = (obj)=>{
  // instantiation and classes
  const card = document.createElement('div');
  card.classList.add('card')
  const imageURL = document.createElement('img');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const h3 = document.createElement('h3');
  h3.classList.add('name');
  const username = document.createElement('p');
  username.classList.add('username');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const aTag = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
// contents
imageURL.textContent = `${obj.url}`
h3.textContent = `${obj.name}`
username.textContent = `${obj.login}`
location.textContent = `Location: ${obj.location}`
profile.textContent = `Profile: `
aTag.textContent = `${obj.url}`;
aTag.href = `${obj.url}`;
followers.textContent = `${obj.followers}`;
following.textContent = `${obj.following}`;


// appending childs
card.appendChild(imageURL);
card.appendChild(cardInfo);
cardInfo.appendChild(h3);
cardInfo.appendChild(username);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
profile.appendChild(aTag);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
return card
}

// console.log(cardCreator({url: 'asdf', name: 'john', login: 'asdfff', location: 'nowhere', followers: 'dont ask', following: 'no one'}))
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
