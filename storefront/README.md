<p align="center">
  <a href="https://medusajs.com/">
    <img alt="Medusa" src="https://i.imgur.com/Tk4Q9P3.png" width="200" />
  </a>
</p>
<h1 align="center">
  Medusa Express
</h1>
<p align="center">
Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences.
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

<br/>

**Prerequisites**: To use Medusa Express, you need a Medusa server. Check out [medusa-starter-default](https://github.com/medusajs/medusa-starter-default) for a quick setup.

<br/>

## 🚀 Get started!

### 1. Create your Medusa Express project

```zsh  
  gatsby new medusa-express https://github.com/medusajs/medusa-express-gatsby
  
  # or with npx
  
  npx gatsby new medusa-express https://github.com/medusajs/medusa-express-gatsby
  
  # or via Git

  git clone https://github.com/medusajs/medusa-express-gatsby.git medusa-express
```

### 2. Install dependencies

```zsh
  cd medusa-express
  
  yarn
  # or
  npm install
```

### 3. Link your Medusa server

In your project, you should have a `.env.template` file with the following content:

```shell
GATSBY_MEDUSA_BACKEND_URL=http://localhost:9000
```

Copy the template into a file used for local development:
```zsh
mv .env.template .env.development
```

Your Medusa server runs locally on port 9000 by default. Make sure to update the above environment variable, if you've changed the port.

### 4. Try it out!

Start up both your Medusa server and Medusa Express and try it out!

Medusa Express is running at `http://localhost:8000`!

> **Important**: Medusa Express requires existing product. Either seed your Medusa server with some dummy products, or create your own through Medusa Admin.
