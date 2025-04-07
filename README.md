# Hangman Game

This is a fully functional Hangman game built using React and Vite. It features both single-player and multiplayer modes, along with a well-structured UI built using Tailwind CSS.

## Features

- **Home Page**: Navigate between game modes.
- **Single Player Mode**: The game automatically provides a word and hint fetched from a JSON server.
- **Multiplayer Mode**: One player inputs a secret word and hint for the other to guess.
- **Game Play**:
  - Players guess letters to reveal the hidden word.
  - Win/Lose alerts appear when the game ends.
- **React Features Used**:
  - `useState`
  - `useEffect`
  - `useContext`
  - `useLocation`
  - `zustand`
  - `react-router-dom`
  - `navigator`
- **Styling**: Tailwind CSS is used for a clean UI.
- **Backend**: A simple JSON server provides words and hints for single-player mode.
- ### **Design Pattern: Presenter-Container**  
   **Implemented the Presenter-Container design pattern** to separate UI logic from business logic, making the codebase more modular and maintainable.  
   **Container components** handle data fetching, state management, and business logic.  
   **Presenter components** focus on rendering UI elements.  

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/hemant-kushwaha/Understanding-React-with-Hangman.git
cd Understanding-React-with-Hangman
npm install
```

## Running the Project

Start the development server:

```sh
npm run dev
```

If using the JSON server for single-player mode, start it with:

```sh
npx json-server --db.json--
```

## Usage

1. Open the app in the browser.
2. Choose **Single Player** or **Multiplayer** mode.
3. In Single Player, start guessing the word using the on-screen keyboard.
4. In Multiplayer, Player 1 inputs a word and hint, and Player 2 guesses.
5. The game alerts you when you win or lose.
