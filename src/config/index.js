export const config = {
  spotify: {
    authorizationURL: "https://accounts.spotify.com/authorize",
    clientId: "b8f2cb33c1eb46aeb2bd45b441300237",
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: "https://api.spotify.com/v1",
    scopes: ["user-read-email", "user-read-private", "streaming"],
  },
};
