import RecipeRowItem from './RecipeRowItem';

function RecipeTable({ recipes, deleteRecipe }) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Ingredients</th>
                    <th scope='col'>Instructions</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe) => (
                    <RecipeRowItem
                        key={recipe.rowNumber}
                        recipe={recipe}
                        onClick={() => {
                            console.log('Recipe deleted:', recipe.name);
                            deleteRecipe(recipe.rowNumber);
                        }
                    }
                    />
                ))}
            </tbody>
        </table>
    );
}

export default RecipeTable;