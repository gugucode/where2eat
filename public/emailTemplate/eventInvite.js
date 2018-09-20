// And then create our markup:
const markup = (data)=>(
    `<div>
        <h2> Where2eat </h2>
        <p>Hi, ${data.reciever}</p>
        <p>You friend, ${data.sender},
            send you an invitation to hangout at this restaurant:
        </p>
        <blockquote>
            <p>Place name: ${data.restInfo.name}</p>
            <p>Address: ${data.restInfo.location.address}</p>
            <p>Start time: ${data.restInfo.startTime || "None"}</p>
            <p>End time: ${data.restInfo.endDateTime || "None"}</p>
            <p>description: ${data.restInfo.description || "None"}</p>
        </blockquote>
        <p>Thank you!</p>
        <p>Where2eat Team</p>
    </div>`
)                    
module.exports = markup;

