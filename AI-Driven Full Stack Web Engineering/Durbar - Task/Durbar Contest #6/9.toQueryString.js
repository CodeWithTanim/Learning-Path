function toQueryString(params) {
    // TODO: Convert params object into a URL query string
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
}