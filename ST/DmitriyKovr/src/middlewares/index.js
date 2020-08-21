import { apiMiddleware } from 'redux-api-middleware';
import botMessage from './botMessageMD.js';

export default [
    apiMiddleware,
    botMessage,
];