🎬 The OG Movies
Welcome to The OG Movies, a sleek and modern web application for browsing, searching, and curating your personal movie watchlist. Built with a passion for cinema, this app provides a seamless experience for discovering everything from the latest blockbusters to hidden gems across different film industries.

This project was built from the ground up to showcase modern web development practices, featuring a fully interactive and responsive user interface.

✨ Features
Dynamic Hero Carousel: A stunning, auto-playing carousel on the homepage showcasing trending movies with full-screen backdrops and smooth transitions.

Curated Movie Lists: 

Discover new films with auto-scrolling carousels and grids for various categories, including:

1.Popular Movies

2.Trending Bollywood

3.Trending Tollywood

4.Trending Kollywood

5.Trending Hollywood


--> Powerful Movie Search: A fast and responsive search bar that allows you to find any movie by its title, with results displayed instantly.

--> User Authentication: A mock user system that allows you to "Sign Up" and "Login" to access personalized features. Your session is saved in the browser, so you stay logged in.

--> Personalized Watchlist: Logged-in users can add movies to a personal watchlist. This list is saved using localStorage, so your selections are remembered even after you close the browser.

--> "Watch Now" Functionality: Instantly find and watch a movie's trailer on YouTube with the click of a button.

--> Interactive UI: Smooth animations, hover effects, and a custom "Login Required" modal create an engaging and user-friendly experience.

--> Fully Responsive Design: The entire application is designed to look and work beautifully on all devices, from mobile phones to desktop computers.


🛠️ Tech Stack
This project was built using a modern frontend technology stack:

1.React: A powerful JavaScript library for building user interfaces.

2.Vite: A next-generation frontend tooling that provides a blazing-fast development experience.

3.Tailwind CSS: A utility-first CSS framework for rapidly building custom, responsive designs.

4.React Router: For handling client-side navigation between different pages.

5.The Movie Database (TMDB) API: The source of all our movie data, from popular lists to search results and trailers.


🚀 How to Run This Project Locally

To get this project running on your own machine, follow these simple steps:

1.Clone the repository

2.Open your terminal and run the following command:

git clone https://github.com/om1411/verto-movie-library.git

3.Navigate into the project directory

cd verto-movie-library

4.Install dependencies

5.This will download all the necessary packages for the project to run.

npm install

6.Get Your TMDB API Key (This project requires a key from The Movie Database to fetch movie data.)

7.Go to themoviedb.org and create a free account.

8.Go to your account Settings, click on the API tab, and copy your API Key (v3 auth).

9.Open the file src/services/api.js and paste your key into the API_KEY constant.

10.Run the development server

11.This command starts the application.

npm run dev

12.Your browser should automatically open to the local development server.


You're all set! Enjoy!!
