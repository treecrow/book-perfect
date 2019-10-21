# [lerna](https://github.com/lerna/lerna)

## 命令行列表

| 命令行                    | more                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| lerna init                | Create a new lerna repo or upgrade an existing repo to the current version of Lerna.                                                |
| lerna bootstrap           | Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies              |
| lerna import <pathToRepo> | Import the package in the local path <pathToRepo> into packages/<directory-name> with commit history                                |
| lerna publish             | Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm. |
| lerna changed             | Check which packages have changed since the last release.                                                                           |
| lerna diff [package?]     | Diff all packages or a single package since the last release.                                                                       |
| lerna run [script]        | Run an npm script in each package that contains that script.                                                                        |
| lerna ls                  | List all of the public packages in the current Lerna repo.                                                                          |
