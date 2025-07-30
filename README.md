# Backstage Playground

This is a [Backstage](https://backstage.io) application playground for learning and experimentation. Backstage is an open platform for building developer portals, created by Spotify.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 20 or 22 (as specified in package.json)
- **Yarn**: Version 4.4.1 or later (package manager)
- **Git**: For version control

### Installing Node.js

If you don't have Node.js installed:
- Download from [nodejs.org](https://nodejs.org/)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 20
  nvm use 20
  ```

### Installing Yarn

This project uses Yarn v4. If you don't have Yarn installed:
```bash
npm install -g yarn
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrei-ivanovici/backstage-playground.git
   cd backstage-playground
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

   This will start both the frontend and backend applications. The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:7007`.

## Project Structure

```
backstage-playground/
├── packages/
│   ├── app/          # Frontend React application
│   ├── backend/      # Backend Node.js application
│   └── README.md
├── plugins/          # Custom Backstage plugins
├── examples/         # Example configurations
├── app-config.yaml   # Main configuration file
└── package.json      # Root package configuration
```

## Available Scripts

- `yarn start` - Start the development server (both frontend and backend)
- `yarn build:all` - Build all packages for production
- `yarn build:backend` - Build only the backend
- `yarn build-image` - Build Docker image for the backend
- `yarn test` - Run tests
- `yarn test:all` - Run all tests with coverage
- `yarn test:e2e` - Run end-to-end tests with Playwright
- `yarn lint` - Run linting on changed files
- `yarn lint:all` - Run linting on all files
- `yarn prettier:check` - Check code formatting
- `yarn clean` - Clean build artifacts
- `yarn new` - Create new Backstage components

## Configuration

The main configuration file is `app-config.yaml`. This file contains:
- Database settings
- Authentication providers
- Catalog locations
- Plugin configurations

For production deployment, use `app-config.production.yaml`.

## Development

### Adding New Components

To create new Backstage components:
```bash
yarn new
```

This will guide you through creating new packages, plugins, or other Backstage components.

### Running Tests

```bash
# Run all tests
yarn test:all

# Run end-to-end tests
yarn test:e2e
```

### Code Quality

This project includes several code quality tools:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

Run code quality checks:
```bash
yarn lint:all
yarn prettier:check
yarn tsc
```

## Docker

The following commands will build a Docker image tagged as `backstage-playground` and run it:

```bash
# Build Docker image with explicit tag
docker build -t backstage-playground .
```

Alternatively, you can use the yarn script (but the image name may vary):
```bash
# Build Docker image using yarn script
yarn build-image
```

Once built, run the container:
```bash
# Run the container
docker run -p 7007:7007 backstage-playground
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`yarn test:all && yarn lint:all`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Resources

- [Backstage Documentation](https://backstage.io/docs)
- [Backstage Community](https://backstage.io/community)
- [Getting Started Guide](https://backstage.io/docs/getting-started/)
- [Plugin Development](https://backstage.io/docs/plugins/)

## Troubleshooting

### Common Issues

**Node.js version mismatch:**
- Ensure you're using Node.js 20 or 22
- Use `node --version` to check your current version

**Yarn installation issues:**
- Clear yarn cache: `yarn cache clean`
- Delete `node_modules` and reinstall: `rm -rf node_modules && yarn install`

**Port conflicts:**
- Frontend (3000) or backend (7007) ports are already in use
- Kill existing processes or modify ports in `app-config.yaml`

**Build failures:**
- Check TypeScript errors: `yarn tsc`
- Ensure all dependencies are installed: `yarn install`

## License

This project is part of the Backstage ecosystem. Please refer to the original Backstage license for usage terms.
