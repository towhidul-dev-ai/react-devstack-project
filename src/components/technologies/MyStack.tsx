import type { Itechnology } from "../../types/type";
import StackTechnology from "./StackTechnology";

interface MyStackProps {
    selectedTech: Itechnology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const MyStack = ({
    selectedTech,
    onRemove,
    onRemoveAll,
}: MyStackProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-white sticky top-5">

            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        {selectedTech.length === 0
                            ? "No Technologies Selected yet."
                            : `${selectedTech.length} ${selectedTech.length === 1 ? "Technology" : "Technologies"
                            } Selected`}
                    </p>
                </div>

                {selectedTech.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="text-xs text-red-500 hover:text-red-700">
                        Remove All
                    </button>
                )}

            </div>

            {selectedTech.length === 0 ? (
                <div className="border border-dashed border-gray-300 rounded-lg p-8 mt-5 text-center">
                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>
                </div>) : (
                <div className="mt-5">
                    <StackTechnology
                        selectedTech={selectedTech}
                        onRemove={onRemove}
                    />
                </div>
            )}

        </div>
    );
};

export default MyStack;