//redirects to spotify login page when login button is clicked
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirects back to spotify-clone homepage once authorized
const redirectUri = "http://localhost:3000/";
const clientId =  "0da6b7bbf7b6427cb9dbe26f20889da9";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

// extract access token from response (or url)
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;