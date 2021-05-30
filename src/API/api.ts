import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const repoAPI = {
    getUser(username: string) {
        return instance.get<UserType>(`/${username}`)
            .then(res => res.data)
    },
    getRepo(username: string, currentPage: number = 1, perPage: number = 4) {
        return instance.get<Array<RepoType>>(`/${username}/repos?per_page=${perPage}&page=${currentPage}`)
            .then(res => res.data)
    },
}

//types
export type UserType = {
    login: string
    avatar_url: string
    html_url: string
    name: string
    public_repos: number
    followers: number
    following: number
}
export type RepoType = {
    id: string
    name: string
    html_url: string
    description: string
}