import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * from blogs', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

export default {
  all
}