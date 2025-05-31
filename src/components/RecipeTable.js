import RecipeRowItem from './RecipeRowItem';

function RecipeTable({ recipes }) {
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
                        recipe={recipe}
                        onClick={() => console.log('Recipe clicked')}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default RecipeTable;