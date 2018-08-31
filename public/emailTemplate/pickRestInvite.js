// const person = {
//     sender: "Erin",
//     reciever: 'Wes',
//     inviteUrl: '#',
// }

// And then create our markup:
const markup = (data)=>(
    "<styele> h2{ color:red}</styele>"
    +
    "<div>"
    + "<h2> Where2eat </h2>"
    + (data.reciever)
    + "<p class='location'>"
    + "You friend, "
    + (data.sender)
    + ", send you an invitation to pick a restaurant together!"
    + "</p>"
    + "<a class='bio' href='"
    + (data.inviteUrl)
    + "'>Open Invite</a>"
    +"<p>Thank you!</p>"
    +"<p>Where2eat Team</p>"
    +"</div>"
)                    
module.exports = markup;

// export markup;
