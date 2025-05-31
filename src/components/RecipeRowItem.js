function RecipeRowItem({ recipe, onClick }) {

    return (
        <tr>
            <th scope='row'>{recipe.rowNumber}</th>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instructions}</td>
        </tr>
    );
}

export default RecipeRowItem;
// This component is a placeholder for the recipe row item.
// It should be replaced with the actual implementation that uses the `recipe` prop.
// The `onClick` prop can be used to handle row clicks if needed.
// The component currently displays static data for demonstration purposes.
// You can modify the component to accept dynamic data from the `recipe` prop.