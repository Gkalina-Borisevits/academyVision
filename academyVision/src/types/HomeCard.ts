export interface HomeCard {
    id: number
    name: string
    description: string
    // details: string[]
    details: [
        {
            id: number
            title: string
            description: string
        }
    ]

}
