/**
 * LikesController
 */

import LikesModel from '../models/Likes'
import LikesView from '../views/Likes'

import { components, elements } from '../views/Base'

export default state => new class LikesController {
    constructor() {
        this.init()
    }

    init = () => {
        // init LikesView
        this.view = LikesView(components, elements)

        //add listeners 
        elements.recipe.main.addEventListener('click', event => {
            if (event.target.matches('.recipe__love, .recipe__love *')) {
                this.controlLike();
            }
        })

        // Restore liked recipes on page load
        window.addEventListener('load', () => {
            // Init LikesModel
            state.likes = LikesModel;

            // Restore likes
            state.likes.readLocalStorage();
            // Render existing likes
            state.likes.likes.forEach(like => this.view.renderLike(like));

            // Set Likes menu visibility
            this.view.toggleLikeMenu(state.likes.getTotalLikes());
        })
    }

    controlLike() {
        const currentId = state.recipe.id;

        // User has not liked recipe yet
        if (!state.likes.isLiked(currentId)) {
            // Add like to the model
            const newLike = state.likes.addLike(
                currentId,
                state.recipe.title,
                state.recipe.publisher,
                state.recipe.image_url
            );

            // Toggle Like button
            this.view.toggleLikeBtn(true);

            // Add like to UI list
            this.view.renderLike(newLike);

            // User has not liked recipe yet
        } else {
            // Remove like to the model
            state.likes.deleteLike(currentId);

            // Toggle Like button
            this.view.toggleLikeBtn(false);

            // Remove like to UI list
            this.view.deleteLike(currentId);
        }
        this.view.toggleLikeMenu(state.likes.getTotalLikes());
    }
}