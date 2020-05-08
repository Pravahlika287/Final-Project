const Users = [
    { Name: 'pravi', Password: '1234', Email:'pravi@newpaltz.edu', userId: 0 },
    { Name: 'john', Password: '2224', Email: 'john@newpaltz.edu', userId: 1},
    { Name: 'sai', Password: '8889', Email: 'sai@newpaltz.edu', userId: 2 },    
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
