import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilter implements PipeTransform {
    transform(searchResults: Array<object>, filterOptions: object): any {
        let filtered = searchResults
        if (!filterOptions[`albums`]) {
            filtered = filtered.filter(item => item[`is_album`] === false)
        }
        if (!filterOptions[`nsfw`]) {
            filtered = filtered.filter(item => item[`nsfw`] === false)
        }
        return filtered
    }
}