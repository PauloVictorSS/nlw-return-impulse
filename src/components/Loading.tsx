import { CircleNotch } from "phosphor-react";

export function Loading(){
    return (
        <div className="w6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch weight="bold" className="h-4 w-4 animate-spin"/>
        </div>
    )
}