





![title1](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/cc25e0db-4175-4655-b3ff-1e4d4f50e32e)

<br><br>

<!-- project philosophy -->
![title2](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/59a0d8b4-eef1-4ef5-a55e-b20641a40177)

> AI interview analyzer will take your interview video(s) to provide you with the best candidate(s) for your company. 

>The problem this project is trying to solve is the difficulty of assessing candidates' skills and attitudes during interviews.

>So AI solved the issue with its ability to analyze how well the candidate(s) performed , it will solve the problem by extracting the questions and the answers of the interview, analyzing it, and giving you a repor

### User Stories
- Talent analyzer is an AI powered analyzer that will take your interview video(s) to provide you with the best candidate(s) for your company. The problem this project is trying to solve is the difficulty of assessing candidates' skills and attitudes during interviews.

- So AI solved the issue with its ability to analyze how well the candidate(s) performed , it will solve the problem by extracting the questions and the answers of the interview, analyzing it, and giving you a report.


<br><br>

<!-- Prototyping -->
![title3](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/df41e4b4-083f-47ea-ac16-804bfae13d09)

> We designed Talent Analyzer using wireframes , iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![](<Sign in Page (1).jpg>) | ![](<Sign out Page.png>) | ![](<Group 21 (1).png>) |


<br><br>

<!-- Implementation -->
![title4](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/9378b8ed-1fe3-450d-b028-8d650923fb00)

> Using the wireframes as a guide, we implemented the Talent Analyzer Website with the following features:

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![](<2023-09-25 - 01-10-44 - React App.png>) | ![](<2023-09-25 - 01-13-26 - React App.png>)   | ![](<2023-09-25 - 01-18-07 - React App.png>) |![Alt text](<2023-09-25 - 01-50-33 - React App.png>)  |
| Candidate Profile | Upload Video | Recruiter Preference | AI Result |
|![](<2023-09-25 - 02-22-48 - React App.png>) | ![](<2023-09-25 - 02-24-19 - React App.png>) |![](<2023-09-25 - 02-25-12 - React App.png>) | ![](<2023-09-25 - 02-26-31 - React App.png>)
| My Candidates| Compare | Compare Result | Admin CRUD |
|![](<2023-09-25 - 02-29-07 - React App.png>) | ![](<2023-09-25 - 02-30-47 - React App.png>)|![](<2023-09-25 - 02-34-31 - React App.png>)|![](<2023-09-25 - 02-36-22 - React App.png>)



<br><br>

<!-- Tech stack -->
![title5](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/3e53eac4-8846-41f2-902b-c7f5c57b7844)
###  Talent Analyzer is built using the following technologies:

- Talent Analyzer is a cutting-edge platform that leverages modern technology stacks to streamline the candidate evaluation process. Our goal is to empower organizations with a comprehensive solution for assessing and analyzing potential talents efficiently.


> Key Technologies Used:
- React: The frontend of Talent Analyzer is built using React, a highly popular JavaScript library for building user interfaces. This ensures a responsive and dynamic user experience.

- Laravel (Backend): Our robust backend infrastructure is powered by Laravel, a PHP framework known for its performance and flexibility. It handles data processing, user authentication, and API integration seamlessly.

- MySQL: We rely on MySQL as our database management system to store and manage candidate data securely. It provides scalability and reliability for large datasets.

- OpenAI Integration: Talent Analyzer harnesses the power of OpenAI to analyze candidate performance and provide valuable insights. This integration enhances decision-making by utilizing AI-driven data analysis.

- Electron JS: To make Talent Analyzer accessible as a standalone application, we use Electron JS. This technology allows us to package the website as a desktop app for an enhanced user experience.

<br><br>

<!-- How to run -->
![title6](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/d1ab7f4f-12eb-4010-bda3-34a1b5ebecca)

> To set up Talent Analyzer locally, follow these steps:

### Prerequisites


* npm
  ```sh
  cd talent-front
  npm install
  ```
* composer
  ```sh
  cd talent-sever    
  composer install
  cp .env.example .env
  php artisan key:generate
  php artisan migrate
  php artisan jwt:secret
  php artisan storage:link

  ```
### Installation



1. Get a paid API Key at [https://openai.com/pricing](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/CharbelAllawi/Talent-Analyzer
   ```

4. Enter your API in `.env`
   ```js
   const OPENAI_API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Talent Analyzer locally and explore its features.