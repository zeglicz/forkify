import View from "./View.js";

import icons from "url:../../img/icons.svg";

class PaginationView extends View {
    _parentElement = document.querySelector(".pagination");

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function (e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            return this._generateMarkupButton("next", curPage);
        }

        // Last page
        if (curPage === numPages && numPages > 1) {
            return this._generateMarkupButton("prev", curPage);
        }

        // Other page
        if (curPage < numPages) {
            return this._generateMarkupButton("next", curPage) + this._generateMarkupButton("prev", curPage);
        }

        // Page 1, and there are NOT other pages
        return "";
    }

    _generateMarkupButton(direction, curPage) {
        const page = direction === "next" ? curPage + 1 : curPage - 1;
        return `
            <button class="btn--inline pagination__btn--${direction}" data-goto="${page}">
                    <span>Page ${page}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-${direction === "next" ? "right" : "left"}"></use>
                    </svg>
            </button>
        `;
    }
}

export default new PaginationView();
