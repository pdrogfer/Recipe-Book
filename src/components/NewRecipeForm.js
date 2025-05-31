import React, {useState} from 'react';

function NewRecipeForm() {

    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');

    const recipeNameChange = (event) => {
        event.preventDefault();
        // Logic to handle form submission, e.g., adding a new recipe
        console.log('name', event.target.value);
        setRecipeName(event.target.value);
    };

    const recipeIngredientsChange = (event) => {
        event.preventDefault();
        // Logic to handle form submission, e.g., adding ingredients
        console.log('ingredients', event.target.value);
        setRecipeIngredients(event.target.value);
    }
    const recipeInstructionsChange = (event) => {
        event.preventDefault();
        // Logic to handle form submission, e.g., adding instructions
        console.log('instructions', event.target.value);
        setRecipeInstructions(event.target.value);
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='recipeName' className='form-label'>Recipe Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='recipeName'
                        placeholder='Enter recipe name'
                        required
                        value={recipeName}
                        onChange={recipeNameChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='ingredients' className='form-label'>Ingredients</label>
                    <textarea
                        className='form-control'
                        id='ingredients'
                        rows='3'
                        placeholder='List ingredients'
                        required
                        value={recipeIngredients}
                        onChange={recipeIngredientsChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='instructions' className='form-label'>Instructions</label>
                    <textarea
                        className='form-control'
                        id='instructions'
                        rows='3'
                        placeholder='Enter cooking instructions'
                        required
                        value={recipeInstructions}
                        onChange={recipeInstructionsChange} />
                </div>
                <button type='submit' className='btn btn-primary'>Add Recipe</button>
            </form>
        </div>
    );
}
export default NewRecipeForm;