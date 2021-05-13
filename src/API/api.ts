import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const repoAPI = {
    getUser(username: string) {
        return instance.get<UserType>(`/${username}`)
    },
    getRepo(username: string) {
        return instance.get<Array<RepoType>>(`/${username}/repos`)
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