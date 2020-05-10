let user = {
    name: 'john',
    age: 30,
    email: 'john@gmail.com',
    location: 'London',
    blogs: [
        { title: 'why mac rules', likes: 30 },
        { title: 'my favourite game', likes: 50 }
    ],
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.location);
        });
    }
};

user.logBlogs();