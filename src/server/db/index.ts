import * as mysql from 'mysql';
import config from '../config';

import Blogs from './blogs';

export const connection = mysql.createConnection(config.mysql);

connection.connect(err => { if (err) console.log(err); });

export default {
  Blogs
}
