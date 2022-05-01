<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center"><a href="http://www.plokkari.is">plokkari.is</a></h3>

  <p align="center">
    plokkari.is: A visualization mapping tools for plogging community
    <br />
    <a href="https://en.wikipedia.org/wiki/Plogging"><strong>What is plogging? »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=a_yvKCqV1QE">View Demo</a>
    ·
    <a href="https://github.com/Landnemi/Plogg-In/issues">Report Bug</a>
    ·
    <a href="https://github.com/Landnemi/Plogg-In/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Programming in the 21st century is a great power, and with great power, must also come great responsibility. Countless non-profit communities around us need our support. The plogging community is just one of many. With the right platform, people are free to define their goals and to visualise their achievements. 

<p align="right">(<a href="#top">back to top</a>)</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Built With

#### Frontend

* [Next.js](https://nextjs.org/)
  * [h3-js](https://github.com/uber/h3-js)
  * [react-leaflet.js](https://react-leaflet.js.org/) 
  * [react-leaflet-draw](https://github.com/alex3165/react-leaflet-draw)
  * [lottie-web](https://lottiefiles.com/)

#### Backend

* [ASP.NET](https://dotnet.microsoft.com/en-us/download/dotnet/5.0)
  * AutoMapper
  * Dapper
  * Newtonsoft.Json
  * Npgsql
  * pocketken.H3
  * Swashbuckle.AspNetCore
   
#### Database

* [PostGIS](https://postgis.net/)
* [PostgreSQL](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Frontend

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend

### Database

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
 
- [ ] Create a folder structure
- [ ] Create pull_request_template.md
- [ ] Stardardize code with Typescript
- [ ] Create docker files for frontend and backend
- [ ] Create docker-compose
- [ ] Create a api route in Nextjs
- [ ] Add test case (unit test(jest...), end-to-end test(Cypress...))
- [ ] Localization
  - [ ] Icelandic
  - [ ] English
  - [ ] ...
- [ ] Create a UX/UI with Figma (*)
  - [ ] Cookies bar
  - [ ] Introduction/tutorial window
  - [ ] Search bar
  - [ ] Timeline (show accomplishment back in time)
  - [ ] User login page
  - [ ] status page
  - [ ] Sharing window

See the [open issues](https://github.com/Landnemi/Plogg-In/issues) for a full list of proposed features (and known issues). If feature does not exist please create one.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Features -->
## Features for the future (Dificulty level: 1-easy, 2-medium, 3-hard)

### 1

- [ ] Implement UX/UI from Figma (*)
- [ ] Different sizes of hexagons depend on each zoom level
- [ ] Locations where to leave behind trash bags for the city to pick up

### 2


- [ ] User Login with (Facebook, Google and island.is)
- [ ] Share content to Facebook
- [ ] GPS path Tracking
- [ ] Predefined picking area (drawing tools)

### 3

- [ ] Game development
- [ ] Create teams
- [ ] expand to other contires or mini communities

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Guolin Fang - Email - guolin19@ru.is

Benedikt Þórðarson - Email - benedikthth@ru.is

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

[Ikigai: The Japanese Secret to a Long and Happy Life](https://www.amazon.com/Ikigai-Japanese-Secret-Long-Happy/dp/0143130722)
[Uber H3-js](https://eng.uber.com/h3/)
[Volodymyr Agafonkin](https://leafletjs.com/)
And more to come!

