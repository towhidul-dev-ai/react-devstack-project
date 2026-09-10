// import React from 'react';
// import type { Itechnology } from '../../types/type';

// const StackTechnology = ({ tech }) => {
//     return (
//         <div className='grid grid-cols-3 gap-4 mt-6 max-w-7xl mx-auto px-4 py-10'>
//             {
//                 tech.map((tech: Itechnology) => {
//                     return <div className="  card bg-base-100 w-96 shadow-sm">
//                         <figure>
//                             <img
//                                 src={tech.icon}
//                                 alt="Shoes" />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">{tech.name}</h2>
//                             <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>


//                 })
//             }
//         </div>
//     );
// };

// export default StackTechnology;



// import type { Itechnology } from "../../types/type"

// interface YourStackProps {
//     tech: Itechnology[];
//     onRemove: (id: number) => void;
// }

// const StackTechnology = ({
//     tech,
//     onRemove,
// }: YourStackProps) => {
//     return (
//         <div className="border border-gray-200 rounded-xl p-4 bg-white sticky top-24">

//             <h2 className="text-lg font-bold text-gray-900">
//                 Your Stack
//             </h2>

//             <p className="text-xs text-gray-400 mt-1 mb-4">
//                 {tech.length === 0
//                     ? "No technologies selected yet."
//                     : `${tech.length} technologies selected.`}
//             </p>

//             {tech.length === 0 ? (
//                 <div className="border border-dashed border-gray-200 rounded-lg p-6 text-center">
//                     <p className="text-sm text-gray-400">
//                         Your stack is empty.
//                     </p>
//                 </div>
//             ) : (
//                 <div className="space-y-3">

//                     {tech.map((tech) => (
//                         <div
//                             key={tech.id}
//                             className="flex items-center justify-between border border-gray-100 rounded-lg p-3"
//                         >

//                             <div className="flex items-center gap-3">

//                                 <img
//                                     src={tech.icon}
//                                     alt={tech.name}
//                                     className="w-7 h-7 object-contain"
//                                 />

//                                 <div>
//                                     <h3 className="text-sm font-medium text-gray-800">
//                                         {tech.name}
//                                     </h3>

//                                     <p className="text-xs text-gray-400">
//                                         {tech.category}
//                                     </p>
//                                 </div>

//                             </div>

//                             <button
//                                 onClick={() => onRemove(tech.id)}
//                                 className="text-xs text-red-500 hover:text-red-700"
//                             >
//                                 Remove
//                             </button>

//                         </div>
//                     ))}

//                 </div>
//             )}
//         </div>
//     );
// };

// export default StackTechnology;

import type { Itechnology } from "../../types/type";

interface StackTechnologyProps {
    selectedTech: Itechnology[];
    onRemove: (id: string) => void;
}

const StackTechnology = ({
    selectedTech,
    onRemove,
}: StackTechnologyProps) => {
    return (
        <div className="space-y-3">

            {selectedTech.map((tech) => (
                <div
                    key={tech.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                >

                    {/* Icon + Name */}
                    <div className="flex items-center gap-3">

                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-9 h-9 object-contain"
                        />

                        <div>
                            <h3 className="text-sm font-semibold">
                                {tech.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                                {tech.category}
                            </p>
                        </div>

                    </div>

                    {/* Remove */}
                    <button
                        onClick={() => onRemove(tech.id)}
                        className="text-gray-400 hover:text-red-500 text-lg"
                        title="Remove"
                    >
                        ✕
                    </button>

                </div>
            ))}

        </div>
    );
};

export default StackTechnology;