import { useEffect, useState } from "react";
import { base_url, period_month } from "../utils/constants.ts";

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem("planets")!);
        if (planets && Date.now() - planets.time < period_month) {
            return planets.payload;
        }
        return ["Loading..."];
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data: { name: string }[] = await res.json();
            const planets = data.map(item => item.name);

            setPlanets(planets);
            localStorage.setItem(
                "planets",
                JSON.stringify({ payload: planets, time: Date.now() })
            );
        };

        if (planets.length === 1) {
            getPlanets();
        }
    }, [planets.length]);

    return (
        <form
            className="
                w-4/5 mx-auto mt-10 p-6 rounded-xl
                bg-transparent
                border-2 border-main shadow-hero
                backdrop-blur-sm
                text-main tracking-wide
            "
            onSubmit={(e) => e.preventDefault()}
        >
            {/* First Name */}
            <label className="block mb-5">
                <span className="text-red text-lg">First Name</span>
                <input
                    className="
                        w-full mt-2 p-3 rounded-md
                        text-black
                        bg-white/80
                        border border-main
                        focus:outline-none focus:ring-2 focus:ring-main
                    "
                    type="text"
                    name="firstname"
                    placeholder="Your first name..."
                />
            </label>

            {/* Last Name */}
            <label className="block mb-5">
                <span className="text-red text-lg">Last Name</span>
                <input
                    className="
                        w-full mt-2 p-3 rounded-md
                        text-black
                        bg-white/80
                        border border-main
                        focus:outline-none focus:ring-2 focus:ring-main
                    "
                    type="text"
                    name="lastname"
                    placeholder="Your last name..."
                />
            </label>

            {/* Planet */}
            <label className="block mb-5">
                <span className="text-red text-lg">Planet</span>
                <select
                    className="
                        w-full mt-2 p-3 rounded-md
                        text-black
                        bg-white/80
                        border border-main
                        focus:outline-none focus:ring-2 focus:ring-main
                    "
                    name="planet"
                >
                    {planets.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>

            {/* Subject */}
            <label className="block mb-5">
                <span className="text-red text-lg">Subject</span>
                <textarea
                    className="
                        w-full mt-2 h-52 p-3 rounded-md
                        text-black
                        bg-white/80
                        border border-main
                        resize-y
                        focus:outline-none focus:ring-2 focus:ring-main
                    "
                    name="subject"
                    placeholder="Write something..."
                />
            </label>

            {/* Submit */}
            <button
                className="
                    w-full py-3 rounded-md
                    bg-main text-black font-bold tracking-wider
                    hover:bg-[#fff799] transition-all
                    shadow-hero cursor-pointer
                "
                type="submit"
            >
                SUBMIT
            </button>
        </form>
    );
};

export default Contact;
