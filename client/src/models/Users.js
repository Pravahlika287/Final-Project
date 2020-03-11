const Users = [
    { Name: 'Pravi', Password: '2020', Email: 'kurapatipraval98@gmail.com' },
    { Name: 'Pradyumn', Password: '5780', Email: 'pradyumn@newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}