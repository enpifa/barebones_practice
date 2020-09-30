import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/sup', (req, res, next) => {
    res.json('y\'all');
});

router.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await db.Blogs.all();
        res.json(blogs);
    } catch(e) {
        console.log(e);
        // we are not sending the entire error, bc somebody could use to hack you
        res.sendStatus(500);
    }
})

export default router;