function RecipeRowItem({ recipe, onClick }) {

    return (
        <tr onClick={onClick}>
            <th scope='row'>{recipe.rowNumber}</th>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instructions}</td>
        </tr>
    );
}

export default RecipeRowItem;