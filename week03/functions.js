function fullname(first, last) {
    return '${first} ${last}';
}

const fullNames = function (first, last) {
 return '${first} ${last}';
}

const fullName = (firstName, lastName) => '${firstName} ${lastName}';

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

