let user = {
    name: 'john',
    age: 30,
    email: 'john@gmail.com',
    location: 'London',
    blogs: ['why mac rules', '10 things to read before suumer'],
    login: () => {
        console.log('the user logge in');
    },
    logout: () => {
        console.log('the user logged out');
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

user.login();
user.logout();