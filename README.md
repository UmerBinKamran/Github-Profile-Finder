# 🔍 GitHub Profile Finder

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-Fetch-blue?style=for-the-badge)

A modern **GitHub Profile Search web application** built using **HTML, CSS, and JavaScript**.  
It allows users to search any GitHub username and instantly view profile details along with **all repositories displayed in beautiful cards**.

---

## 🚀 Features

- 🔎 Search GitHub users by username
- ⌨️ Search using **Enter key**
- 👤 Displays user profile details:
  - Avatar
  - Name & username
  - Followers & following count
  - Public repositories count
- ⭐ Shows **total stars** across repositories
- 📦 Displays **all repositories** in card layout
  - Repository name
  - Description
  - Stars & forks
- 🌐 Real-time data from **GitHub REST API**
- 🎨 Clean, modern, responsive UI

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling & layout  
- **JavaScript (ES6)** – Logic & DOM manipulation  
- **Fetch API** – API requests  
- **GitHub REST API** – Data source  

---
## 📂 Project Structure
github-profile-search/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## ⚙️ How It Works

1. User enters a GitHub username
2. App fetches profile data from:
3. Repository data is fetched from: https://api.github.com/users/{username}/repos
4. JavaScript dynamically renders the profile and repositories on the UI

---

## ▶️ How to Run Locally

1. Clone the repository:
```bash
git clone 
Navigate to the project folder:https://github.com/UmerBinKamran/Github-Profile-Finder
