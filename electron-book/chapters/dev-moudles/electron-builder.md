# [electron-builder](https://github.com/electron-userland/electron-builder)

> builder 打包完成的是安装包，builder 里面则是编译后的

## Configuration(配置)

| 分类  | key                         | more                                                             |
| ----- | --------------------------- | ---------------------------------------------------------------- |
| #     | appId                       | The application id                                               |
| ~     | productName                 | specify a product name for your executable which contains spaces |
| ~     | copyright                   | -                                                                |
| #     | directories                 | -                                                                |
| #     | mac                         | how it should build macOS targets                                |
| ~     | mas                         | -                                                                |
| ~     | dmg                         | how it should build DMG                                          |
| ~     | pkg                         | -                                                                |
| #     | win                         | how it should build Windows targets                              |
| ~     | nsis                        | how it should build NSIS target(windows )                        |
| ~     | nsisWeb                     | Web Installer options. Inherits NsisOptions options              |
| #     | linux                       | -                                                                |
| ~     | deb                         | -                                                                |
| ~     | snap                        | -                                                                |
| ~     | appImage                    | -                                                                |
| ~     | pacman                      | -                                                                |
| ~     | rpm                         | -                                                                |
| ~     | freebsd                     | -                                                                |
| ~     | p5p                         | -                                                                |
| ~     | apk                         | -                                                                |
| #     | buildDependenciesFromSource | -                                                                |
| ~     | nodeGypRebuild              | -                                                                |
| ~     | npmArgs                     | -                                                                |
| ~     | npmRebuild                  | -                                                                |
| #     | buildVersion                | -                                                                |
| ~     | electronCompile             | -                                                                |
| ~     | electronDist                | -                                                                |
| ~     | electronDownload            | -                                                                |
| ~     | electronVersion             | -                                                                |
| ~     | extends                     | -                                                                |
| ~     | extraMetadata               | -                                                                |
| ~     | readonly                    | -                                                                |
| ~     | muonVersion                 | -                                                                |
| ~     | nodeVersion                 | -                                                                |
| ~     | launchUiVersion             | -                                                                |
| ~     | framework                   | -                                                                |
| Hooks | afterPack                   | -                                                                |
| ~     | afterSign                   | -                                                                |
| ~     | artifactBuildStarted        | -                                                                |
| ~     | artifactBuildCompleted      | -                                                                |
| ~     | afterAllArtifactBuild       | -                                                                |
| ~     | onNodeModuleFile            | -                                                                |
| ~     | beforeBuild                 | -                                                                |
| #     | remoteBuild                 | -                                                                |
| ~     | includePdb                  | -                                                                |
| ~     | removePackageScripts        | -                                                                |

## Overridable per Platform Options

>  mac、 linux、 win

| key                                | more |
| ---------------------------------- | ---- |
| appId                              | -    |
| artifactName                       | -    |
| compression                        | -    |
| files                              | -    |
| extraResources                     | -    |
| extraFiles                         | -    |
| asar                               | -    |
| fileAssociations                   | -    |
| forceCodeSigning                   | -    |
| electronUpdaterCompatibility       | -    |
| publish                            | -    |
| detectUpdateChannel                | -    |
| generateUpdatesFilesForAllChannels | -    |
| releaseInfo                        | -    |

## nsis

| 分类   | key                                | more                                                                                                                                              |
| ------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| common | oneClick                           | 是否一键安装                                                                                                                                      |
| ~      | perMachine                         | Whether to show install mode installer page (choice per-machine or per-user) for assisted installer. Or whether installation always per all users |
| ~      | allowElevation                     | assisted installer only. Allow requesting for elevation. If false, user will have to restart installer with elevated permissions                  |
| ~      | allowToChangeInstallationDirectory | assisted installer only. Whether to allow user to change installation directory                                                                   |
| ~      | installerIcon                      | The path to installer icon, relative to the build resources or to the project directory.                                                          |
| ~      | uninstallerIcon                    | The path to uninstaller icon, relative to the build resources or to the project directory.                                                        |
| ~      | installerHeader                    | -                                                                                                                                                 |
| ~      | installerHeaderIcon                | -                                                                                                                                                 |
| ~      | installerSidebar                   | -                                                                                                                                                 |
| ~      | uninstallerSidebar                 | -                                                                                                                                                 |
| ~      | uninstallDisplayName               | -                                                                                                                                                 |
| ~      | include                            | -                                                                                                                                                 |
| ~      | script                             | -                                                                                                                                                 |
| ~      | license                            | -                                                                                                                                                 |
| ~      | artifactName                       | -                                                                                                                                                 |
| ~      | deleteAppDataOnUninstall           | one-click installer only. Whether to delete app data on uninstall                                                                                 |
| ~      | differentialPackage                | -                                                                                                                                                 |
| ~      | displayLanguageSelector            | -                                                                                                                                                 |
| ~      | installerLanguages                 | -                                                                                                                                                 |
| ~      | language                           | -                                                                                                                                                 |
| ~      | multiLanguageInstaller             | -                                                                                                                                                 |
| ~      | packElevateHelper                  | -                                                                                                                                                 |
| ~      | preCompressedFileExtensions        | -                                                                                                                                                 |
| ~      | unicode                            | -                                                                                                                                                 |
| ~      | guid                               | -                                                                                                                                                 |
| ~      | warningsAsErrors                   | -                                                                                                                                                 |
| ~      | runAfterFinish                     | Whether to run the installed application after finish                                                                                             |
| ~      | createDesktopShortcut              | Whether to create desktop shortcut                                                                                                                |
| ~      | createStartMenuShortcut            | -                                                                                                                                                 |
| ~      | menuCategory                       | -                                                                                                                                                 |
| ~      | shortcutName                       | -                                                                                                                                                 |