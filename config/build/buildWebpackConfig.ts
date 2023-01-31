import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
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
            rules: buildLoader(options)
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
    }
}
