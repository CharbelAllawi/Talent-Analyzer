



![title1](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/cc25e0db-4175-4655-b3ff-1e4d4f50e32e)

<br><br>

<!-- project philosophy -->
![title2](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/59a0d8b4-eef1-4ef5-a55e-b20641a40177)

> Talent analyzer is an AI powered analyzer that will take your interview video(s) to provide you with the best candidate(s) for your company. The problem this project is trying to solve is the difficulty of assessing candidates' skills and attitudes during interviews.

>So AI solved the issue with its ability to analyze how well the candidate(s) performed , it will solve the problem by extracting the questions and the answers of the interview, analyzing it, and giving you a report.

### User Types 

1. Admin 
2. Recruiter

### Features of the App 

As an Admin: 
- I want to perform CRUD operation so, i can manage the website.

As a Recruiter:
- I want to register an account on the website, so that i can login and use the features of the website.
- I want to log in to the website and upload an interview video so that i get a report & analytics about the candidate.
- I want to change the website language, so i can understand what's going on.
- I want to upload several interview videos, so that i compare candidates.
- I want to be able to review previous interview analysis, so i can refresh my memory.
- I want to be able to select preferences after uploading video, so i can find the candidate needed.
- I want to edit / delete candidates, so i can remove mistakes.



<br><br>

<!-- Prototyping -->
![title3](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/df41e4b4-083f-47ea-ac16-804bfae13d09)

> We designed Talent Analyzer using wireframes , iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
|![Sign in Page (1)](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/d047c42c-02c5-4509-9860-ff6735dfd1df) |![Sign out Page](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/b9c186cf-3d35-40c5-8a61-17ebd4cff47c) |![Group 21 (1)](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/8243de63-a720-4474-ae68-ffdaaed9a82a)|


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
<!-- Implementation -->
![Frame (3)](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/807aff20-a61d-4192-8072-de2c4cd70ab5)

> Using the wireframes as a guide, we implemented the Talent Analyzer Website with the following features:

### Website Screens

| Login screen  | Landing screen | Loading screen 
| ---| ---| ---|
|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/fde7e938-5171-41a5-8174-b30957b59ea9" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/5df811d9-e34a-4b48-9a52-305d034f6e79" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/7a6eab61-5966-40a1-b3d2-8412a58704f2" width="250" height="150">
| Candidate Profile | Upload Video | Recruiter Preference |
| ---| ---| ---|
|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/18b83959-8650-4ba6-9fe8-3470d5e8e8e3" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/d870d44a-a203-4867-8beb-5324c5437fe5" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/c1a883d8-56c5-41af-821c-6c994618d9e5" width="250" height="150">

| My Candidates| Compare | Compare Result | 
| ---| ---| ---|
|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/9774d373-d8fc-4dd1-8d81-13f063ae27e0" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/02930642-bc48-4340-afaf-3038caf7fa39" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/0d6f860f-4b4c-49d0-97e8-adcf87bb974d" width="250" height="150">
|  Multi-Language screen |  AI Result |Admin CRUD |
|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/25afe2c5-80e0-4ba0-8c32-f498a206e15e" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/60a3482f-0d7a-4551-9da8-4d4b40f93c66" width="250" height="150">|<img src="https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/94ee3df6-c9b0-4883-ab6c-14ce87d94a1d" width="250" height="150">

<br><br>

![Frame (2)](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/f324021e-c0b4-41df-aba5-c3a184baba6a)
<br><br>
Candidate Prediction example: 
<br><br>
```sh 
  {
  candidate_id: '1',
  result: 'The software engineer candidate exhibits a strong blend of technical expertise and problem-solving skills. They have a robust background in software development, evident from their extensive experience with multiple programming languages, including Java, Python, and JavaScript. Their proficiency in these languages, combined with their familiarity with various development frameworks and tools, positions them as a versatile engineer capable of adapting to diverse project requirements.Furthermore, the candidate demonstrates a deep understanding of software architecture and design principles, showcasing their ability to craft efficient and scalable solutions. Their experience in working on cross-functional teams and collaborating with other developers, designers, and stakeholders highlights their excellent interpersonal and communication skills, crucial for successful project execution. The candidate's commitment to continuous learning and professional growth is evident through their participation in online courses, attending tech conferences, and staying updated with industry trends. This proactive approach to self-improvement aligns well with the ever-evolving nature of the software engineering field, ensuring their ability to remain adaptable and innovative in a rapidly changing environment.Overall, the software engineer candidate presents a compelling combination of technical prowess, collaborative aptitude, and a dedication to personal and professional development, making them a strong contender for any software engineering role.",
  candidate_skills:{Python:30,Full-Stack Development:25,Security:40}
}
```
<br><br>
<!-- Tech stack -->
![Frame](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/80212da1-a91f-4761-ad5a-44943166b025)



![image](https://github.com/CharbelAllawi/Talent-Analyzer/assets/108435865/3bcd2e7f-e68d-40d4-8b2b-90a40d3c50a7)

In this project, I've achieved lightning-fast database query performance using Postman. I was able to retrieve 1000 candidate records from my database in a quick 965 milliseconds. This remarkable speed not only enhances user experience but also demonstrates the efficiency and optimization of my database queries.


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
