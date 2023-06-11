# My React App

This is a React application built with React Router Dom for routing and Tailwind CSS for styling. It includes reusable components such as buttons, containers, form inputs, radio groups, job cards, and a multi-step job card form. The application follows a specific folder structure for organizing the codebase.

## Local Setup

To run the app locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone git@github.com:sonu-kumar2001/great-vibes-assignment.git
   ```

2. Navigate to the project directory:

   ```shell
   cd my-react-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Folder Structure

The project follows the following folder structure:

- `src`: The root folder for the source code.
  - `assets`: Contains project-specific assets.
    - `images`: Holds images used in the application.
    - `stylesheets`: Contains CSS and SCSS files for styling.
      - `main.scss`: The main SCSS file for defining global styles and stylesheets for the pages.
  - `components`: Contains reusable components used throughout the app.
    - `common`: Holds common components like buttons, containers, form inputs, and radio groups.
    - `job-card`: Contains the job card component logic.
    - `multistep-job-card`: Contains the multi-step job card form component logic.
  - `pages`: Holds components representing different pages of the application.
    - `landing-page`: Contains the landing page component, which includes the multi-step job card and job card components.

## Key Packages

The project utilizes the following key packages:

- [React Router Dom](https://reactrouter.com/web/guides/quick-start): Provides declarative routing for the application.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for styling the components.
- Other packages can be found in the `package.json` file.

## Additional Configuration

- `tailwind.config.js`: Contains Tailwind CSS configuration, including colors used throughout the components.
