import express from 'express';
import { getAllDiaryPosts, getAllGeneralPosts } from './posts-api/posts-db.js';
import { getAllCrisisResources } from './posts-api/crisis-resources-db.js';

const app = express();

app.use(express.static('./app'));

app.get('/posts', function(req, res){
    console.log(req.body);
});

app.get('/all-diary-posts', function(req, res) {
    getAllDiaryPosts(res);
});

app.get('/all-general-posts', function(req, res) {
    getAllGeneralPosts(res);
});

app.get('/all-crisis-resources', function(req, res) {
    getAllCrisisResources(res);
})

app.listen('3001');
console.log('working on 3001');