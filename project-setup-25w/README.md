# Instruction
## Required
- **Backend** (npm i for dependencies in /backend)
    - Node >= v22.16.0
    - NPM >= v10.2.3
- **Frontend** (npm i for dependencies in /frontend)
    - Angular >= 21
- **Database**
    - Docker Desktop
    - PostgreSQL > 15
    - PgAdmin 4
### Backend
- Install dependencies (``npm i ``)
- Create Express app
- Connect Express app with Postgres Database
- Define authentication to prevent accessing specific routes without authorization (not in this example)
### Database
- You can create a SQL script like in the previous assignments and import it using psql or PgAdmin
- Another approach: **Docker Compose**
  - Needed: **Docker Desktop**  (has to run in background)
  - Specify ``docker-compose.yml`` structure & database handling (here in initdb folder)
  - Populate database using: ``docker compose up -d``
  - Delete database: ``docker compose down -v``
- In this example you have to manually create a database in pgAdmin:
  - Database Hostname/address: **localhost**
  - Database Port: **5433**
  - Database Username: **postgres**
  - Add new PostgresSQL database in this server:
    - Database Name: **postgres**
    - Database Password: **postgres**
### Frontend (with Tailwind CSS)
- Add latest version of Angular CI: ``npm install -g @angular/cli@latest``
- Create new Angular (>=21) application: ``ng new <name>``
  - Select **Tailwind CSS** (you can also select CSS and install Tailwind CSS later)
  - Choose if you want to use SSR and SSG (https://www.telerik.com/blogs/angular-basics-ssr-ssg-partial-hydration-angular-18) (here not necessary, CSR (Client Side Rendering) is sufficient)
  - If you want to install Tailwind CSS afterwards, follow these steps, otherwise skip them (https://tailwindcss.com/)
    - ``npm install tailwindcss @tailwindcss/postcss postcss --force``
    - Create a `.postcssrc.json` file in the root of the project and add the following:
    ```json
      {
      "plugins": {
        "@tailwindcss/postcss": {}
        }
      }
    ```
    - Add ``@import "tailwindcss";`` to ``./src/styles.css``
- **Additional changes for our example:**
  - Creating child components with: ``ng g c /components/bikes.component --standalone`` and ``ng g c /components/bike.component --standalone``
  - Creating page component (optional) with: ``ng g c /pages/bikes --standalone`` (Here: not necessary but good abstraction when using navbar & footer)
    - Add all components you need into the page component. The page gets displayed.
    - **Hint:** Rename the selector of components e.g. to ``xx-component`` instead of ``app-xx`` to separate from the pages.
    - **Hint2:** Remove the "Component" part of the pages classes to distinguish between the components.
  - **Routing**
    - In **app.routes** you can set specific routes: ``{path: '', component: BikesComponent},``
  - Now we set that our **app.html** will use the router-outlet to handle routes: ``<router-outlet></router-outlet>`` (app.html)
  - Now we define an interface for our bikes: ``ng g i /types/bike``
    - Here we define all fields, that bike can have (see database schema)
    - Here: ``bike_id, bike_name, is_avaiable, size, price``
  - Creating Service: ``ng g s /services/bikes.service``
    - Connect service with your components (see Angular guide or example)
  - Using **HTTPClient** to execute REST queries and handling requests by using observables.
    - **Important:** You have to add ``provideHttpClient()`` to the providers in ``app.config.ts``

# Execution
- Start **pgAdmin/postgres** and **Docker Desktop**
- Create and populate database tables with ``docker-compose up -d``
- Check out /backend folder
    - Start backend with **node server.js**
- Check out to /frontend folder
    - Start frontend with **ng serve --open**