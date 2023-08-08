import pathConfig from './tsconfig.paths.json';

System.config({
    paths: pathConfig.compilerOptions.paths,
});
