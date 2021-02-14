import Code from "./code";
import Education from "./education";
import Event from "./event";
export default function TimelineIcon({type}){
    switch(type){
        case "Event":
             return <Event />
        case "Education":
            return <Education />
        case "Hackathon":
            return <Code />
    }
}