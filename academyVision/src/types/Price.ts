export interface Price {
    text: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    id: number
    icon: string
    title: string
    description: string[]
    priceTitle: string
    price: string
}