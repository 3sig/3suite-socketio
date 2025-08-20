# 3suite-socketio

socketio is a standalone socketio server.

it hosts on a given port and forwards all messages to all connections.

for configuration, see the [configuration file](./config.toml), and refer to the [3lib-config library docs](https://github.com/3sig/3lib-config)
## usage

### creating a new project

fork the repository--any changes that we make to the build workflows should be merged upstream to this template.

enable workflows in github so that the build workflows can run.

### creating a release

ensure that you are in a fully committed state before creating a tag.
run `npm run release` (or `bun run release`) and follow the prompts.

### macOS builds

we currently do not support notarization for macOS builds.
to run mac builds, flag them as safe for gatekeeper with the following command:

`xattr -c <path_to_mac_executable>`
