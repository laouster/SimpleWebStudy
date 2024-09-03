import { recipes } from './data.js';

export default function RecipeList() {

    const listItems = recipes.map(item =>
        <div key={item.id}>
            <h1>{item.name}</h1>
            <ul>
                {item.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>  // 二级遍历
                )}
            </ul>
        </div>
    )
  return (
    <div>
      {listItems}
    </div>
  );
}
