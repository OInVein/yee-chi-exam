const recipes1 = [
  ['salad', 'tomato', 'cucumber', 'salad', 'sauce'],
  ['pizza', 'tomato', 'sausage', 'sauce', 'dough'],
  ['quesadilla', 'chicken', 'cheese', 'sauce'],
  ['sandwich', 'salad', 'bread', 'tomato', 'cheese'],
]
const recipes2 = [
  ['pasta', 'tomato sauce', 'onions', 'garlic'],
  ['chicken curry', 'chicken', 'curry sauce'],
  ['fried rice', 'rice', 'onions', 'nuts'],
  ['salad', 'spinach', 'nuts'],
  ['sandwich', 'cheese', 'bread'],
  ['quesadilla', 'chicken', 'cheese'],
]

function solution(receipes = []) {
  const recipesMaps = receipes.map(([dish, ...receipe]) => [dish, [...receipe]])
  const ingredients = receipes.map(([, ...receipe]) => receipe).flat()
  const repeatsIngredients = [
    ...new Set(ingredients.filter((ingredient, index) => ingredients.indexOf(ingredient) !== index)),
  ].sort()

  const getDish = (ingredient) =>
    recipesMaps
      .filter(([, sources]) => sources.includes(ingredient))
      .map(([key]) => key)
      .sort()

  const result = repeatsIngredients.map((ingredient) =>
    [ingredient, ...getDish(ingredient)].map((words) =>
      words
        .split(' ')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' '),
    ),
  )
  return result
}

console.log('Example 1 👉 ', solution(recipes1))
console.log('Example 2 👉 ', solution(recipes2))
