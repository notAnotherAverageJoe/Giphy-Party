console.log("Let's get this party started!");


async function response () { 
const apiKey = 'mCs85nSuDG8A38StbD6nwPRMcpUqf0wy'
const apiUrl = 'https://api.giphy.com/v1/gifs/trending?';
//Make an asynchronous GET request to Giphy API using axios
try {
    const res = await axios.get(apiUrl, {
        // Set the parameters, including the API key
        params: {
            apiKey: apiKey
    }
});
 // Process the response or render the data here
 console.log(res.data);
} catch (error) {
    console.error('Error fetching trending GIFs:', error);
}
}



const gifArea = document.getElementById('gifContainer');
const searchInput = document.getElementById('searchForm');

/* Use AJAX result to add a gif */
function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    
    let newCol = document.createElement('div');
    newCol.className = 'col-md-4 col-12 mb-4';

    let newGif = document.createElement('img');
    newGif.src = res.data[randomIdx].images.original.url;
    newGif.className = 'w-100';

    newCol.appendChild(newGif);
    gifArea.appendChild(newCol);
  }
}




document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    await response();


let searchTerm = document.getElementById('searchTerm').value;
document.getElementById('searchTerm').value = " ";

try {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "mCs85nSuDG8A38StbD6nwPRMcpUqf0wy"
      }
    });
    addGif(response.data);
  } catch (error) {
    console.error('Error fetching GIFs:', error);
  }
  
  document.getElementById('removeGifsBtn').addEventListener('click', function () {
    gifContainer.innerHTML = ''; // Clear the container
});
});