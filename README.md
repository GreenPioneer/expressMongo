# Mean Blog

Created by ![Green Pioneer](http://greenpioneersolutions.com/img/icons/apple-icon-180x180.png)

## Info
Currently this is just meant as a example. This example is really great for people wanting to learn how to write CRUD functionality with Mongoose & Express . Please take a look around and enjoy the code courtesy of [Green Pioneer](http://www.greenpioneersolutions.com)

##Commands

Install:
```sh
$ npm install
```

Reporting:
```sh
$ gulp plato
```

Starting Up:
```sh
$ gulp
```
or
```sh
$ node app.js  or npm start
```


##Snippets 
Snippets of some of the core parts of this examples 

How to connect to Mongodb
``` javascript
mongoose.connect('mongodb://localhost/blog');
```

Mongoose Schema:
``` javascript
var blogSchema = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
});
var Blog = mongoose.model('Blog', blogSchema)
```
Routes
```javascript
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.post('/blogs', function(req, res) {
})
app.get('/blogs', function(req, res) {
})
app.get('/blogs/:id', function(req, res) {
})
app.put('/blogs/:id', function(req, res) {
})
app.delete('/blogs/:id', function(req, res) {
})
```

Route Functions
```javascript
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.post('/blogs', function(req, res) {
    var blog = new Blog({
        author: req.body.author,
        content: req.body.content,
        title: req.body.title
    });

    blog.save()
})
app.get('/blogs', function(req, res) {
    Blog.find()
        .exec()
})
app.get('/blogs/:id', function(req, res) {
    Blog.findOne({
            _id: req.params.id
        })
        .exec()
})
app.put('/blogs/:id', function(req, res) {
    Blog.findOneAndUpdate()
})
app.delete('/blogs/:id', function(req, res) {
    Blog.findOneAndRemove()
})
```



#### This is [on GitHub](https://github.com/GreenPioneer/expressMongo)
#### Find us [on GitHub](https://github.com/GreenPioneer)
#### Find us [on Twitter](https://twitter.com/greenpioneerdev)
#### Find us [on Facebook](https://www.facebook.com/Green-Pioneer-Solutions-1023752974341910)
#### Find us [on The Web](http://greenpioneersolutions.com/)