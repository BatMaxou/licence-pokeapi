import React from "react";
import Card from "../ui/atoms/Card";
import styles from './PokemonCard.module.scss'

const PokemonCard = ({pokemon, onClick}) => {
    return <Card className={styles.card} onClick={() => onClick(pokemon)}>
        <h3>{pokemon.name}</h3>
    </Card>
}

export default PokemonCard;
