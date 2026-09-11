Dev Stack

Dev Stack is a responsive web application that helps developers explore different technologies and build their own development stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.

Technologies Used

React
TypeScript
Tailwind CSS
React Toastify
Vite
JSON

Features

1. Explore Technologies

Browse various frontend, backend, database, and development tools, along with their descriptions, ratings, difficulty levels, and categories.

2. Build Your Own Stack

Add technologies to your personal stack and easily see which technologies you have selected.

3. Manage Your Stack

Remove individual technologies or remove all selected technologies at once. Toast notifications provide feedback for different actions.

📚 React Questions & Answers
I. What is JSX, and why is it used in React?

Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes UI creation easier and more understandable.

II. What is the difference between props and state?

Ans: Props are data passed from a parent component to a child component. State is data that is managed inside a component and can change over time.

III. What does the useState hook do, and where did you use it in this project?

Ans: useState is a React Hook used to create and manage data that can change. In this project, I used useState to store the technologies, selected technologies, loading state, and error state.

IV. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect is used to run some code after the component renders. I used it to load the technology data from data.json when the application starts.

V. Why does every item in a .map() list need a unique key prop?

Ans: React uses the key to identify each item in a list. It helps React know which item has changed, been added, or removed.

Ans: I used tech.id as the unique key in my project.

{technologies.map((tech) => (
    <TechnologyCard
        key={tech.id}
        tech={tech}
    />
))}

VI. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering means showing different things on the screen based on a condition. I used it in MyStack.tsx. If no technology is selected, it shows "Your stack is empty." Otherwise, it shows the selected technologies.

{selectedTech.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    <StackTechnology
        selectedTech={selectedTech}
        onRemove={onRemove}
    />
)}

VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: A parent component can pass data to a child component using props. In my project, I pass tech, isSelected, and onAdd to the TechnologyCard.

<TechnologyCard
    tech={tech}
    isSelected={isSelected}
    onAdd={onAddToStack}
/>

The child can send something back to the parent by calling a function received through props.

<button onClick={() => onAdd(tech)}>
    Add to Stack
</button>

The parent gives the onAdd function to the child, and the child calls it when the user clicks the button.
