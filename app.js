const profileDiv = document.getElementById("profile");
function handleEnter(event) {
  if (event.key === "Enter") {
    getProfile();
  }
}
function getProfile() {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    profileDiv.innerHTML = `<p class="error">Please enter a username</p>`;
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((user) => {
      fetch(`${user.repos_url}?sort=updated&per_page=5`)
        .then((res) => res.json())
        .then((repos) => {
          let stars = 0;
          repos.forEach((repo) => {
            stars += repo.stargazers_count;
          });

          profileDiv.innerHTML = `
            <div class="profile-card">
              <img src="${user.avatar_url}" alt="${user.login}">
              <h2>${user.name || user.login}</h2>
              <p>@${user.login}</p>

              <div class="stats">
                <div class="stat">
                  <span>${user.followers}</span>
                  Followers
                </div>
                <div class="stat">
                  <span>${user.following}</span>
                  Following
                </div>
                <div class="stat">
                  <span>${user.public_repos}</span>
                  Repos
                </div>
              </div>

              <p>⭐ Stars (Recent): ${stars}</p>

              <div class="repos">
                <h3>Recent Repositories</h3>
                ${repos
                  .map(
                    (repo) => `
                  <div class="repo">
                    <a href="${repo.html_url}" target="_blank">
                      ${repo.name}
                    </a>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `;
        });
    })
    .catch((error) => {
      profileDiv.innerHTML = `<p class="error">${error.message}</p>`;
    });
}
