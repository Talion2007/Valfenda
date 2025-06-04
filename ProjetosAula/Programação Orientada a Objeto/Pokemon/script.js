document.addEventListener('DOMContentLoaded', () => {
    const pokemonSprite = document.getElementById('pokemon-sprite');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const feedback = document.getElementById('feedback');
    const nextPokemonButton = document.getElementById('next-pokemon-button');
    const scoreDisplay = document.getElementById('score');
    const streakDisplay = document.getElementById('streak');
    const loadingMessage = document.getElementById('loading-message');
    const errorCountDisplay = document.getElementById('error-count-value');
    const loadErrorInfo = document.getElementById('load-error-info');

    // New elements for wrong answer tracking
    const wrongAnswersCountDisplay = document.getElementById('wrong-answers-count');
    const missedPokemonListDisplay = document.getElementById('missed-pokemon-list');
    const missedPokemonSection = document.getElementById('missed-pokemon-section');

    let currentPokemonName = '';
    let score = 0;
    let streak = 0;
    let currentLoadIssueCount = 0;

    let wrongAnswersCount = 0; // Counter for incorrect guesses
    let wronglyGuessedPokemonNames = []; // Array to store names of Pokémon guessed incorrectly

    const MAX_POKEMON_ID = 1025;
    const MAX_FETCH_RETRIES = 3;

    function updateLoadIssueDisplay() {
        errorCountDisplay.textContent = currentLoadIssueCount;
        loadErrorInfo.style.display = currentLoadIssueCount > 0 ? 'block' : 'none';
    }

    async function fetchRandomPokemon(isInitialAttempt = true, retriesLeft = MAX_FETCH_RETRIES) {
        if (isInitialAttempt) {
            currentLoadIssueCount = 0;
        }
        updateLoadIssueDisplay();

        showLoading(true);
        feedback.textContent = '';
        feedback.className = '';
        pokemonSprite.classList.add('silhouette');
        pokemonSprite.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        pokemonSprite.alt = "Loading Pokémon...";

        guessInput.value = '';
        guessInput.disabled = true;
        guessButton.disabled = true;
        nextPokemonButton.style.display = 'none';

        if (retriesLeft < 0) {
            console.error("Max retries reached. Failed to fetch and display a Pokémon.");
            feedback.textContent = `Could not load a Pokémon after ${MAX_FETCH_RETRIES + 1} attempts and ${currentLoadIssueCount} issue(s). Please refresh.`;
            feedback.className = 'incorrect critical-error';
            showLoading(false);
            pokemonSprite.style.display = 'none';
            updateLoadIssueDisplay();
            return;
        }

        try {
            const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

            if (!response.ok) {
                currentLoadIssueCount++;
                updateLoadIssueDisplay();
                console.warn(`API Error (Status: ${response.status}) for ID ${randomId}.`);
                setTimeout(() => fetchRandomPokemon(false, retriesLeft - 1), 500);
                return;
            }

            const data = await response.json();
            currentPokemonName = data.name.toLowerCase();
            let spriteUrl = data.sprites?.front_default;

            if (!spriteUrl) {
                spriteUrl = data.sprites?.other?.['official-artwork']?.front_default;
            }

            if (!spriteUrl) {
                currentLoadIssueCount++;
                updateLoadIssueDisplay();
                console.error(`No suitable sprite found for Pokémon ${currentPokemonName} (ID: ${data.id}). Trying a different Pokémon.`);
                setTimeout(() => fetchRandomPokemon(false, retriesLeft - 1), 100);
                return;
            }

            pokemonSprite.onload = () => {
                pokemonSprite.alt = "Pokémon Silhouette";
                showLoading(false);
                guessInput.disabled = false;
                guessButton.disabled = false;
                guessInput.focus();
            };

            pokemonSprite.onerror = () => {
                currentLoadIssueCount++;
                updateLoadIssueDisplay();
                console.error(`Error loading image for ${currentPokemonName} from URL: ${spriteUrl}. Trying a different Pokémon.`);
                setTimeout(() => fetchRandomPokemon(false, retriesLeft - 1), 100);
            };

            pokemonSprite.src = spriteUrl;

        } catch (error) {
            currentLoadIssueCount++;
            updateLoadIssueDisplay();
            console.error("Fetch attempt failed (Network Error or other):", error.message);
            feedback.textContent = 'Network error while fetching. Retrying...';
            feedback.className = 'incorrect';
            setTimeout(() => fetchRandomPokemon(false, retriesLeft - 1), 1500);
        }
    }

    function handleGuess() {
        if (guessInput.disabled) return;

        const userGuess = guessInput.value.trim().toLowerCase();
        if (!userGuess) {
            feedback.textContent = "Please enter a name!";
            feedback.className = 'incorrect';
            return;
        }

        pokemonSprite.classList.remove('silhouette');
        pokemonSprite.alt = `Image of ${capitalizeFirstLetter(currentPokemonName)}`;

        if (userGuess === currentPokemonName) {
            feedback.textContent = `Correct! It's ${capitalizeFirstLetter(currentPokemonName)}!`;
            feedback.className = 'correct';
            score++;
            streak++;
        } else {
            feedback.textContent = `Nope! It was ${capitalizeFirstLetter(currentPokemonName)}.`;
            feedback.className = 'incorrect';
            streak = 0;
            wrongAnswersCount++; // Increment wrong answers count
            // Add the *actual Pokémon name* that was missed
            if (!wronglyGuessedPokemonNames.includes(currentPokemonName)) { // Optional: prevent duplicates
                wronglyGuessedPokemonNames.push(currentPokemonName);
            }
            updateWrongAnswersDisplay(); // Update the display
        }

        updateScoreboard();
        guessInput.disabled = true;
        guessButton.disabled = true;
        nextPokemonButton.style.display = 'inline-block';
        nextPokemonButton.focus();
    }

    function updateScoreboard() {
        scoreDisplay.textContent = score;
        streakDisplay.textContent = streak;
        wrongAnswersCountDisplay.textContent = wrongAnswersCount; // Update wrong answers count here too
    }

    function updateWrongAnswersDisplay() {
        wrongAnswersCountDisplay.textContent = wrongAnswersCount;
        missedPokemonListDisplay.innerHTML = ''; // Clear previous list

        if (wronglyGuessedPokemonNames.length > 0) {
            missedPokemonSection.style.display = 'block';
            wronglyGuessedPokemonNames.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = capitalizeFirstLetter(name);
                missedPokemonListDisplay.appendChild(listItem);
            });
        } else {
            missedPokemonSection.style.display = 'none';
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function showLoading(isLoading) {
        if (isLoading) {
            loadingMessage.style.display = 'block';
            pokemonSprite.style.display = 'none';
            feedback.style.display = 'none';
        } else {
            loadingMessage.style.display = 'none';
            pokemonSprite.style.display = 'block';
            feedback.style.display = 'block';
        }
    }

    guessButton.addEventListener('click', handleGuess);
    guessInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleGuess();
        }
    });

    nextPokemonButton.addEventListener('click', () => fetchRandomPokemon(true));

    // Initial setup
    updateWrongAnswersDisplay(); // Call once at start to ensure section is hidden if list is empty
    fetchRandomPokemon(true);
});