import React from 'react';

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not feth ${url}` + ` received ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters() {
        return this.getResourse(`/characters?page=5&pageSize=10`);
    }
    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }
    getAllBooks() {
        return this.getResourse(`/books`);
    }
    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }
    getAllHouses() {
        return this.getResourse(`/Houses`);
    }
    getHous(id) {
        return this.getResourse(`/Houses/${id}`);
    }
}

const got = new GotService();