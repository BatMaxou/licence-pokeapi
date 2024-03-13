
import styles from './PokemonModal.module.scss'
import AbilityList from '../List/AbilityList'
import TypeList from '../List/TypeList'
import List from '../ui/atoms/List'

const PokemonModalContent = ({details}) => {
    return <div className={styles.content}>
        <h2 className={styles.title}>{details.name}</h2>

        <div className={styles.image}>
            <img src={details.sprites.front_default} alt={`${details.name}-front-sprite`} />
        </div>

        <div className={styles.details}>
            <TypeList types={details.types} />
            <AbilityList abilities={details.abilities} />
            <div className={styles.baseExp}>
                <h4>Base Exp :</h4>
                <p>{details.base_experience}</p>
            </div>
            <List
                collection={details.stats}
                uniqueAttr={stat => stat.stat.name}
                render={stat => <div className={styles.baseStat}>
                    <h4>{stat.stat.name} :</h4>
                    <p>{stat.base_stat}</p>
                </div>}
                className={styles.statList}
            />
        </div>
    </div>
}

export default PokemonModalContent
