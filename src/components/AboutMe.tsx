import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {characters, navItems, period_month} from "../utils/constants.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {type HeroId, type HeroInfo} from "../utils/types.d.ts";

interface LocalStorageHeroData {
    payload: HeroInfo;
    timestamp: number;
}


const AboutMe: React.FC = () => {
    const navigate = useNavigate();
    const {heroId: urlHeroId} = useParams<{ heroId?: string }>();

    const heroKey: string = urlHeroId || 'luke';
    const isValidHeroKey = Object.prototype.hasOwnProperty.call(characters, heroKey);
    const validHeroId = isValidHeroKey ? (heroKey as HeroId) : 'luke';

    const [hero, setHero] = useState<HeroInfo | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const homePath = navItems[0].replace(/\s/g, '').toLowerCase();

        if (!isValidHeroKey) {
            console.error(`Invalid Hero ID: ${heroKey}`);
            navigate(`/${homePath}`);
            return;
        }


        const storedData = localStorage.getItem(validHeroId);
        if (storedData) {
            try {
                const parsedData: LocalStorageHeroData = JSON.parse(storedData);
                if (parsedData.payload && (Date.now() - parsedData.timestamp < period_month)) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setHero(parsedData.payload);
                    setLoading(false);
                    return;
                }
            } catch (error) {
                console.error(`Error reading LocalStorage for ${validHeroId}:`, error);
            }
        }


        setLoading(true);
        setHero(undefined);

        fetch(`${characters[validHeroId].url}`)
            .then(response => {
                if (!response.ok) throw new Error('API request failed');
                return response.json();
            })
            .then(data => {
                const info: HeroInfo = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                };
                const dataToStore: LocalStorageHeroData = {payload: info, timestamp: Date.now()};
                localStorage.setItem(validHeroId, JSON.stringify(dataToStore));
                setHero(info);
                setLoading(false);
            })
            .catch((error: Error) => {
                console.error("API Error:", error);
                setLoading(false);
                navigate(`/${homePath}`);
            });

    }, [validHeroId, isValidHeroKey, navigate, heroKey]);

    if (loading) return <div className='text-3xl leading-loose text-justify ml-8 animate-pulse'>Loading...</div>;
    if (!hero) return null;

    return (
        <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
            {Object.entries(hero).map(([key, value]) => (
                <p key={key}>
                    <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {value}
                </p>
            ))}
        </div>
    );
}

export default AboutMe;