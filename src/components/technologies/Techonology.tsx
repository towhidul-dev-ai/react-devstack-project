import React, { use } from 'react';
import type { Itechnology } from '../../types/type';

interface TechnologyProps {
    techPromise: Promise<Itechnology[]>
}

const Techonology = ({ techPromise }): TechnologyProps => {
    console.log(techPromise)
    const tech = use(techPromise);
    console.log(tech, "tech");
    return <div> </div>

};

export default Techonology;