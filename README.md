# <span align="center"><samp>Forkify</samp></span>

Forkify is a web application that allows users to search, view, and manage recipes from an external API. It demonstrates modern JavaScript development practices, modular architecture, and dynamic UI rendering.

This project is based on _The Complete JavaScript Course 2025: From Zero to Expert_ by Jonas Schmedtmann. Educational repository. Not intended for production use.

## Tech Stack

-   **JavaScript (ES6+)**: Modular code structure using classes and modules
-   **Parcel**: Module bundler for development and production builds
-   **HTML/CSS**: Responsive, semantic markup with styled components
-   **API Integration**: Fetching recipes from a public API
-   **State Management**: Centralized state handling for recipes, bookmarks, and search results

## Structure

-   **Model**: Handles data fetching, state management, and data transformation
-   **View**: Responsible for rendering UI components and handling user interactions
-   **Controller**: Connects models and views, orchestrating application flow

## Installation / Usage

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd forkify
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run development server:

    ```bash
    npm start
    ```

4. Build for production:
    ```bash
    npm run build
    ```
