import List from '../../ui/atoms/List'
import styles from './AbilityList.module.scss'

const AbilityList = ({abilities}) => {
    return <div className={styles.abilities}>
        <h4>Abilities :</h4>
        <List
            collection={abilities}
            uniqueAttr={ability => ability.ability.name}
            render={(ability) => <p>{ability.ability.name}</p>}
            className={styles.ablitiyList}
        />
    </div>
}

export default AbilityList
