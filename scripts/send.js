/**
 * Created By BJ Rutledge 
 * Copied and pasted into Dev console on Plaid site so 
 *  I wouldn't have to set up CORS on APP. 
 */
const body = JSON.stringify({
    name: 'BJ Rutledge', 
    phone: '360-517-3866',
    email: 'bjrutledge@outlook.com',
    resume: 'https://plaid-res.herokuapp.com/BJRutledgeSoftwareEngineerResume.pdf',
    job_id: "9dfba6c2-355c-45cc-893f-d56c4171c488", 
    github: 'https://github.com/bj-rutledge',
    twitter: 'null', 
    website: 'https://plaid-res.herokuapp.com/',
    location: 'Seattle, WA',
    favorite_candy: 'Can there really be a favorite? I mean, it\'s candy!',
    superpower: 'Tenacity'
});


fetch('https://contact.plaid.com./jobs',{
    method: 'POST',
    body: body,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(res => res.json())
.then(json => console.log(json));

