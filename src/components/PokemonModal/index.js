import {useCallback, useEffect, useState} from 'react'

import styles from './PokemonModal.module.scss'
import Loader from '../ui/atoms/Loader'
import Modal from '../ui/atoms/Modal'
import PokemonModalContent from './content'

const PokemonModal = ({pokemon, setCurrentPokemon}) => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)

    const foundEvolutions = useCallback((name, chain, NextIsEvolutions = false) => {
        if (NextIsEvolutions) {
            Promise.all(chain.map(evolution => fetch(evolution.species.url)))
                .then(responses => Promise.all(responses.map(response => response.json())))
                .then(data => {
                    console.log(data);
                })
        }

        if (chain.species?.name === name) {
            foundEvolutions(name, chain.evolves_to, true)
        }
    }, [])

    useEffect(() => {
        setDetails(null)
        setLoading(true)
        fetch(pokemon?.url)
            .then(response => response.json())
            .then(data => {
                setDetails({...data})

                fetch(data.species?.url)
                    .then(response => response.json())
                    .then(data => {
                        data.evolves_from_species && fetch(data.evolves_from_species.url)
                            .then(response => response.json())
                            .then(data => {
                                setDetails(details => ({...details, evolves_from: data}))
                            })
                        data.evolution_chain && fetch(data.evolution_chain.url)
                            .then(response => response.json())
                            .then(data => {
                                console.log(foundEvolutions(pokemon.name, data.chain));
                                setDetails(details => ({...details, evolution_chain: data.chain}))
                            })
                    })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [pokemon, foundEvolutions])

    // console.log(details);

    return <Modal
        closeModal={() => setCurrentPokemon(null)}
        renderContent={() => <>
            {details && <PokemonModalContent details={details} />}

            {loading && <div className={styles.loader}>
                <Loader />
            </div>}
        </>}
        renderFooter={() => <div className={styles.footer} />}
    />
}

export default PokemonModal
