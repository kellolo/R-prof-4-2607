import bot from './botMD.js';
import { apiMiddleware } from 'redux-api-middleware';
export default [apiMiddleware, bot]