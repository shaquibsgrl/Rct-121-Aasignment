import { useState } from "react"
import ContactCard from "./contactCard";


const initialdata = [
    {
        id: 1,
        first_name: "shubham",
        gmail: "shubham@gmail.com",
        phone: "+91-789456123",
        image:"https://th.bing.com/th/id/OIP.PYipJ_hSncugM2SwnZitvgHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id: 2,
        first_name: "aquib",
        gmail: "aquib@gmail.com",
        phone: "+91-484844989",
        image:"https://th.bing.com/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?w=241&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id: 3,
        first_name: "rahul",
        gmail: "rahul@gmail.com",
        phone: "+91-484858545478",
        image:"https://th.bing.com/th/id/OIP.cKTq4enAGO_Wg_Omp0ysngHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7"
    },
    {
        id: 4,
        first_name: "avinash",
        gmail: "avinash@gmail.com",
        phone: "+91-789456123",
        image:"https://th.bing.com/th/id/OIP.FZvsRPxiVPUayL668E95QAHaEK?w=274&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        id: 5,
        first_name: "akash",
        gmail: "akash@gmail.com",
        phone: "+91-4587415966",
        image:"https://th.bing.com/th/id/OIP.aMaaOe2Fle0JpeQs1v57_gHaEo?w=248&h=180&c=7&r=0&o=5&pid=1.7"
    }
]

function ContactList() {
    const [data, setData] = useState(initialdata);
    return (
        <div>
            {data.map((item) => (
               <ContactCard key={item.id} name={item.first_name} email={item.gmail} phone={item.phone} image={item.image}/>
            ))}
        </div>
    )
}
export default ContactList