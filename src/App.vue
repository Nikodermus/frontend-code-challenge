<template>
    <label for="maxCP" class="max-cp">
        <input type="checkbox" id="maxCP" />
        <small>
            Maximum Combat Points
        </small>
    </label>
    <input type="text" class="input" placeholder="Pokemon or type" />
    <div class="loader"></div>
    <ul class="suggestions">
        <li>
            <img
                src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                alt="Pikachu"
            />
            <div class="info">
                <h1><span class="hl">Pika</span>chu</h1>
                <span class="type electric">Electric</span>
                <span class="type normal">Normal</span>
            </div>
        </li>
        <li>
            <img
                src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
                alt="No results"
            />
            <div class="info">
                <h1 class="no-results">
                    No results
                </h1>
            </div>
        </li>
    </ul>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const URL_PATH =
    'https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json';

export default {
    name: 'App',
};
</script>
