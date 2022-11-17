import shell from "shelljs";
import chalk from "chalk";
import inquirer from "inquirer";
shell.echo(
  chalk.white(chalk.bold(`Welcome to the ${chalk.red("rollup-setup")} tool!`))
);

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "manager",
      choices: ["npm", "yarn"],
      message: "Choose a package manager (npm || yarn)",
    },
    {
      type: "list",
      name: "navigation",
      choices: ["bottom", "drawer"],
      message: "Choose navigation type (drawer || bottom)",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    if (answers.manager === "npm") {
      shell.exec(`npm i`);
    }
    if (answers.manager === "yarn") {
      shell.exec(`yarn`);
    }
    if (answers.navigation === "drawer") {
      shell.cp("-R", "./templateConfig/drawer/*", ".");
    } else {
      shell.cp("-R", "./templateConfig/tab/*", ".");
    }

    console.log(chalk.greenBright("Successfully configured!"));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });
