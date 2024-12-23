Repo of [KIXLAB's redesigned website](https://www.kixlab.org/).

# How to Contribute

## Initializing & Running The Repo

Run the following commands:

1. `git clone https://github.com/kixlab/website.git`
2. `yarn && yarn setup-checkers` <= setup-checkers sets up type checkers & linters so that you can catch any typescript & style errors at commit time.
3. `yarn dev` <= launch a local dev build

## Adding Content / Creating Pull Requests

**Please don't commit directly to master. Instead, create a pull request (PR) and then notify the website czar.**

1. Create a new branch from master: `git checkout -b my-branch-name`
2. Add and commit your changes. `git status` to check what you did, `git add ...` to add new files, `git commit -m "Put a comprehensive summary of your changes here"`
3. Push your new branch: `git push` (depending on your settings, git will complain and tell you what to do instead).
4. Go to https://github.com/kixlab/website and create a new Pull Request for your branch.
5. Someone with authority will go on and merge your changes.

### People

1. Go to `src/data/members.ts`
2. Add a new entry at the top of `MEMBERS`. Follow the format as indicated in `interface Props`. \*\*NOTE: Make sure to enter the key value in the format of `[firstName][lastname]`. No middle names or aliases. (e.g., Alex Tio Suryapranata => `alexsuryapranata`)
3. For the picture, please choose an image with 1:1 aspect ratio like the others. (Suggested size: 500x500px). Place the file inside `public/members/` and rename it to your name. Make sure it matches _exactly_ what you wrote in the `img` field in `members.ts`, including the extension.

### News

1. Go to `src/data/posts.ts`
2. Add a new entry at the top of `POSTS`. Follow the format as indicated in `interface Props`.
3. If you have long text or images, you can create a separate .md file in `public/posts` and enter the path to the `contentMdFilePath` field.
   - If you need to include pictures, place the file inside `public/posts/postImages` and include the path in your .md file. (e.g., `2018-06-29-manyideas-report.md`)

### Publications

1. Go to `src/data/publications.ts`
2. Add a new entry at the top of `PUBLICATIONS`. Follow the format as indicated in `interace Props`.
3. For authors, make sure that KIXLAB members are inputted as `MEMBERS.[firstnamelastname]` (e.g., `MEMBERS.alexsuryapranata`)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
