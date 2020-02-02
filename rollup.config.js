
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import fs from 'fs';
import path from 'path';
import rootpkg from './package.json';


let name = 'ActiveWidgets.HTML',
    framework = [];


let globals = {
    'htm': 'htm',
    'preact': 'preact',
    '@activewidgets/frameworks/html': 'ActiveWidgets.Frameworks.HTML',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components',
    '@activewidgets/datagrid/style': 'ActiveWidgets.Styles',
    '@activewidgets/datagrid/metadata': 'ActiveWidgets.Metadata',
    '@activewidgets/datagrid/css': ''
};


let roots = {
    modules: ['', 'bundle', 'css', 'js'],
    bundles: ['', 'bundle']
};


let plugins = [
    postcss({
        extract: 'dist/ax.css',
        sourceMap: true
    }),
    sourcemaps(),
    resolve(),
    babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [["@babel/env", {modules: false}]]
    })
];


function read(filename){
    return String(fs.readFileSync(filename, {encoding:'utf8'}));
}


let modules = roots.modules.map(dir => {

    let pkg = JSON.parse(read(path.join(dir, 'package.json'))),
        input = path.join(dir, 'index.js'),
        main = path.join(dir, pkg.main),
        module = path.join(dir, pkg.module),
        sourcemap = true,
        compact = true;

    return {
        input,
        output: [
            {file: main, format: 'umd', sourcemap, globals, name, compact},
            {file: module, format: 'esm', sourcemap},
        ],
        external: Object.keys(globals),
        plugins
    };
});


let bundles = roots.bundles.map(dir => {

    let input = path.join(dir, 'index.js'),
        file = path.join('dist', (dir || 'ax') + '.js'),
        sourcemapPathTransform = s => {
            return s.replace(/^\.\../, '')
                .replace(/node_modules/, '..')
                .replace(/@activewidgets.(\w+)/, '$1@' + rootpkg.version);
         },
        sourcemap = true,
        compact = true;

    return {
        input,
        output: [
            {file, format: 'umd', sourcemap, sourcemapPathTransform, globals, name, compact}
        ],
        external: framework,
        plugins
    };
});


export default [].concat(modules, bundles);
