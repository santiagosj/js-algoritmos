/**
 * SearchView
 */

 export default (components,elements) => new class SearchView {
    constructor() {}

    getInput = () => {
        return elements.search.input.value;
    }

    clearInput = () => {
        elements.search.input.value = '';
    }

    limitRecipeTitle = (title, limit = 15) => {
       const newTitle = []

       if(title.length > limit){
           title.split(' ').reduce((acc,cur)=>{
               if(acc + cur.length <= limit){
                   newTitle.push(cur)
               }

               return acc + cur.length;
           }, 0);

           return `${newTitle.join(' ')} [...]`;
       }
       return title
    }

    renderRecipe = recipe => {
        const shortTitle = this.limitRecipeTitle(recipe.title);
        elements.search.results.list.insertAdjacentHTML('beforeend',components.result.recipe(recipe,shortTitle));
    }

    renderResults = (recipes, page = 1, perPage = 10) => {
        // Current page results
        const start = (page - 1) * perPage;
        const end = start + perPage;

        recipes.slice(start,end).forEach(this.renderRecipe);
        
        // Pagination buttons
        this.renderPagButtons(page, recipes.length, perPage);
    }

    clearResults = () => {
        elements.search.results.list.innerHTML = '';
    }

    getPagButton = components.pagButton;

    renderPagButtons = (page, totalResult, perPage) => {
       const pages = Math.ceil(totalResult / perPage);
       
        if (pages > 1) {
            let btns = '';
            if (page === 1) {
                btns = this.getPagButton({
                    type: 'next',
                    page
                })
            } else if (page > 1 && page < pages) {
                btns = `
                  ${this.getPagButton({
                    type: 'prev',
                    page
                })}
                  ${this.getPagButton({
                    type: 'next',
                    page
                })}`;
            } else if (pages === pages) {
                btns = this.getPagButton({
                    type: 'prev',
                    page
                });
            }

            elements.search.results.pages.insertAdjacentHTML('afterbegin', btns)
        }
    }

    clearPagButtons = () => {
        elements.search.results.pages.innerHTML = '';
    }

    highlightSelected = id => {
        const resultArr = Array.from(document.querySelectorAll('.results__link'))

        if (resultArr.length > 0) {
            resultArr.forEach(el => {
                el.classList.remove('results__link--active')
            })

            const link = document.querySelector(`.results__link[href*="${id}"]`)
            link.classList.add('results__link--active')
        }
    }
 }