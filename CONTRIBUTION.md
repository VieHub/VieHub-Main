# Starting dev server

```bash
docker compose -f compose.dev.yml up
```

client will be up on http://localhost:4173

server will be up on http://localhost:8000

# On how to start the server / client only (not both), look into the respective CONTRIBUTION guide on the folder:

- server [server CONTRIBUTION.md](./server/CONTRIBUTION.md)
- client [client CONTRIBUTION.md](./client/CONTRIBUTION.md)

# On testing

Testing done individually on each folder (./client or ./server). Please refer to respective CONTRIBUTION.md (server or client)

# Issue on github

Here's a quick step by step on what to do for making a contribution

1. Create / find an issue you would like to solve [here](https://github.com/orgs/FINGU-GRINDA/projects/11)

   ![Alt text](./docs/image.png)
   ![Alt text](./docs/image2.png)

2. Drag the issue to 'in progress' and assign the issue to yourself

   ![Alt text](./docs/image3.png)

3. Create a branch, by clicking on the 'create a branch' button

   ![Alt text](./docs/image4.png)
   ![Alt text](./docs/image5.png)

4. Checkout the branch you just created in your local git

   ![Alt text](./docs/image6.png)
   ![Alt text](./docs/image7.png)

5. Code your contribution, add some test if needed (probably won't be needed for this project, just make sure it's running fine)

6. Commit your changes, can be once or multiple commit refer to [semantic commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) on how to write your commit message. Or you can use write the following in your terminal.

```bash
npx czg
```

7. Push your changes to your branch upstream

8. Create a pull request

   ![Alt text](./docs/image8.png)

9. Tag everyone as reviewers, and assign yourself as assignee

   ![Alt text](./docs/image9.png)

10. Wait for the CI to run, if it's all green merge your branch to alpha branch

    - In case of failing CI, click to check the details, and try to fix it, tag other people or message in slack if needing help
      ![Alt text](./docs/image10.png)
    - In this case apparently the linting failed on client side, we need to fix that
      ![Alt text](./docs/image11.png)

11. After all checks have been satisfied (green), merge and squash the pull request
    ![Alt text](./docs/image12.png)

12. Make sure the title of the commit adheres to [semantic commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) or

```bash
npx czg
```

    ![Alt text](./docs/image13.png)

13. Congratz you're done! 🎉

## Thank you for contributing!

1. Edge cases:
   - when you added a new env, CI will fail because you need to add the env to the github where the CI is performed
     - in repo secrets, check and update CLIENT_ENVFILE_DEV and SERVER_ENVFILE_DEV for the env values
   - sometimes check will always fail due to we running out of free runner quota for the month from github
2. Sometimes a single issue need to be solved through several branches merge. You can reopen issue, and attach additional branch to the issue.
3. These contribution.md are not a hard rule, but it's good to be organized. Feel free to change the rules or suggest a better approach :D.
4. Happy dev ing and good luck !
