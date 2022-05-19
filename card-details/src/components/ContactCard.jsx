import { useEffect, useState } from "react";
import "./ContactCard.css"

function ContactCard(props) {

    const { name, email, phone, id, image } = props;
    const [active, isActive] = useState(false)

    //condition rendering when ever you click it shows different UI

    // if (active) {
    //     return (
    //         <div onClick={() => isActive(!active)}>{phone}</div>
    //     )
    // }

    return (
        <div className="container">
            <div ><img src={image}></img></div>
            <div>{name}</div>
            <div>{email}</div>
            <div className="curser-on-details">
                {/* if false show click to show more */}
                {active ? (<div onClick={() => isActive(!active)}>Click for more details</div>)
                    : (
                        <div onClick={() => isActive(!active)}>{phone}</div>)}
            </div>

            {/* else true show number */}
        </div>
    )
}

export default ContactCard