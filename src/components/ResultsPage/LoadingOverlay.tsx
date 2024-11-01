import { TailSpin } from "react-loader-spinner";
import "./styles/LoadingOverlay.css";
export default function LoadingOverlay({visible}: {visible: boolean})
{
    return visible ? <TailSpin visible wrapperClass="loading-overlay" color="black"/> : <></>
}