# Task Manager Angular

A modern, feature-rich task management application built with Angular. This application helps users organize, track, and manage their tasks efficiently with an intuitive user interface.

## 📋 Project Features

- **Task Creation & Management**: Create, edit, and delete tasks with ease
- **Task Status Tracking**: Mark tasks as complete or incomplete
- **Priority Levels**: Assign priority levels (High, Medium, Low) to tasks
- **Task Filtering**: Filter tasks by status and priority
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant UI updates when task status changes
- **Local Storage**: Tasks are persisted in the browser's local storage
- **Clean & Intuitive UI**: User-friendly interface for managing tasks

## 🛠️ Technology Stack

- **Frontend Framework**: [Angular](https://angular.dev/) v21.2.8
- **Language**: TypeScript
- **Styling**: CSS/SCSS
- **Testing**: 
  - Unit Testing: [Vitest](https://vitest.dev/)
  - E2E Testing: Angular CLI compatible frameworks
- **Build Tool**: [Angular CLI](https://github.com/angular/angular-cli) v21.2.8
- **Node.js**: Required for running Angular CLI commands

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MohamedAlii59/task-manager-angular.git
cd task-manager-angular
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 🔨 Building

To build the project for production, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 📝 Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## 🧪 Running Tests

### Unit Tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

### End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 📚 Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Angular documentation, visit [Angular Documentation](https://angular.dev).

## 📄 License

This project is open source and available under the MIT License.
