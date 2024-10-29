import defaultTextCard from "../../static/defaultTextCard";
import "./styles/TextCard.css";

export default function TextCard({heading, paragraph}=defaultTextCard) {
    return (
        <div>
            <div className="text-card">
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}