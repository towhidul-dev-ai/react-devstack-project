import type { Itechnology } from "../../types/type";

interface TechnologyCardProps {
    tech: Itechnology;
    isSelected: boolean;
    onAdd: (tech: Itechnology) => void;
}

const TechnologyCard = ({
    tech,
    isSelected,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">

            {/* Icon + Badge */}
            <div className="flex justify-between items-start">

                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                />

                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                    {tech.badge}
                </span>

            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold mt-4">
                {tech.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2 min-h-[60px]">
                {tech.description}
            </p>

            {/* Information */}
            <div className="flex items-center justify-between mt-4 text-xs">

                <span className="bg-gray-100 px-2 py-1 rounded">
                    {tech.category}
                </span>

                <span className="text-gray-500">
                    {tech.difficulty}
                </span>

                <span>
                    ⭐ {tech.rating}
                </span>

            </div>

            {/* Add Button */}
            <button
                onClick={() => onAdd(tech)}
                disabled={isSelected}
                className={`w-full mt-4 py-2 rounded-lg text-sm font-medium transition ${isSelected
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-950 text-white hover:bg-gray-800"
                    }`}
            >
                {isSelected
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechnologyCard;