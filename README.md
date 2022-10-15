
<!-- PROJECT LOGO -->
<br />
<div align="left">

  <h1 align="center">Football Data (Remake)</h1>

<div align="center">
 <a href="https://github.com/alexk1923/Football-Data-Remake-Public">
  <img src="https://github.com/alexk1923/Football-Data-Remake-Public/blob/main/public/logo192.png?raw=true" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project



* This is a remake of an older project built with jQuery and SASS, started in June 2022. This app objective is to help the user get latest data about his favorite team, when it comes to the rank in the league or fixtures results. The app is deployed on  at
<a href="https://football-data-react.herokuapp.com/">Heroku</a>
.

* The app is organised as a single page website:
    - **HOME**: Presentational purpose only, the button will scroll to the next section if pressed.
    - **TEAM**: You need to choose from the countries made availabe by the API. Then, you can search for your favorite team by its name and a list will be prompted in the container below. To mark it as your favorite, you need to click on the entry in the list, then on the button labeled as `Pick Favorite`. At this point, the app will make a new request to get the standings and fixtures the team has played or is going to play this season.
    - **STATS**: This section will display information to the user. There is a table with updated standings, with all teams from the league where the favorite team is playing. The result will update accordingly, when the user navigate through fixtures using `next` and `prev` buttons.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![SASS][SASS]][SASS-url]
* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Express][Express]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

You need to make sure that you have the latest version of npm.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Get a free API Key at [https://www.api-football.com/](https://www.api-football.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   
4. Create a file and name it `.env`. Paste your API key as a variable.
```js
API_KEY=<YOUR_API_KEY>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run the app:
```sh
node server.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Future possible updates

- [ ] Implement User Authentication
- [ ] Store user's favorite team in local storage





<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: http://expressjs.com/
[SASS]:https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[SASS-url]:https://sass-lang.com/
