Repo of [Kixlab's redesigned website](https://www.kixlab.org/).

# Getting Started

## Adding Content

**Please don't commit directly to master. Instead, create a pull request (PR) and then notify the website czar.**

1. Create a new branch from master: `git checkout -b my-branch-name`
2. Add and commit your changes. `git status` to check what you did, `git add ...` to add new files, `git commit -m "Put a comprehensive summary of your changes here"`
3. Push your new branch: `git push` (depending on your settings, git will complain and tell you what to do instead).
4. Go to https://github.com/kixlab/kixlab.github.io and create a new Pull Request for your branch.
5. Someone with authority will go on and merge your changes.

### People

1. Go to `src/data/members.ts`
2. Add a new element object, following the format of the others.
3. For the picture, please choose an image with 1:1 aspect ratio like the others. (Suggested size: 500x500px). Place the file inside `public/images/members/` and rename it to your name.

### News

1. Go to `src/data/posts.ts`
2. Add a new element object at the top of the list. Follow the format as indicated in lines 1-8.
3. If you have long text or images, you can create a separate .md file in `public/posts` and enter the path to the `contentMdFilePath` field.
    * If you need to include pictures, place the file inside `public/images/posts/` and include it in your .md file. (e.g., `2018-06-29-manyideas-report.md`)

### Publications

1. Go to `src/data/publications.ts`
2. Add a new element object, following the format of others.
3. ???

## Development

First, clone this repo. Then, run the following:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
