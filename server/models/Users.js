const Users = [
    { Name: 'Moshe', Password: '2020', Email: 'plotkinm@newpaltz.edu', userId: 0 },
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu', userId: 1},
    { Name: 'Bernie', Password: '2020', Email: 'bernie@newpaltz.edu', userId: 2 },    
];


  

   function Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');

        return user;
    };

function Get(userId) {
    return Users[userId]
};
module.exports={
    Login,Get,Users
}
