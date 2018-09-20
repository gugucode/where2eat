// const person = {
//     sender: "Erin",
//     reciever: 'Wes',
//     inviteUrl: '#',
// }

// And then create our markup:
const markup = (data)=>(
    `<styele> h2{ color:red}</styele>
        <div>
            <h2> Where2eat </h2>
            <p>Hi, ${data.reciever}</p>
            <p>You friend, ${data.sender},
                send you an invitation to hangout at this restaurant:
            </p>
            <p>Place name: ${data.restInfo.name}</p>
            <p>Address: ${data.restInfo.location.address}</p>
            <p>Start time: ${data.restInfo.startTime}</p>
            <p>End time: ${data.restInfo.endDateTime}</p>
            <p>description: ${data.restInfo.description}</p>
            <p>Thank you!</p>
            <p>Where2eat Team</p>
        </div>`
)                    
module.exports = markup;

// export markup;
