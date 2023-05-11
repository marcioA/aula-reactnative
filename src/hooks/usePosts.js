function usePosts() {
    const buscaPosts = async () => {
        const data = await fetch('http://192.168.15.4:3333/posts')
            .then(async (response) => {
                const data = await response.json();
                return data;
            })
            .catch((err) => console.error(err));

        return data;
    }
    return { evento: { buscaPosts } };
}

export default usePosts;