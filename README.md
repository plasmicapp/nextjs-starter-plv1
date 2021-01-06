[![Netlify Status](https://api.netlify.com/api/v1/badges/182806a7-44de-4c6a-97aa-9341fcfe37df/deploy-status)](https://app.netlify.com/sites/plasmic-nextjs-starter-blog/deploys)

# A statically generated blog example using Plasmic, Next.js and Markdown

This example showcases using Plasmic with Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://plasmic-nextjs-starter-blog.netlify.app/](https://plasmic-nextjs-starter-blog.netlify.app/)

## 🚀 Quick start

1.  **Create a Next.js site.**

    Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

    ```bash
    yarn create next-app --example https://github.com/plasmicapp/nextjs-starter my-app
    # or
    npx create-next-app --example https://github.com/plasmicapp/nextjs-starter my-app

    cd my-app/
    ```

1. **Authenticate with Plasmic**

    Run the following to authenticate your system

    ```bash
    npx -p @plasmicapp/cli plasmic auth
    ```

1. **Clone a Plasmic project starter**

    Log into [Plasmic](https://studio.plasmic.app/),
    click on "New Project",
    and clone one of the starter projects into your own workspace.
    We recommend the "Starter Blog" project.

    ![dashboard](https://docs.plasmic.app/static/new-project-modal-20e03cbd03100f253f484cfc6b1b9f31.png)

    When you do, note the `PROJECT_ID` in the URL (e.g. `https://studio.plasmic.app/projects/PROJECT_ID`).
    Please check that you have write-access to the project,
    otherwise you may be referencing read-only components.

    _Note: This should work with any other website template, but you may need to delete `containerContents` in `index.js`. This relies on `ListItem`, which only exists for the Starter Blog._

1. **Configure PlasmicLoader.**

    Open `next.config.js` and update the plugin configuration for `@plasmicapp/loader`
    with the project ID of your newly cloned project.

    ```js
    const plasmic = require("@plasmicapp/loader/next");
    const withPlasmic = plasmic({
      projects: ["PROJECT_ID"], // An array of project to sync.
    });

    module.exports = withPlasmic({
      // Your NextJS config.
    });
    ```

## How to use

Your website should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, ask for help on our [community Slack](https://plasmic.app/slack).

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Learning Plasmic

- Full Plasmic documentation lives at our [learning portal](https://www.plasmic.app/learn/).
- **For most developers, we recommend starting with our [quickstart](https://www.plasmic.app/learn/quickstart/).

### To deploy with Netlify

We already have a default `netlify.toml` config file for you.
Remember to go into your Netlify project settings and set the following environment variables:
- PLASMIC_AUTH_USER
- PLASMIC_AUTH_TOKEN

[Reference](https://rhnmht30.dev/blog/next-image-with-netlify)
