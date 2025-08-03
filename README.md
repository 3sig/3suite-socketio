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
you likely want to download and check the related build before tagging.

create a tag:

`git tag -a v1.0.0 -m "release v1.0.0"`

the message inside of the quotes will be the release message.
the version number will be appended to the output build files.

push the tag:

`git push origin tag v1.0.0`

you DEFINITELY don't want to run `git push --tags` because it will trigger releases for tags across the history.

### macOS builds

we currently do not support notarization for macOS builds.
to run mac builds, flag them as safe for gatekeeper with the following command:

`xattr -c <path_to_mac_executable>`
