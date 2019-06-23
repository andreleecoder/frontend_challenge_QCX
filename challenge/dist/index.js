const url = "https://api.github.com/users/andreleecoder"
const ul = document.getElementById('repo-list')

//Create element
function createNode(element) {
	return document.createElement(element)
}

//Append element to it's parent
function append(parent, el) {
	return parent.appendChild(el)
}

//Get the list of user's repositories
function getRepos(url) {
	ul.innerHTML=''
	fetch(url)
		.then(resp => resp.json())
		.then(response => {
			return response.map(function(repo) {
				let li = createNode('li')
				li.innerHTML = repo.name
				append(ul, li)
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	document.querySelector('.repo-block').classList.add('qcx-repo--active')
}

//Show User's Data
const fetchData = (url) => {
	let userData;
	fetch(url)
	.then(resp => resp.json())
	.then(data => (userData = data))
	.then(() => {
		document.querySelector(".repos").innerHTML = 'Repositórios: ' + userData.public_repos
		document.querySelector(".flwrs").innerHTML = 'Seguidores: ' + userData.followers
		document.querySelector(".flwn").innerHTML = 'Seguindo: ' + userData.following
	})
}

fetchData(url);
