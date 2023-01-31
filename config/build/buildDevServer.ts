import {BuildOption} from './type/config'
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export default function buildDevServer({port}: BuildOption): DevServerConfiguration {
    return {
        port: port,
        open: true,
        historyApiFallback: true
    }
}
