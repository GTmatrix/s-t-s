import Context from "../utils/context.ts";
import {useContext} from "react";
import {characters} from "../utils/constants.ts";

const Hero = () => {
    const {currentHeroId} = useContext(Context);
    const heroDetails = characters[currentHeroId];

    return (
        <section className="float-left w-1/4 mr-4 mt-2">
            <img className="w-full shadow-hero" src={heroDetails.img} alt={heroDetails.name}/>
        </section>
    );
};

export default Hero;