import path from 'path';
import { BuildPaths, BuildEnv, buildWebpackConfig } from './config/build';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  
  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};