# Pisa Pizza Schwaig (Website)

> Production: https://test.pisa-pizza.de

> Development: https://dev-pisapizza.github.io/pisa-pizza/develop

## Installation

1. Install **NodeJS >= v18.13.0** on your machine (e.g. with [NVM](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe))
2. Checkout the repository
3. Install dependencies `npm install`
4. Start the development server with `npm start`

## Menu

To change the menu (items, prices, descriptions, ...), edit the following files, commit and push.

- Packages: [src/app/packages/packages.ts](src/app/packages/packages.ts)
- Pizzas: [src/app/pizzas/pizzas.ts](src/app/pizzas/pizzas.ts)
- Pastas: [src/app/pastas/pastas.ts](src/app/pastas/pastas.ts)
- Salads: [src/app/salads/salads.ts](src/app/salads/salads.ts)
- Drinks: [src/app/drinks/drinks.ts](src/app/drinks/drinks.ts)
- Announcements: [src/app/announcements/announcements.ts](src/app/announcements/announcements.ts)

## Deployment

### Development Environment

> [https://dev-pisapizza.github.io/pisa-pizza/develop](https://dev-pisapizza.github.io/pisa-pizza/develop)

Deploying to the development environment is easy, just commit and push to the **develop** branch. The CI/CD will deploy automatically to GitHub Pages 🚀.

### Production Environment

> [https://test.pisa-pizza.de](https://test.pisa-pizza.de)

1. Checkout the `develop` branch locally.
2. Add your changes: `git add .`
3. Commit your changes: `git commit -m "add new feature"`
4. Run deploy script: `npm run deploy-prod`
5. The final step will trigger the CI process, and the changes will become available on the production environment shortly after 🚀.
