// こちらは公式のサンプルです
const search = (query) => {
    const search = "https://www.google.com/search?q="
    window.open(`${search}${query}`, '_blank')
}

search(crmAPI.getSelection())
