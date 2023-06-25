export interface BlogMetadata{
    title: string,
    subtitle?: string,
    image: string,
    createdOn: string,
    updatedOn?: string,
    tags: string[],
    content: string,
}