import webpack from 'webpack'
import {BuildOption} from './type/config'
import {buildPlugins} from './buildPlugins'
import {buildLoader} from './buildLoader'
import {buildResolvers} from './buildResolvers'
import buildDevServer from './buildDevServer'

export function buildWebpackConfig(options: BuildOption): webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader()
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
