export type AllPokemonsType = {
    count: number
    next: string | null
    previous: string | null
    results: Array<PokemonGeneralInfoType>
}

export type PokemonGeneralInfoType = {
    name: string
    url: string
}

export type PokemonType = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Array<any>
    game_indices: Array<any>
    location_area_encounters: string
    moves: Array<any>
    past_types: Array<any>
    sprites: any
    species: any
    stats: Array<any>
    types: Array<any>
}

export type MoveType = {
    move: {
        name: string
        url: string
    }
    version_group_details: any
}

export type StatType = {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export interface IAllTypes {
    count: number
    next: string | null
    previous: string | null
    results: Array<IType>
}

export interface IType {
    name: string
    url: string
}