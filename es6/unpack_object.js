const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

const userId = ({id}) => id

const whois = ({displayName, fullName: {firstName: name}}) => console.log(`${displayName} is ${name}`);

console.log(`User Id is ${userId(user)}`);
whois(user);