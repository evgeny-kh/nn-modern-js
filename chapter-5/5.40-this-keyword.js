let user = {
    name: 'john',
    age: 30,
    email: 'john@gmail.com',
    location: 'London',
    blogs: ['why mac rules', '10 things to read before suumer'],
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();