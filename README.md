# 3suite-socketio

socketio is a standalone socketio server.

it hosts on a given port and forwards all messages to all connections.

for configuration, see the [configuration file](./config.toml), and refer to the [3lib-config library docs](https://github.com/3sig/3lib-config)

### macOS builds

we currently do not support notarization for macOS builds.
to run mac builds, flag them as safe for gatekeeper with the following command:

`xattr -c <path_to_mac_executable>`
