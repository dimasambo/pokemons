import {PokemonType} from "../../../types/types";
import {FC, useState} from "react";
import {Field, Form, Formik} from "formik";
import s from "./Search.module.scss"

type SearchPropsType = {
    pokemons: Array<PokemonType>
    setSearchedPokemons: (pokemons: Array<PokemonType>) => void
}

type InitialValuesFormType = {
    value: string
}

export const Search: FC<SearchPropsType> = ({pokemons, setSearchedPokemons}) => {

    const [searchedValue, setSearchedValue] = useState('')

    const onFormSubmit = (values: InitialValuesFormType) => {
        setSearchedValue(values.value)

        setSearchedPokemons(pokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(values.value.toLowerCase())
            })
        )
    }

    return <div className={s.searchWrapper}>
        <Formik
            enableReinitialize
            initialValues={{value: searchedValue}}
            onSubmit={onFormSubmit}
        >
            <Form className={''}>
                <Field type={"text"}
                       placeholder={"Search by pokemon name"}
                       className={s.input}
                       name={"value"}/>
                <button type="submit" className={s.button}>
                    Search
                </button>
            </Form>
        </Formik>
    </div>
}