import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilter implements PipeTransform {
    transform(searchResults: Array<object>, filterOptions: object): any {
        let filtered = searchResults
        if (!filterOptions[`nsfw`] && !filterOptions[`albums`]) {
            return filtered.filter(item => {item[`nsfw`] || item[`is_album`] === false})
        }
        if (!filterOptions[`albums`]) {
            return filtered.filter(item => item[`is_album`] === false)
        }
        if (!filterOptions[`nsfw`]) {
            return filtered.filter(item => item[`nsfw`] === false)
        }
        else return filtered
    }
}