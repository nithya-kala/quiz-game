# Quiz game

This is a quiz game in the form of a browser application. The goal of the quiz game is to gather as many points as possible before making 3 mistakes.

## API

Question and Answer Set is fetched from the below API.

```
https://eok9ha49itquif.m.pipedream.net
```

## Getting Started

To get started (needs atleast nodejs version >= v16)

```
npm i
npm run dev # runs project
npm run test # executes the unit test cases
```

## Project structure

```
├── src
│   ├── App.css             // css file
│   ├── App.tsx             // Page that displays play area
│   ├── main.tsx            // entry file
│   ├──.components
│   │  ├──  PlayArea.tsx    // Displays the play card and score board
│   │  ├──  Themer.tsx      // Toggles between day and night mode
│   │  ├──  PlayCard        // Displays the question, answer and submit button
│   │  └──  ScoreBoard      // Displays the score and number of lives
│   └── QuestionBank.ts     // Fetch the question set from API URL and returns the unique question

├── .vscode
│   └── settings.json       // prettier & formatOnSave settings (DX)
...
└── tsconfig.json
```

## Demo

https://nithya-kala.github.io/quiz-game/
