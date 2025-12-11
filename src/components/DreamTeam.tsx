import Friend from "./Friend.tsx";
import Context from "../utils/context.ts";
import {useContext} from "react";

const DreamTeam = () => {
    const {friendsList} = useContext(Context);

    return (
        <section className="float-right w-1/2 grid grid-cols-3 gap-1.5  border rounded-b-3xl mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friendsList.map((f, i) => <Friend friend={f} key={i} pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;